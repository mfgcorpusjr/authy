"use client";

import { Button } from "@/components/ui/button";

import signOutAction from "@/features/auth/actions/signOutAction";

export default function SignOutLink() {
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={signOutAction}
      className="text-sm font-medium cursor-pointer"
    >
      Sign Out
    </Button>
  );
}
