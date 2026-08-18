// services/recommendation.service.ts
import { api } from "./api";
import type {
  RecommendCertificationsRequest,
  RecommendCertificationsResponse,
  RecommendationResult,
} from "@/types/api.types";

export async function getRecommendations(
  payload: RecommendCertificationsRequest,
): Promise<RecommendationResult> {
  const res = await api.post<
    RecommendCertificationsResponse,
    RecommendCertificationsRequest
  >("/recommend-certifications", payload);
  return res.data;
}
