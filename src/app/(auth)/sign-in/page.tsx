import { Metadata } from "next";

import SignInForm from "@/features/auth/components/SignInForm";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <SignInForm />
    </div>
  );
}
