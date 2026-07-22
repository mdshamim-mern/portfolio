"use client";

import { useEffect, useRef } from "react";

export default function ViewTracker() {
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      fetch("/api/views", { method: "POST" }).catch((err) => console.error(err));
      hasFetched.current = true;
    }
  }, []);

  return null;
}