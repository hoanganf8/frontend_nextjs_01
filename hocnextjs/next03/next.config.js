/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "cdnphoto.dantri.com.vn",
      },
    ],
  },
  env: {
    APP_NAME: process.env.APP_NAME,
  },
};

module.exports = nextConfig;
