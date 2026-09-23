This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment variables

Set these in the Vercel project (Settings → Environment Variables) and in
`.env.local` for local development. None of them are optional in production:
a missing key doesn't break a form submission, it just silently skips that
integration.

| Variable | Used by | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | `src/lib/mail.ts` | Sends the notification email for every form submission. |
| `RESEND_AUDIENCE_ID` | `src/lib/mail.ts` | Optional Resend audience the newsletter and welcome-guide forms subscribe to. |
| `BREVO_API_KEY` | `src/lib/brevo.ts` | Upserts every lead into the Brevo CRM (one list per form, `EVT_*` attributes per event). |

`BREVO_API_KEY` is deliberately not set on preview deployments, so a test
branch can never write into the live CRM.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
