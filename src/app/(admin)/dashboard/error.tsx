"use client";
export default function DashboardError({ reset }: { reset: () => void }) {
  return (
    <div className="glass-panel p-8">
      <h1 className="page-heading">Something didn’t load</h1>
      <p className="mt-3 text-slate-500">
        Your data has not been changed. Try loading this page again.
      </p>
      <button onClick={reset} className="primary-button mt-6">
        Try again
      </button>
    </div>
  );
}
