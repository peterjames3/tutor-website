const BASE_URL = process.env.NEXT_PUBLIC_API_URL

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions<TBody = unknown> {
  method?: HttpMethod;
  body?: TBody;
  headers?: Record<string, string>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
}

interface ApiError {
  error: string;
  details?: Array<{ field: string; message: string }>;
}

export class ApiRequestError extends Error {
  constructor(
    public status: number,
    public body: ApiError,
  ) {
    super(body.error);
    this.name = "ApiRequestError";
  }
}

async function request<TResponse, TBody = unknown>(
  path: string,
  options: RequestOptions<TBody> = {},
): Promise<TResponse> {
  const { method = "GET", body, headers = {}, cache, next } = options;

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    ...(cache && { cache }),
    ...(next && { next }),
  };

  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(`${BASE_URL}${path}`, config);

  if (!res.ok) {
    const errorBody: ApiError = await res.json().catch(() => ({
      error: `Request failed with status ${res.status}`,
    }));
    throw new ApiRequestError(res.status, errorBody);
  }

  return res.json() as Promise<TResponse>;
}

// ─── Exported helpers ─────────────────────────────────────────────────────────

export const api = {
  get: <TResponse>(
    path: string,
    options?: Omit<RequestOptions, "method" | "body">,
  ) => request<TResponse>(path, { ...options, method: "GET" }),

  post: <TResponse, TBody = unknown>(
    path: string,
    body: TBody,
    options?: Omit<RequestOptions, "method" | "body">,
  ) => request<TResponse, TBody>(path, { ...options, method: "POST", body }),
};
