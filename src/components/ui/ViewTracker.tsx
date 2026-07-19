"use client";

import { useEffect, useRef } from "react";

export default function ViewTracker() {
  // StrictMode এ যেন ডাবল কাউন্ট না হয়, তাই useRef ব্যবহার করা হলো
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      // ব্যাকগ্রাউন্ডে API কল করে ভিউ বাড়িয়ে দিচ্ছে
      fetch("/api/views", { method: "POST" }).catch((err) => console.error(err));
      hasFetched.current = true;
    }
  }, []);

  return null; // এই কম্পোনেন্ট স্ক্রিনে কিছুই দেখাবে না, শুধু আড়ালে কাজ করবে
}