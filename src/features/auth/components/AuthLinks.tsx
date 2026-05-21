"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import SignOutLink from "@/features/auth/components/SignOutLink";

import { AUTH_LINKS } from "@/features/auth/utils/constants";
import { cn } from "@/lib/utils";

export default function AuthLinks() {
  const pathname = usePathname();

  return (
    <>
      {AUTH_LINKS.map((authLink) => {
        const isActive = authLink.href === pathname;

        return (
          <Link
            key={authLink.href}
            href={authLink.href}
            className={cn(
              "text-sm font-medium hover:underline underline-offset-4",
              {
                underline: isActive,
              },
            )}
          >
            {authLink.label}
          </Link>
        );
      })}

      <SignOutLink />
    </>
  );
}
