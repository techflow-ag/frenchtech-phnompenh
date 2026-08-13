import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  keywords: string[];
  date: string;
  author: string;
  category: string;
  readingTime: number;
  cover: string;
};

export async function listArticles(): Promise<ArticleMeta[]> {
  const all = await reader.collections.articles.all();
  return all
    .filter(({ entry }) => entry.status === "published")
    .map(({ slug, entry }) => ({
      slug,
      title: entry.title,
      excerpt: entry.excerpt,
      metaDescription: entry.metaDescription,
      keywords: [...entry.keywords],
      date: entry.date ?? "",
      author: entry.author,
      category: entry.category,
      readingTime: entry.readingTime ?? 5,
      cover: entry.cover,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function listArticleSlugs(): Promise<string[]> {
  const all = await reader.collections.articles.all();
  return all
    .filter(({ entry }) => entry.status === "published")
    .map(({ slug }) => slug);
}

export async function getArticle(slug: string) {
  const entry = await reader.collections.articles.read(slug);
  if (!entry || entry.status !== "published") return null;
  const content = await entry.content();
  return {
    slug,
    title: entry.title,
    excerpt: entry.excerpt,
    metaDescription: entry.metaDescription,
    keywords: [...entry.keywords],
    date: entry.date ?? "",
    author: entry.author,
    category: entry.category,
    readingTime: entry.readingTime ?? 5,
    cover: entry.cover,
    content,
  };
}
