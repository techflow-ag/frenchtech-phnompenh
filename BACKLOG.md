# Backlog

Ideas parked with a recommended approach, so whoever picks one up does not
start from a blank page. Nothing here is built yet.

---

## 1. Draft replies in the shared inbox

**What** — an agent watching `frenchtech.pp@gmail.com` that classifies incoming
mail and leaves a **draft** reply for a human to review and send. Never sends
on its own.

**Recommended: Google Apps Script, not n8n.**

Apps Script runs inside the Google account itself, on a time-driven trigger
(every 10–15 minutes). No server, no hosting bill, and no OAuth plumbing to
maintain: the script is already authorised as the mailbox. Roughly 100 lines.

```
trigger (15 min)
  └─ GmailApp.search('is:unread -label:drafted newer_than:7d')
       └─ classify (LLM)  →  category
       └─ generate reply (LLM, category-specific prompt + signature)
       └─ thread.createDraftReply(body)
       └─ thread.addLabel('drafted')       ← idempotence, same idea as
                                              EMAIL_BIENVENUE in the cron
```

Categories worth handling: membership question, partnership/sponsorship,
speaking or event proposal, press, student or job enquiry, supplier spam
(draft nothing, just label).

**Which model** — two honest options:

| | Cost at ~20 emails/day | Why |
|---|---|---|
| **Claude Haiku 4.5** | a few cents a month | Best quality on bilingual FR/EN business replies. Worth it. |
| **Gemini Flash** | €0 (free tier) | Genuinely free, native to the Google account. Slightly weaker in French. |

Start on Haiku. The cost is noise, and a bad draft costs more time than it
saves.

**Why not n8n** — it works, but it needs hosting and it puts the logic in a
canvas nobody can review or version. Apps Script lives with the mailbox and
fits in one file.

**Watch out for** — never auto-send; keep the `drafted` label so restarts do
not pile up duplicates; put the prompt in a separate file so the board can
adjust tone without touching code.

---

## 2. On-brand social banners, requested from Telegram

**What** — community members ask for a banner and get one back, without going
through one person's design account.

**Recommended: a Telegram bot that renders HTML templates, not an image model.**

Diffusion models are bad at text. A banner is mostly text — a title, a date, a
venue, a logo — over a background. Rendering an HTML/CSS template to PNG gives
crisp type, exact brand colours and a reproducible result, for free.

```
Telegram "French Tech Design" group
  └─ /banner Apéro Tech #13 | 12 Nov | Raffles Le Royal
       └─ bot → Vercel route → @vercel/og renders the template → PNG
       └─ posts the image back in the group
```

- **`@vercel/og`** (Satori) already ships with the stack, costs nothing and
  runs in the existing project.
- Templates live in the repo next to the site, so they inherit the real brand
  tokens from `globals.css` instead of drifting.
- Everyone in the group can use it. No seats, no shared password, no Drive
  permissions to manage.

**On the Google Drive idea** — reading reference banners from Drive to "keep
them in context" only helps if a model is improvising each time, which is
exactly what we do not want. Convert the existing banners into two or three
fixed templates instead. Drive then holds the exports, not the source of truth.

**If freeform images are genuinely needed** later (illustrations, not
banners), add one `/image` command backed by an image model, with a spend cap.
Keep it separate from `/banner`.

**Watch out for** — fonts must be loaded explicitly in Satori; Khmer script
needs its own font file; cap the request rate so the group cannot run up a
bill.

---

## 3. Smaller items

- The Newsletter and Welcome Guide forms have never received a single
  submission. Check whether they are actually reachable on the site.
- Rotate `BREVO_API_KEY`: it was shared in plain text during setup.
- `/privacy` was drafted quickly and should be read by someone who can commit
  the association to it.
