/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;
