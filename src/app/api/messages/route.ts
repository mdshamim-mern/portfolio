import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import Message from "@/models/Message";

export async function GET() {
  try {
    await connectToDB();
    const messages = await Message.find({}).sort({ createdAt: -1 });
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();

    const newMessage = await Message.create({
      name: body.name,
      email: body.email,
      projectType: body.projectType,
      message: body.message,
      isRead: false, 
    });

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error("Database save error:", error); 
    return NextResponse.json({ error: "Failed to add message" }, { status: 500 });
  }
}