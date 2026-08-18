
import { useQuery } from "@tanstack/react-query";
import { getComparison } from "@/services/comparison.service";
import { queryKeys } from "@/lib/queryKeys";

/**
 * Compares 2 or 3 certifications side by side.
 * Only fires when at least 2 cert slugs are provided.
 *
 * Usage:
 *   const { data, isLoading, error } = useComparison(["cissp", "ccsp"]);
 *   const { data, isLoading, error } = useComparison(["cissp", "ccsp", "az-500"]);
 */
export function useComparison(certs: string[]) {
  const validCerts = certs.filter(Boolean);

  return useQuery({
    queryKey: queryKeys.comparison(validCerts),
    queryFn: () =>
      getComparison(validCerts as [string, string] | [string, string, string]),
    enabled: validCerts.length >= 2,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}