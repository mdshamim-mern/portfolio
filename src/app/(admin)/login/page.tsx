"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaArrowRight,
  FaLock,
} from "react-icons/fa";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const [busy, setBusy] = useState(false);
  async function login(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok || !data.success)
        throw new Error(data.error || "Unable to sign in.");
      const next =
        new URLSearchParams(window.location.search).get("next") || "/dashboard";
      window.location.assign(
        /^\/dashboard(?:\/|$)/.test(next) ? next : "/dashboard",
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Connection failed. Please try again.",
      );
      setBusy(false);
    }
  }
  return (
    <div className="admin-surface min-h-[100svh] px-4 py-6 sm:px-8">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-600 hover:text-sky-700"
      >
        <FaArrowLeft aria-hidden /> Back to portfolio
      </Link>
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-5xl items-center gap-12 py-8 lg:grid-cols-2">
        <div className="hidden lg:block">
          <span className="eyebrow">SHAMIM.DEV / WORKSPACE</span>
          <h1 className="mt-6 text-6xl font-black leading-[1.08] tracking-tight text-slate-900">
            Your work.
            <br />
            <span className="text-sky-600">One clear view.</span>
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-slate-600">
            A little space to manage your projects, keep your profile fresh, and
            stay connected.
          </p>
          <div className="glass-panel mt-10 flex max-w-sm items-center gap-4 p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-100 text-sky-700">
              <FaLock />
            </span>
            <div>
              <p className="font-bold">Made for your next chapter</p>
              <p className="mt-1 text-sm text-slate-500">
                Projects · Profile · Conversations
              </p>
            </div>
          </div>
        </div>
        <section
          className="glass-panel mx-auto w-full max-w-md p-6 sm:p-10"
          aria-labelledby="login-title"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900 text-xl font-black text-white">
              S<span className="sr-only">hamim</span>
            </span>
            <span className="font-bold tracking-tight">
              Shamim<span className="text-sky-600">.dev</span>
            </span>
          </div>
          <p className="eyebrow">WELCOME BACK</p>
          <h2
            id="login-title"
            className="mt-3 text-3xl font-black tracking-tight"
          >
            Admin sign in
          </h2>
          <p className="mb-8 mt-3 text-sm leading-relaxed text-slate-500">
            Sign in to take care of your portfolio.
          </p>
          {error && (
            <p role="alert" className="notice-error mb-5">
              {error}
            </p>
          )}
          <form onSubmit={login} className="space-y-5">
            <div>
              <label htmlFor="login-email" className="field-label">
                Email address
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="field-label">
                Password
              </label>
              <div className="relative">
                <input
                  id="login-password"
                  name="password"
                  type={visible ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="field pr-14"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  aria-label={visible ? "Hide password" : "Show password"}
                  aria-pressed={visible}
                  onClick={() => setVisible(!visible)}
                  className="absolute inset-y-0 right-1 grid w-11 place-items-center rounded-xl text-slate-500 hover:text-sky-700"
                >
                  {visible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button disabled={busy} className="primary-button w-full">
              {busy ? "Signing in…" : "Sign in to workspace"}
              <FaArrowRight aria-hidden />
            </button>
          </form>
          <p className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500">
            <FaLock aria-hidden /> Private portfolio workspace
          </p>
        </section>
      </div>
    </div>
  );
}
