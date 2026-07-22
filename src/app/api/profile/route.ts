import { NextResponse } from "next/server";
import Profile from "@/models/Profile";
import { connectToDB } from "@/lib/db";

export async function GET() {
  try {
    await connectToDB();
    const profile = await Profile.findOne();
    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    let profile = await Profile.findOne();
    
    if (profile) {
      profile = await Profile.findOneAndUpdate({}, body, { new: true });
    } else {
      profile = await Profile.create(body);
    }
    
    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}