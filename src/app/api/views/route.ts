import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import PageView from "@/models/PageView";

export async function POST() {
  try {
    await connectToDB();
    
    let pageView = await PageView.findOne();
    
    if (!pageView) {
      pageView = await PageView.create({ views: 1 });
    } else {
      pageView.views += 1;
      await pageView.save();
    }
    
    return NextResponse.json({ success: true, views: pageView.views }, { status: 200 });
  } catch (error) {
    console.error("PageView Error:", error);
    return NextResponse.json({ success: false, error: "Failed to update views" }, { status: 500 });
  }
}