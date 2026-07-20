"use server"; 

import prisma from "@/lib/prisma"; 
import { revalidatePath } from "next/cache"; 

export async function createProject(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;
    const description = formData.get("description") as string;
    const techStackString = formData.get("techStack") as string;
    const liveLink = formData.get("liveLink") as string;
    const githubLink = formData.get("githubLink") as string;
    const challenges = formData.get("challenges") as string;
    const futurePlans = formData.get("futurePlans") as string;

    const techStack = techStackString.split(",").map((tech) => tech.trim());

    await prisma.project.create({
      data: {
        title,
        image,
        description,
        techStack,
        liveLink,
        githubLink,
        challenges,
        futurePlans,
      },
    });

    revalidatePath("/projects");
    revalidatePath("/");
    
    return { success: true, message: "Project created successfully!" };
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, message: "Failed to create project." };
  }
}

export async function getAllProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc", 
      },
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}