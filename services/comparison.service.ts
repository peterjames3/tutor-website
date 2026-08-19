// services/comparison.service.ts
import { api } from "./api";
import type { ComparisonResponse, ComparisonResult } from "@/types/api.types";

export async function getComparison(
  certs: [string, string] | [string, string, string],
): Promise<ComparisonResult> {
  const path = `/compare/${certs.join("/")}`;
  const res = await api.get<ComparisonResponse>(path);
  return res.data;
}
