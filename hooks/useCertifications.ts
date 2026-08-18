// hooks/useCertifications.ts
import { useQuery } from "@tanstack/react-query";
import { getCertification } from "@/services/certification.service";
import { queryKeys } from "@/lib/queryKeys";
import type { Certification } from "@/types/api.types";

/**
 * Fetches full cert details for a single slug.
 * Pass initialData when the caller already has the cert (e.g. fetched
 * server-side) to skip the loading state on first render.
 *
 * Usage:
 *   const { data, isLoading, error } = useCertification("comptia-security-plus");
 *   const { data } = useCertification(slug, serverFetchedCert);
 */
export function useCertification(slug: string, initialData?: Certification) {
  return useQuery({
    queryKey: queryKeys.certification(slug),
    queryFn: () => getCertification(slug),
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 60, // 1 hour — cert data rarely changes
    initialData,
  });
}
