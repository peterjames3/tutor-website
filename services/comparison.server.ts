
// Server-side fetch — used in generateStaticParams / generateMetadata / RSC.

import type { ComparisonResponse, ComparisonResult } from "@/types/api.types";

const API_URL = process.env.NEXT_PUBLIC_API_URL 
export async function getComparisonServer(
  certs: string[],
): Promise<ComparisonResult | null> {
  const endpoint = `${API_URL}/compare/${certs.join("/")}`;
  const label = certs.join(" vs ");

  // console.log(`[comparison.server] Fetching: ${label}`);

  try {
    const res = await fetch(endpoint, {
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!res.ok) {
      // console.error(
      //   `[comparison.server] ${label} — HTTP ${res.status} ${res.statusText}`,
      // );
      return null;
    }

    const json = (await res.json()) as ComparisonResponse & {
      meta?: { cached?: boolean };
    };

    const cached = json.meta?.cached;
    // console.log(
    //   `[comparison.server] ${label} — OK (${cached ? "cache hit" : "generated"})`,
    // );

    return json.data;
  } catch (err) {
    // Network failure, JSON parse error, etc.
   // console.error(`[comparison.server] ${label} — fetch threw:`, err);
    return null;
  }
}