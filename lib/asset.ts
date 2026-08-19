/**
 * GitHub Pages serves this site from /<repo>/ rather than /, so every asset
 * reference needs that prefix. Next rewrites its own chunks via `assetPrefix`,
 * but plain <img src="/..."> is left alone — hence this helper.
 *
 * Empty locally, so `npm run dev` is unaffected.
 */
const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Tolerate a value supplied without a leading slash (and strip a trailing one).
export const BASE_PATH = raw
  ? `/${raw.replace(/^\/+/, "").replace(/\/+$/, "")}`
  : "";

export const asset = (path: string) =>
  path.startsWith("/") ? `${BASE_PATH}${path}` : path;
