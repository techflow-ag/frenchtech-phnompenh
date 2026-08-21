import { config, fields, collection } from "@keystatic/core";

// Local file editing in dev; Keystatic Cloud in production so association editors
// log in by email and publish online (Cloud commits to the repo -> Vercel redeploys).
const storage =
  process.env.NODE_ENV === "development"
    ? ({ kind: "local" } as const)
    : ({ kind: "cloud" } as const);

export default config({
  storage,
  cloud: { project: "techflow-ag/frenchtech-phnompenh" },
  ui: {
    brand: { name: "La French Tech Phnom Penh" },
  },
  collections: {
    articles: collection({
      label: "Newsroom articles",
      slugField: "title",
      path: "content/articles/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "category", "date"],
      schema: {
        title: fields.slug({
          name: { label: "Title" },
          slug: {
            description:
              "The URL segment (e.g. my-article). Change with care once published.",
          },
        }),
        status: fields.select({
          label: "Status",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ],
          defaultValue: "draft",
        }),
        date: fields.date({
          label: "Publication date",
          defaultValue: { kind: "today" },
        }),
        author: fields.text({
          label: "Author",
          defaultValue: "La French Tech Phnom Penh",
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Ecosystem", value: "Ecosystem" },
            { label: "Business", value: "Business" },
            { label: "Event", value: "Event" },
            { label: "Guide", value: "Guide" },
            { label: "Financing", value: "Financing" },
            { label: "Community", value: "Community" },
          ],
          defaultValue: "Ecosystem",
        }),
        readingTime: fields.integer({
          label: "Reading time (minutes)",
          defaultValue: 5,
        }),
        cover: fields.text({
          label: "Cover image path",
          description: "Path under /public, e.g. /media/photos/phnompenh-skyline.jpg",
        }),
        excerpt: fields.text({
          label: "Excerpt",
          description: "Short summary shown on the Newsroom list.",
          multiline: true,
        }),
        metaDescription: fields.text({
          label: "SEO meta description",
          multiline: true,
        }),
        keywords: fields.array(
          fields.text({ label: "Keyword" }),
          { label: "SEO keywords", itemLabel: (props) => props.value },
        ),
        content: fields.markdoc({
          label: "Article body",
          options: { image: false },
        }),
      },
    }),

    events: collection({
      label: "Events",
      slugField: "title",
      path: "content/events/*",
      columns: ["title", "date"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        status: fields.select({
          label: "Status",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ],
          defaultValue: "published",
        }),
        featured: fields.checkbox({
          label: "Featured",
          description: "Highlight this event.",
          defaultValue: false,
        }),
        date: fields.text({
          label: "Start (ISO date-time)",
          description: "e.g. 2026-11-14T09:00:00+07:00",
        }),
        endDate: fields.text({
          label: "End (ISO date-time, optional)",
          description: "For multi-day events. Leave empty for single-day.",
        }),
        endTime: fields.text({
          label: "End time (optional)",
          description: 'e.g. "21:30" for a single-day event.',
        }),
        venue: fields.text({ label: "Venue" }),
        city: fields.text({ label: "City", defaultValue: "Phnom Penh" }),
        description: fields.text({ label: "Short description", multiline: true }),
        image: fields.text({
          label: "Image path",
          description: "Path under /public, e.g. /media/events/koh-pich-cbd.jpg",
        }),
        registrationUrl: fields.text({
          label: "Registration URL",
          defaultValue: "/events/register",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (p) => p.value,
        }),
        longDescription: fields.array(
          fields.text({ label: "Paragraph", multiline: true }),
          { label: "Full description (paragraphs)", itemLabel: (p) => p.value.slice(0, 40) },
        ),
        stats: fields.array(
          fields.object({
            value: fields.text({ label: "Value" }),
            label: fields.text({ label: "Label" }),
          }),
          { label: "Key figures", itemLabel: (p) => `${p.fields.value.value} — ${p.fields.label.value}` },
        ),
        agenda: fields.array(
          fields.object({
            when: fields.text({ label: "When" }),
            title: fields.text({ label: "Title" }),
            detail: fields.text({ label: "Detail", multiline: true }),
          }),
          { label: "Programme", itemLabel: (p) => p.fields.title.value },
        ),
      },
    }),

    board: collection({
      label: "Board members",
      slugField: "name",
      path: "content/board/*",
      columns: ["name", "role"],
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        order: fields.integer({
          label: "Order",
          description: "Display order (lower shows first).",
          defaultValue: 0,
        }),
        role: fields.select({
          label: "Role",
          options: [
            { label: "Co-President", value: "Co-President" },
            { label: "Board Member", value: "Board Member" },
          ],
          defaultValue: "Board Member",
        }),
        title: fields.text({ label: "Professional title" }),
        company: fields.text({ label: "Company (optional)" }),
        photo: fields.text({
          label: "Photo path",
          description: "Path under /public, e.g. /images/board/cedric-kang.jpg",
        }),
        linkedin: fields.text({ label: "LinkedIn URL (optional)" }),
      },
    }),

    community: collection({
      label: "Community members",
      slugField: "name",
      path: "content/community/*",
      columns: ["name", "sector"],
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        sector: fields.text({ label: "Sector" }),
        description: fields.text({ label: "Description", multiline: true }),
        logo: fields.text({
          label: "Logo path (optional)",
          description: "Path under /public, e.g. /images/members/bikay.png",
        }),
        website: fields.text({ label: "Website (optional)" }),
        type: fields.select({
          label: "Type",
          options: [
            { label: "Startup", value: "startup" },
            { label: "Company", value: "company" },
            { label: "Institution", value: "institution" },
          ],
          defaultValue: "startup",
        }),
      },
    }),
  },
});
