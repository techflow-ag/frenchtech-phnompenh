"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const BIO_MAX = 240;

const fieldClass =
  "mt-2 w-full border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-rouge";
const labelClass =
  "text-xs font-semibold uppercase tracking-wider text-ink/60";

export function ProfileForm({
  email,
  token,
}: {
  email: string;
  token: string;
}) {
  const [bio, setBio] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    fd.set("email", email);
    fd.set("token", token);
    try {
      const res = await fetch("/api/profile", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-line bg-mist p-8">
        <p className="flex items-center gap-2 font-medium text-ink">
          <Check className="h-5 w-5 text-rouge" />
          Saved. Thanks for taking the minute.
        </p>
        <p className="mt-2 text-sm text-ink-soft/80">
          Your profile will appear on the members page within the hour.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <p className="text-sm text-ink-soft/70">
        Signed in as <strong className="text-ink">{email}</strong>
      </p>

      <div>
        <label htmlFor="photo" className={labelClass}>
          Profile photo
        </label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className={`${fieldClass} file:mr-4 file:border-0 file:bg-ink file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-wider file:text-white`}
        />
        <p className="mt-2 text-xs text-ink-soft/70">
          JPG, PNG or WebP, up to 5 MB. A square photo works best.
        </p>
      </div>

      <div>
        <label htmlFor="linkedin" className={labelClass}>
          LinkedIn profile
        </label>
        <input
          id="linkedin"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/…"
          className={fieldClass}
        />
        <p className="mt-2 text-xs text-ink-soft/70">
          Kept internal for now, so the board knows who is who.
        </p>
      </div>

      <div>
        <label htmlFor="bio" className={labelClass}>
          Short bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={4}
          maxLength={BIO_MAX}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="What you do, and what you are happy to be asked about."
          className={fieldClass}
        />
        <p
          className={`mt-2 text-xs ${
            bio.length >= BIO_MAX ? "text-rouge" : "text-ink-soft/70"
          }`}
        >
          {bio.length} / {BIO_MAX} characters
        </p>
      </div>

      <button
        type="submit"
        disabled={busy}
        className="display inline-flex w-fit items-center gap-2 bg-rouge px-7 py-4 text-sm text-white transition-colors hover:bg-bleu disabled:opacity-60"
      >
        {busy ? "Saving…" : "Save my profile"}
        <ArrowRight className="h-4 w-4" />
      </button>

      {error && <p className="text-sm text-rouge">{error}</p>}
    </form>
  );
}
