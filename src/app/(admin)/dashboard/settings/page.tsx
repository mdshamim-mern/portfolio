"use client";
import { useEffect, useState } from "react";
import { refreshProfile } from "@/actions/profileActions";
const empty = {
  name: "",
  email: "",
  phone: "",
  image: "",
  resume: "",
  github: "",
  linkedin: "",
  facebook: "",
  heroBio: "",
  contactBio: "",
};
const labels: Record<keyof typeof empty, string> = {
  name: "Full name",
  email: "Contact email",
  phone: "Phone / WhatsApp",
  image: "Profile image URL",
  resume: "Resume URL",
  github: "GitHub URL",
  linkedin: "LinkedIn URL",
  facebook: "Facebook URL",
  heroBio: "Hero introduction",
  contactBio: "Contact introduction",
};
export default function SettingsPage() {
  const [values, setValues] = useState(empty);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const [retry, setRetry] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");
    fetch("/api/profile")
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || !data.success)
          throw new Error("Could not load your profile.");
        return data.data;
      })
      .then((data) => {
        if (active) {
          const next = { ...empty };
          for (const key of Object.keys(empty) as (keyof typeof empty)[])
            next[key] = data?.[key] || "";
          setValues(next);
          setLoaded(true);
        }
      })
      .catch((err) => {
        if (active) setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [retry]);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setSaved(false);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.success)
        throw new Error(data.error || "Could not save your profile.");
      await refreshProfile();
      setSaved(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Connection failed. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="page-heading">Profile settings</h1>
      <p className="mb-8 mt-2 text-sm text-slate-500">
        Keep your introduction, contact details, and links up to date.
      </p>
      {loading ? (
        <div className="glass-panel p-10" role="status">
          Loading profile…
        </div>
      ) : (
        <form onSubmit={submit} className="glass-panel space-y-6 p-5 sm:p-8">
          {error && (
            <div role="alert" className="notice-error">
              {error}
              <button
                type="button"
                className="ml-3 underline"
                onClick={() => setRetry(retry + 1)}
              >
                Reload profile
              </button>
            </div>
          )}
          {saved && (
            <p role="status" className="notice-success">
              Your profile has been updated.
            </p>
          )}
          <div className="grid gap-6 sm:grid-cols-2">
            {(Object.keys(empty) as (keyof typeof empty)[]).map((key) => (
              <div
                key={key}
                className={key.endsWith("Bio") ? "sm:col-span-2" : ""}
              >
                <label htmlFor={`profile-${key}`} className="field-label">
                  {labels[key]}
                </label>
                {key.endsWith("Bio") ? (
                  <textarea
                    id={`profile-${key}`}
                    rows={4}
                    value={values[key]}
                    onChange={(e) => {
                      setValues({ ...values, [key]: e.target.value });
                      setSaved(false);
                    }}
                    className="field"
                  />
                ) : (
                  <input
                    id={`profile-${key}`}
                    name={key}
                    type={
                      key === "email"
                        ? "email"
                        : key === "phone"
                          ? "tel"
                          : ["github", "linkedin", "facebook"].includes(key)
                            ? "url"
                            : "text"
                    }
                    value={values[key]}
                    onChange={(e) => {
                      setValues({ ...values, [key]: e.target.value });
                      setSaved(false);
                    }}
                    placeholder={
                      key === "phone" ? "+880 1XXXXXXXXX" : undefined
                    }
                    className="field"
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            Image and resume fields accept an HTTPS URL or a local path such as
            /resume/Shamim_Resume_update.pdf.
          </p>
          <div className="flex justify-end border-t border-slate-200/70 pt-6">
            <button
              className="primary-button w-full sm:w-auto"
              disabled={busy || !loaded}
            >
              {busy ? "Saving changes…" : "Save profile"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
