/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
export const eslint = {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true,
};

export default nextConfig;
