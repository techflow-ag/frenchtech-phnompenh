import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProfileForm } from "@/components/ProfileForm";
import { verifyEmail } from "@/lib/profile-token";

export const metadata: Metadata = {
  title: "Complete your profile",
  description:
    "Add your photo, LinkedIn and a short bio so the rest of La French Tech Phnom Penh knows who you are.",
  robots: { index: false },
};

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ e?: string; t?: string }>;
}) {
  const { e = "", t = "" } = await searchParams;
  const valid = verifyEmail(e, t);

  return (
    <>
      <PageHero
        eyebrow="Members"
        title="Complete your profile"
        khmer="ប្រវត្តិរូប"
        intro="A photo and two lines are enough. This is what the rest of the community sees on the members page."
      />

      <section className="mx-auto max-w-2xl px-5 py-16 md:py-24">
        {valid ? (
          <ProfileForm email={e} token={t} />
        ) : (
          <div className="border border-line bg-mist p-8">
            <h2 className="display text-xl text-ink">
              This link is not valid
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-soft/80">
              Profile links are personal and come from your welcome email. Open
              the one we sent you, or{" "}
              <Link href="/contact" className="text-bleu underline">
                get in touch
              </Link>{" "}
              and we will send you a fresh one.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
