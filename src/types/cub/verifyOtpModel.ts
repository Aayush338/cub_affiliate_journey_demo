export interface VerifyOtpData {
    refreshToken?: string;
    token?: string;
}

export function parseVerifyOtpData(data: unknown): VerifyOtpData {
    const d = data as Record<string, unknown>;

    return {
        token: d?.token as string | undefined,
        refreshToken: d?.refreshToken as string | undefined,
    };
}
