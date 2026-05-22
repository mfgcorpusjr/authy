"use client";

import signOutAction from "@/features/auth/actions/signOutAction";

export default function SignOutLink() {
  return (
    <button
      className="text-sm font-medium hover:underline hover:underline-offset-4 cursor-pointer"
      onClick={signOutAction}
    >
      Sign Out
    </button>
  );
}
