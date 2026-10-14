import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { connectToDB } from "@/lib/db";
import Message from "@/models/Message";
export async function GET() {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await connectToDB();
    return NextResponse.json(await Message.find({}).sort({ createdAt: -1 }));
  } catch {
    return NextResponse.json(
      { error: "Could not load messages." },
      { status: 503 },
    );
  }
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.website) return NextResponse.json({ success: true });
    const { name, email, projectType, message } = body;
    if (
      ![name, email, projectType, message].every(
        (v) => typeof v === "string" && v.trim(),
      ) ||
      name.length > 150 ||
      email.length > 254 ||
      projectType.length > 100 ||
      message.length > 10000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    )
      return NextResponse.json(
        { error: "Please enter valid contact details and a message." },
        { status: 400 },
      );
    await connectToDB();
    const recent = await Message.exists({
      email: email.trim(),
      createdAt: { $gt: new Date(Date.now() - 60000) },
    });
    if (recent)
      return NextResponse.json(
        { error: "Please wait a minute before sending another inquiry." },
        { status: 429 },
      );
    await Message.create({
      name: name.trim(),
      email: email.trim(),
      projectType: projectType.trim(),
      message: message.trim(),
      isRead: false,
    });
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key:
            process.env.WEB3FORMS_ACCESS_KEY ||
            "f16be326-2cea-40e1-8f10-02e6190b17b2",
          subject: "New portfolio inquiry",
          name,
          email,
          project_type: projectType,
          message,
        }),
        signal: AbortSignal.timeout(5000),
      });
    } catch {
      /* The inquiry is already safely stored in the admin inbox. */
    }
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      {
        error:
          "Could not send your inquiry. Please try again or contact me by email.",
      },
      { status: 503 },
    );
  }
}
