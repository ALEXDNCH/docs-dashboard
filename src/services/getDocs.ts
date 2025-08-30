import { api } from "./axios";
import type { IDocResponse, Doc } from "@/types";
import { computeJsonSize, formatFileSize } from "@/utils/formatFileSize.ts";
import { IS_ERROR_FOR_QUERY } from "@/app.config.ts";

export async function getDocs(search: string, signal?: AbortSignal): Promise<Doc[]> {
  if (IS_ERROR_FOR_QUERY) {
    throw new Error("фейковая ошибка для теста");
  }

  const res = await api.get<IDocResponse[]>("/user/docs", {
    params: { search: search },
    signal,
  });
  return res.data.map((d) => {
    const sizeBytes = computeJsonSize(d);
    return {
      ...d,
      sizeBytes,
      sizeLabel: formatFileSize(sizeBytes),
    };
  });
}
