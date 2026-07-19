"use server";

import { connectToDB } from "@/lib/db";
import Project from "@/models/Project";
import Message from "@/models/Message";
import PageView from "@/models/PageView"; 

export async function getDashboardStats() {
  try {
    await connectToDB();

    const totalProjects = await Project.countDocuments();

    const unreadMessages = await Message.countDocuments({ isRead: false });

    const viewDoc = await PageView.findOne();
    const profileViews = viewDoc ? viewDoc.views : 0; 

    return {
      success: true,
      data: {
        totalProjects,
        unreadMessages,
        profileViews,
      },
    };
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return {
      success: false,
      data: { totalProjects: 0, unreadMessages: 0, profileViews: 0 },
    };
  }
}