// sanity/lib/client-fetch.ts
import type { QueryParams } from "next-sanity";
import { client } from "@/sanity/lib/client";

const DEFAULT_PARAMS = {} as QueryParams;

export async function clientFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  revalidate = 60,
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number;
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: { revalidate },
  });
}
