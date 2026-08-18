
import { useQuery } from "@tanstack/react-query";
import { getRoadmap } from "@/services/roadmap.service";
import { queryKeys } from "@/lib/queryKeys";
import type { Roadmap } from "@/types/api.types";

/**
 * @param role        - role slug being queried, e.g. "soc-analyst"
 * @param initialRole - the role the SSR data was fetched for
 * @param initialData - SSR-fetched data from the Server Component
 *
 * initialData is ONLY applied when role === initialRole.
 * If we passed it unconditionally, React Query would seed every
 * role's cache entry with the SSR data, causing the one-behind bug.
 */
export function useRoadmap(
  role: string,
  initialRole: string,
  initialData?: Roadmap | null,
) {
  const isInitialRole = Boolean(role && role === initialRole);

  return useQuery({
    queryKey: queryKeys.roadmap(role),
    queryFn: () => getRoadmap(role),
    enabled: Boolean(role.trim()),
    staleTime: 1000 * 60 * 60, // 1 hour
    initialData: isInitialRole ? (initialData ?? undefined) : undefined,
  });
}
