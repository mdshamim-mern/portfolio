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
    
    const updateData = Object.fromEntries(
      Object.entries(body).filter(([_, v]) => v !== "" && v !== null && v !== undefined)
    );

    let profile = await Profile.findOne();
    
    if (profile) {
      if (Object.keys(updateData).length > 0) {
        profile = await Profile.findOneAndUpdate({}, updateData, { new: true });
      }
    } else {
      profile = await Profile.create(updateData);
    }
    
    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}