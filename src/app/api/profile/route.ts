import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import Profile from "@/models/Profile";
import { connectToDB } from "@/lib/db";
import { profileInput } from "@/lib/validation";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({ success: true, data: await Profile.findOne() });
  } catch {
    return NextResponse.json(
      { success: false, error: "Profile is temporarily unavailable." },
      { status: 503 },
    );
  }
}
export async function POST(req: Request) {
  if (!(await isAdmin()))
    return NextResponse.json(
      { success: false, error: "Please sign in to continue." },
      { status: 401 },
    );
  let body;
  try {
    body = profileInput(await req.json());
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Invalid profile",
      },
      { status: 400 },
    );
  }
  try {
    await connectToDB();
    const data = await Profile.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true, runValidators: true },
    );
    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not update profile. Please try again." },
      { status: 500 },
    );
  }
}
