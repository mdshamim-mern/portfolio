const encoder = new TextEncoder();
export const SESSION_COOKIE = "portfolio_session";
export const SESSION_SECONDS = 60 * 60 * 24;
async function signingKey() {
  const secret = process.env.AUTH_SECRET || process.env.ADMIN_PASSWORD;
  if (!secret) throw new Error("Admin authentication is not configured");
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}
export async function createSession() {
  const payload = `${Date.now() + SESSION_SECONDS * 1000}.${crypto.randomUUID()}`;
  const signature = await crypto.subtle.sign(
    "HMAC",
    await signingKey(),
    encoder.encode(payload),
  );
  return `${payload}.${Array.from(new Uint8Array(signature), (b) => b.toString(16).padStart(2, "0")).join("")}`;
}
export async function verifySession(token?: string) {
  if (!token) return false;
  try {
    const parts = token.split(".");
    if (
      parts.length !== 3 ||
      !/^\d+$/.test(parts[0]) ||
      !/^[a-f0-9]{64}$/.test(parts[2])
    )
      return false;
    const expires = Number(parts[0]);
    if (expires <= Date.now() || expires > Date.now() + SESSION_SECONDS * 1000)
      return false;
    const bytes = new Uint8Array(
      parts[2].match(/.{2}/g)!.map((b) => parseInt(b, 16)),
    );
    return await crypto.subtle.verify(
      "HMAC",
      await signingKey(),
      bytes,
      encoder.encode(`${parts[0]}.${parts[1]}`),
    );
  } catch {
    return false;
  }
}
