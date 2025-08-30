export function formatFileSize(bytes: number, digits = 1) {
  const u = ["B", "KB", "MB"];
  let i = 0;
  let n = bytes;
  while (n >= 1024 && i < u.length - 1) {
    n /= 1024;
    i++;
  }
  return `${n.toFixed(digits)} ${u[i]}`;
}

export function computeJsonSize(obj: unknown, encoding = "utf-8"): number {
  const json = JSON.stringify(obj, null, 2);
  const blob = new Blob([json], { type: `application/json;charset=${encoding}` });
  return blob.size;
}
