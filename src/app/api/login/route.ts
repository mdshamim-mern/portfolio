import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { createSession, SESSION_COOKIE, SESSION_SECONDS } from "@/lib/session";
function matches(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminEmail || !adminPassword)
      return NextResponse.json(
        { success: false, error: "Admin sign-in is temporarily unavailable." },
        { status: 503 },
      );
    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !matches(email.trim().toLowerCase(), adminEmail.trim().toLowerCase()) ||
      !matches(password, adminPassword)
    ) {
      return NextResponse.json(
        { success: false, error: "The email or password is incorrect." },
        { status: 401 },
      );
    }
    const response = NextResponse.json({ success: true });
    response.cookies.set(SESSION_COOKIE, await createSession(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_SECONDS,
    });
    response.cookies.delete("token");
    return response;
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to sign in. Please try again." },
      { status: 400 },
    );
  }
}
