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
  },
});
