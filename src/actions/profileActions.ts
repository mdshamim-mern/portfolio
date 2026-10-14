"use server";

import { requireAdmin } from "@/lib/auth";

import { revalidatePath } from "next/cache";

export async function refreshProfile() {
  await requireAdmin();
  revalidatePath("/");
  revalidatePath("/dashboard/settings");
}
