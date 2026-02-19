import { ApiClientOptions } from "@/types/apiTypes";

export async function apiClient<TBody = unknown>({
    endpoint,
    method = "GET",
    body,
    headers,
}: ApiClientOptions<TBody>): Promise<Response> {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    if (!BASE_URL) {
        throw new Error(
            "NEXT_PUBLIC_BASE_URL is not defined. Check your .env.development or .env.production file."
        );
    }

    const url = `${BASE_URL}${endpoint}`;
    console.log(`[apiClient] ${method} ${url}`);

    return fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        credentials: "include",
    });
}
