export interface ApiClientOptions<TBody = unknown> {
    endpoint: string;
    method?: HttpMethod;
    body?: TBody;
    headers?: Record<string, string>;
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiError {
    errorReason?: string;
    errorReasonText?: string;
}

export interface ApiResult<T> {
    success: boolean;
    data?: T;
    error?: ApiError;
    message?: string;
    statusCode?: number;
}
