export function unsplash(src: string | null, w: number, h?: number, quality: number = 100): string {
  if (!src) return "";
  let url: URL;
  try {
    url = new URL(src);
  } catch {
    return src;
  }

  url.searchParams.set("w", String(w));
  if (h != null) {
    url.searchParams.set("h", String(h));
    url.searchParams.set("fit", "crop");
  }
  url.searchParams.set("auto", "format");

  const qClamped = Math.max(1, Math.min(100, Math.round(quality)));
  url.searchParams.set("q", String(qClamped));

  return url.toString();
}
