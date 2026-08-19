/** @type {import('next').NextConfig} */

// GitHub Pages serves the site from https://<user>.github.io/<repo>/, so the
// build needs a base path. Set NEXT_PUBLIC_BASE_PATH in CI; locally it is empty
// and `npm run dev` behaves normally.
const rawBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = rawBase
  ? `/${rawBase.replace(/^\/+/, "").replace(/\/+$/, "")}`
  : "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  // Production builds can get their own build dir so that running `next build`
  // never clobbers a running `next dev`:  BUILD_DIST=.next-build npx next build
  distDir: process.env.BUILD_DIST || ".next",
};

export default nextConfig;
