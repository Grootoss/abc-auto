/** Public asset path with Vite `base` (needed for GitHub Pages). */
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
