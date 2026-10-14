"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBars,
  FaTimes,
  FaArrowUp,
  FaChartBar,
  FaPlus,
  FaFolderOpen,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
const links = [
  { href: "/dashboard", label: "Overview", icon: FaChartBar },
  { href: "/dashboard/projects", label: "Projects", icon: FaFolderOpen },
  { href: "/dashboard/add-project", label: "Add project", icon: FaPlus },
  { href: "/dashboard/messages", label: "Messages", icon: FaEnvelope },
  { href: "/dashboard/settings", label: "Profile settings", icon: FaCog },
];
export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    const panel = dialog.current;
    if (open) {
      panel?.showModal();
      const before = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = before;
        panel?.close();
      };
    }
    dialog.current?.close();
  }, [open]);
  async function logout() {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      if (!res.ok) throw new Error();
      window.location.assign("/login");
    } catch {
      setError("Could not sign out. Please try again.");
      setBusy(false);
    }
  }
  function navigation() {
    return (
      <>
        <Link href="/dashboard" className="mb-10 flex items-center gap-3 px-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-900 text-xl font-black text-white">
            S
          </span>
          <span>
            <strong className="block text-lg tracking-tight">
              Shamim<span className="text-sky-600">.dev</span>
            </strong>
            <span className="text-[10px] font-bold tracking-[.18em] text-slate-500">
              PORTFOLIO STUDIO
            </span>
          </span>
        </Link>
        <p className="eyebrow mb-3 px-4">WORKSPACE</p>
        <nav aria-label="Admin navigation" className="space-y-2">
          {links.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/dashboard" ? path === href : path.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-semibold transition ${active ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10" : "text-slate-600 hover:bg-white/80 hover:text-sky-700"}`}
              >
                <Icon
                  aria-hidden
                  className={active ? "text-sky-300" : "text-slate-400"}
                />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto space-y-2 border-t border-slate-200/70 pt-6">
          <Link
            href="/"
            className="flex min-h-11 items-center gap-3 rounded-xl px-4 text-sm font-semibold text-slate-600 hover:bg-white"
          >
            <FaArrowUp className="rotate-45" aria-hidden /> View portfolio
          </Link>
          <button
            onClick={logout}
            disabled={busy}
            className="flex min-h-11 w-full items-center gap-3 rounded-xl px-4 text-sm font-semibold text-rose-600 hover:bg-rose-50"
          >
            <FaSignOutAlt aria-hidden />
            {busy ? "Signing out…" : "Sign out"}
          </button>
          {error && (
            <p role="alert" className="notice-error">
              {error}
            </p>
          )}
        </div>
      </>
    );
  }
  const title =
    links.find((l) => l.href !== "/dashboard" && path.startsWith(l.href))
      ?.label || "Overview";
  return (
    <div className="admin-surface admin-shell min-h-screen">
      <aside className="fixed inset-y-4 left-4 z-30 hidden w-64 overflow-y-auto flex-col rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-200/40 backdrop-blur-2xl lg:flex">
        {navigation()}
      </aside>
      <dialog
        ref={dialog}
        onCancel={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        className="admin-drawer"
        aria-label="Workspace menu"
      >
        <div className="flex min-h-[100dvh] flex-col p-5">
          <button
            onClick={() => {
              setOpen(false);
              trigger.current?.focus();
            }}
            aria-label="Close workspace menu"
            className="mb-5 ml-auto grid h-11 w-11 place-items-center rounded-xl bg-slate-100"
          >
            <FaTimes />
          </button>
          {navigation()}
        </div>
      </dialog>
      <div className="min-w-0 lg:pl-72">
        <header className="sticky top-0 z-20 flex min-h-20 items-center justify-between gap-3 border-b border-white/70 bg-white/70 px-4 backdrop-blur-xl sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              ref={trigger}
              onClick={() => setOpen(true)}
              aria-label="Open workspace menu"
              aria-expanded={open}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white lg:hidden"
            >
              <FaBars />
            </button>
            <div>
              <p className="text-xs text-slate-500">Workspace</p>
              <p className="font-bold">{title}</p>
            </div>
          </div>
          <Link href="/" className="secondary-button text-xs sm:text-sm">
            View website <span aria-hidden>↗</span>
          </Link>
        </header>
        <div className="mx-auto max-w-7xl p-4 pb-12 sm:p-6 lg:p-8">
          {children}
        </div>
        <p className="px-6 pb-6 text-center text-xs text-slate-500">
          Shamim.dev · Your portfolio workspace
        </p>
      </div>
    </div>
  );
}
