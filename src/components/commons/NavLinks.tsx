"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import SignOutLink from "@/features/auth/components/SignOutLink";

import { NAV_LINKS } from "@/utils/constants";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map((navLink) => {
        const isActive = navLink.href === pathname;

        return (
          <Link
            key={navLink.href}
            href={navLink.href}
            className={cn(
              "text-sm font-medium hover:underline underline-offset-4",
              {
                underline: isActive,
              },
            )}
          >
            {navLink.label}
          </Link>
        );
      })}

      <SignOutLink />
    </>
  );
}
