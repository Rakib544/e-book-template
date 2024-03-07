const siteURL = "https://e-book-template.vercel.app";
export const siteConfig = {
  name: "Unlock Your Potential: A Guide to Personal Growth",
  url: siteURL,
  ogImage: `${siteURL}/open-graph.png`,
  description:
    "Unlock Your Potential is a comprehensive guide to personal growth, written by renowned life coach Emma Smith. Discover practical strategies, actionable advice, and inspiring insights to overcome obstacles, cultivate resilience, and achieve your goals. Start your journey of self-discovery today!",
  keywords: [
    "personal growth",
    "self-improvement",
    "self-discovery",
    "empowerment",
    "goal setting",
    "mindset",
    "resilience",
    "confidence building",
    "positive thinking",
    "life transformation",
    "self-help",
    "motivation",
    "success strategies",
    "self-awareness",
    "overcoming obstacles",
  ],
  authors: [
    {
      name: "Rakib",
      url: "https://rakib-seven.vercel.app/",
    },
  ],
  creator: "Rakib",
};

export type SiteConfig = typeof siteConfig;
