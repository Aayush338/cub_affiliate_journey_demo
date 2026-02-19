export interface LoginUserData {
    status?: string;
    authToken?: AuthToken;
}

export interface AuthToken {
    token?: string;
    refreshToken?: string;
}

export function parseLoginUserData(data: unknown): LoginUserData {
    const d = data as Record<string, unknown>;
    const authTokenRaw = d?.authToken as Record<string, unknown> | undefined;

    return {
        status: d?.status as string | undefined,
        authToken: authTokenRaw
            ? {
                token: authTokenRaw.token as string | undefined,
                refreshToken: authTokenRaw.refreshToken as string | undefined,
            }
            : undefined,
    };
}
