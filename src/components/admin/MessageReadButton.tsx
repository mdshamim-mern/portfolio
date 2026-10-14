"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function MessageReadButton({
  id,
  isRead,
}: {
  id: string;
  isRead: boolean;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  async function update() {
    setBusy(true);
    setError("");
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isRead: !isRead }),
      });
      if (!res.ok) throw new Error();
      router.refresh();
    } catch {
      setError("Could not update this message.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <div>
      <button disabled={busy} onClick={update} className="secondary-button">
        {busy ? "Updating…" : isRead ? "Mark as unread" : "Mark as read"}
      </button>
      {error && (
        <p role="alert" className="mt-2 text-xs text-rose-600">
          {error}
        </p>
      )}
    </div>
  );
}
