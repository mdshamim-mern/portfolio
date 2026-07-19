"use server"; 

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function sendMessage(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string; 
    const message = formData.get("message") as string;

    await prisma.message.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    revalidatePath("/dashboard");
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending message:", error);
    return { success: false, message: "Failed to send message." };
  }
}

export async function getAllMessages() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}