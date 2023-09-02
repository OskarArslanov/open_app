/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false,
    },
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
