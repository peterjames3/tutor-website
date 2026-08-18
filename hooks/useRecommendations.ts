
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRecommendations } from "@/services/recommendation.service";
import { queryKeys } from "@/lib/queryKeys";
import type { RecommendCertificationsRequest } from "@/types/api.types";

/**
 * Two modes:
 *
 * 1. useMutation — for form submits where the user controls when it fires.
 *    const { mutate, data, isPending, error } = useRecommendationsMutation();
 *    mutate({ currentRole, targetRole, experienceYears, budget, existingCerts });
 *
 * 2. useQuery — if you already have all inputs and want auto-fetch + caching.
 *    const { data, isLoading } = useRecommendationsQuery(payload);
 */

// ── Mutation (preferred for form pages) ──────────────────────────────────────
export function useRecommendationsMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RecommendCertificationsRequest) =>
      getRecommendations(payload),

    onSuccess: (data, payload) => {
      // Cache the result under the same key as useQuery so it's reusable
      queryClient.setQueryData(queryKeys.recommendations(payload), data);
    },
  });
}

// ── Query (auto-fetch when inputs are ready) ──────────────────────────────────
export function useRecommendationsQuery(
  payload: RecommendCertificationsRequest | null,
) {
  return useQuery({
    queryKey: payload
      ? queryKeys.recommendations(payload)
      : ["recommendations"],
    queryFn: () => getRecommendations(payload!),
    enabled: Boolean(
      payload?.currentRole &&
      payload?.targetRole &&
      payload?.experienceYears >= 0 &&
      payload?.budget > 0,
    ),
    staleTime: 1000 * 60 * 30, 
  });
}
