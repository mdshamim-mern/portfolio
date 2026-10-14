import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { connectToDB } from "@/lib/db";
import Message from "@/models/Message";
import { revalidatePath } from "next/cache";
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { isRead } = await req.json();
    if (typeof isRead !== "boolean" || !/^[a-f0-9]{24}$/i.test(params.id))
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    await connectToDB();
    const message = await Message.findByIdAndUpdate(params.id, { isRead });
    if (!message)
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    revalidatePath("/dashboard");
    revalidatePath("/dashboard/messages");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Could not update message" },
      { status: 500 },
    );
  }
}
