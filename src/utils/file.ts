import type { Doc } from "@/types";

function sanitizeFilename(name: string, ext = "txt") {
  const clean = (name ?? "document").replace(/[\\?%*:|"<>/]/g, "_").trim() || "document";
  return `${clean}.${ext}`;
}

function buildDocTxt(doc: Pick<Doc, "name" | "description" | "image">) {
  const lines = [
    `Название: ${doc.name}`,
    "",
    "Описание:",
    doc.description ?? "",
    "",
    doc.image ? `Изображение: ${doc.image}` : "Изображение: отсутствует",
  ];
  return lines.join("\r\n");
}

export function downloadDoc(doc: Pick<Doc, "name" | "description" | "image">) {
  const content = buildDocTxt(doc);
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = sanitizeFilename(doc.name, "txt");
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
