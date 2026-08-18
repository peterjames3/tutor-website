// services/certification.service.ts
import { api } from "./api";
import type { CertificationResponse, Certification } from "@/types/api.types";

export async function getCertification(slug: string): Promise<Certification> {
  const res = await api.get<CertificationResponse>(`/certifications/${slug}`);
  return res.data;
}
