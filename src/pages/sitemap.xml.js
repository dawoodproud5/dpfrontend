import { format } from "date-fns";

const generateSitemap = () => {
  const pages = [
    {
      url: "https://www.dawoodproud.com/",
      changefreq: "daily",
      priority: "1.0",
    },
    {
      url: "https://www.dawoodproud.com/services",
      changefreq: "daily",
      priority: "0.9",
    },
    {
      url: "https://www.dawoodproud.com/services/youtube-consultation",
      changefreq: "daily",
      priority: "0.8",
    },
    {
      url: "https://www.dawoodproud.com/services/youtube-seo",
      changefreq: "daily",
      priority: "0.8",
    },
    {
      url: "https://www.dawoodproud.com/services/youtube-video-production",
      changefreq: "daily",
      priority: "0.8",
    },
    {
      url: "https://www.dawoodproud.com/services/youtube-keyword-research",
      changefreq: "daily",
      priority: "0.8",
    },
    {
      url: "https://www.dawoodproud.com/services/youtube-niche-with-low-competition",
      changefreq: "daily",
      priority: "0.8",
    },
    {
      url: "https://www.dawoodproud.com/services/youtube-automation",
      changefreq: "daily",
      priority: "0.8",
    },
    {
      url: "https://www.dawoodproud.com/services/youtube-channel-optimization",
      changefreq: "daily",
      priority: "0.8",
    },
  ];

  const currentDate = new Date(); // Get the current date

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `<url>
    <loc>${page.url}</loc>
    <lastmod>${format(currentDate, "yyyy-MM-dd'T'HH:mm:ssxxx")}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;
};

const Sitemap = () => {};

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default Sitemap;
