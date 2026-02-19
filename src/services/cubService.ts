import { safeApiCall } from "./safeApiCall";
import { ApiResult } from "@/types/apiTypes";
import {
    LoginUserData,
    parseLoginUserData,
} from "@/types/cub/loginModels";
import { VerifyOtpData,parseVerifyOtpData } from "@/types/cub/verifyOtpModel";

export async function cubLogin(
    phone: string
): Promise<ApiResult<LoginUserData>> {
    return safeApiCall<LoginUserData, { phone: string }>({
        endpoint: "/v1/login",
        method: "POST",
        body: { phone },
        parser: parseLoginUserData,
    });
}

export async function cubValidateOtp(
    phone: string,
    otp: string
): Promise<ApiResult<VerifyOtpData>> {
    return safeApiCall<VerifyOtpData, { phone: string; otp: string }>({
        endpoint: "/v1/validate-otp",
        method: "POST",
        body: { phone, otp },
        parser: parseVerifyOtpData,
    });
}