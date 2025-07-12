// sanity/lib/server-fetch.ts
"use server";

import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];
const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const { isEnabled: isDraft } = await draftMode();

  if (isDraft && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }

  return client.fetch<QueryResponse>(query, params, {
    cache: isDraft ? "no-store" : "force-cache",
    ...(isDraft && {
      token: token,
      perspective: "previewDrafts",
    }),
    next: {
      ...(isDraft && { revalidate: 120 }),
      tags,
    },
  });
}
