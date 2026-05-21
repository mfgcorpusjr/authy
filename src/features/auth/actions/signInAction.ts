"use server";

import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import type { SignInFormData } from "@/features/auth/hooks/useSignIn";

const signInAction = async (formData: SignInFormData) => {
  try {
    await signIn("credentials", { ...formData, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      return { success: false, message: "Invalid credentials" };
    }

    throw error;
  }
};

export default signInAction;
