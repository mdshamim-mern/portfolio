"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSkill(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const category = formData.get("category") as string; 

    await prisma.skill.create({
      data: {
        name,
        category,
      },
    });

    revalidatePath("/");
    return { success: true, message: "Skill added successfully!" };
  } catch (error) {
    console.error("Error adding skill:", error);
    return { success: false, message: "Failed to add skill." };
  }
}

export async function getAllSkills() {
  try {
    const skills = await prisma.skill.findMany();
    return skills;
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
}