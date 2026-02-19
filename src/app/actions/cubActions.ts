"use server";

import { cubLogin, cubValidateOtp } from "@/services/cubService";

export async function cubLoginAction({ phone }: { phone: string }) {
    return cubLogin(phone);
}

export async function cubValidateOtpAction({
    phone,
    otp,
}: {
    phone: string;
    otp: string;
}) {
    return cubValidateOtp(phone, otp);
}
