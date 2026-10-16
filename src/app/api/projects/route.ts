import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { connectToDB } from "@/lib/db";
import Project from "@/models/Project";
import { projectInput } from "@/lib/validation";
import { correctProjectContent } from "@/lib/project-content";
export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  if (!(await isAdmin()))
    return NextResponse.json(
      { success: false, error: "Please sign in to continue." },
      { status: 401 },
    );
  let body;
  try {
    body = projectInput(await req.json());
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Invalid project",
      },
      { status: 400 },
    );
  }
  try {
    await connectToDB();
    const data = await Project.create(body);
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "Could not save project. Please try again." },
      { status: 500 },
    );
  }
}
export async function GET() {
  try {
    await connectToDB();
    const data = await Project.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: data.map(project => correctProjectContent(project.toObject())) });
  } catch {
    return NextResponse.json(
      { success: false, error: "Projects are temporarily unavailable." },
      { status: 503 },
    );
  }
}
