import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import Project from "@/models/Project";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    const newProject = await Project.create(body);
    return NextResponse.json({ success: true, data: newProject }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to add project" }, { status: 500 });
  }
}

export async function GET() {
  await connectToDB();
  const projects = await Project.find({});
  return NextResponse.json({ success: true, data: projects });
}