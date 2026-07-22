"use server";

import { revalidatePath } from "next/cache";

export async function refreshProfile() {
  revalidatePath("/");
  revalidatePath("/dashboard/settings");
}