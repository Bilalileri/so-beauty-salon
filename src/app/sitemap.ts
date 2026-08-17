import type { MetadataRoute } from "next";
import { treatments } from "./treatments";
import { articles } from "./ratgeber/articles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://beautyso.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/media/soprano-ice-platinum.png`],
    },
    ...treatments.map((treatment) => ({
      url: `${siteUrl}${treatment.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: treatment.slug === "laser-haarentfernung" ? 0.9 : 0.75,
      images: treatment.slug === "laser-haarentfernung" ? [`${siteUrl}/media/soprano-ice-platinum.png`] : undefined,
    })),
    {
      url: `${siteUrl}/ratgeber`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...articles.map((article) => ({
      url: `${siteUrl}/ratgeber/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
    {
      url: `${siteUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
