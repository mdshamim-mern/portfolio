export function phoneDigits(phone: string) {
  const digits = phone.replace(/[^0-9]/g, "");
  if (/^01\d{9}$/.test(digits)) return `88${digits}`;
  return digits.startsWith("00") ? digits.slice(2) : digits;
}
export function safeLink(value?: string, fallback = "") {
  if (!value) return fallback;
  if (value.startsWith("/") && !value.startsWith("//")) return value;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : fallback;
  } catch {
    return fallback;
  }
}
export function cleanOverview(value = "") {
  const text = value.trim();
  const middle = text.length / 2;
  return Number.isInteger(middle) &&
    text.slice(0, middle) === text.slice(middle)
    ? text.slice(0, middle)
    : text;
}
