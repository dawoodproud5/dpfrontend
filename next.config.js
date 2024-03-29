/** @type {import('next').NextConfig} */

const nextConfig = {
  traceHydration: true,
  reactStrictMode: false,
  experiments: {
    reactRefresh: true,
  },

  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
    ];
  },
};

module.exports = nextConfig;
