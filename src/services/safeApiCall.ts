import { apiClient } from "./apiClient";
import { ApiResult, ApiError, HttpMethod } from "@/types/apiTypes";

interface SafeApiCallOptions<TBody> {
    endpoint: string;
    method?: HttpMethod;
    body?: TBody;
    parser: (data: unknown) => unknown;
}

function parseApiError(raw: unknown): ApiError {
    const e = raw as Record<string, unknown>;
    return {
        errorReason: e?.errorReason as string | undefined,
        errorReasonText: e?.errorReasonText as string | undefined,
    };
}

export async function safeApiCall<T, TBody = unknown>({
    endpoint,
    method = "GET",
    body,
    parser,
}: SafeApiCallOptions<TBody>): Promise<ApiResult<T>> {
    try {
        const response = await apiClient({ endpoint, method, body });
        const json = await response.json();

        console.log(`[safeApiCall] Status: ${response.status}`);
        console.log(`[safeApiCall] Response:`, JSON.stringify(json, null, 2));

        if (response.ok && json?.data && !json?.error) {
            return {
                success: true,
                data: parser(json.data) as T,
                statusCode: response.status,
            };
        }

        const apiError: ApiError | undefined = json?.error
            ? parseApiError(json.error)
            : undefined;

        return {
            success: false,
            error: apiError,
            message: apiError?.errorReasonText ?? json?.message ?? "Unknown error",
            statusCode: response.status,
        };
    } catch (error: unknown) {
        const message =
            error instanceof Error ? error.message : "Network error";
        console.error(`[safeApiCall] Catch block:`, error);
        return {
            success: false,
            message,
        };
    }
}
