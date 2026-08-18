
import { api } from "./api";
import type {
  HomelabRecommendRequest,
  HomelabRecommendResponse,
  HomelabRecommendationResult,
} from "@/types/api.types";

export async function getHomelabRecommendations(
  payload: HomelabRecommendRequest,
): Promise<HomelabRecommendationResult> {
  const res = await api.post<HomelabRecommendResponse>(
    "/recommend-homelabs",
    payload,
  );
  return res.data;
}
