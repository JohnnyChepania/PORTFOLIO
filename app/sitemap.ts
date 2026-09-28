import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-dun-theta-9bkg4wabky.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
