// hooks/useHomelabs.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getHomelabRecommendations } from "@/services/homelab.service"; // ← was getRoadmap
import { queryKeys } from "@/lib/queryKeys";
import type { HomelabRecommendRequest } from "@/types/api.types";

export function useHomelabsMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: HomelabRecommendRequest) =>
      getHomelabRecommendations(payload), // ← was getRoadmap(payload)

    onSuccess: (data, payload) => {
      queryClient.setQueryData(queryKeys.homelabs(payload), data);
    },
  });
}

export function useHomelabsQuery(payload: HomelabRecommendRequest | null) {
  return useQuery({
    queryKey: payload ? queryKeys.homelabs(payload) : ["homelabs"],
    queryFn: () => getHomelabRecommendations(payload!), // ← was getRoadmap(payload!)
    enabled: Boolean(payload?.targetRole),
    staleTime: 1000 * 60 * 30,
  });
}
