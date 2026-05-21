"use client";

import signOutAction from "@/features/auth/actions/signOutAction";

export default function SignOutLink() {
  return (
    <span
      onClick={signOutAction}
      className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
    >
      Sign Out
    </span>
  );
}
