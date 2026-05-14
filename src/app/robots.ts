import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
        crawlDelay: 1,
      },
      // Allow ChatGPT / OpenAI crawler
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // Allow Google Gemini / AI Overviews crawler
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Allow Anthropic / Claude crawler
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Allow CCBot (Common Crawl - used by many AI training datasets)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Allow Perplexity crawler
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
    ],
    sitemap: "https://nikhilpantha.com.np/sitemap.xml",
    host: "https://nikhilpantha.com.np",
  };
}
