import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import Project from "@/models/Project";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    
    const project = await Project.findById(params.id);
    
    if (!project) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, data: project });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const body = await req.json();
    
    const updatedProject = await Project.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true
    });

    if (!updatedProject) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedProject, message: "Project updated successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    
    const deletedProject = await Project.findByIdAndDelete(params.id);
    
    if (!deletedProject) {
      return NextResponse.json({ success: false, error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to delete project" }, { status: 500 });
  }
}