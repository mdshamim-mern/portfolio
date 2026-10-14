import "server-only";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySession } from "./session";
export async function isAdmin() {
  return verifySession(cookies().get(SESSION_COOKIE)?.value);
}
export async function requireAdmin() {
  if (!(await isAdmin())) throw new Error("Please sign in to continue.");
}
