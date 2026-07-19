import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Shamim's Portfolio API is running perfectly!",
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}