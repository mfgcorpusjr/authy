"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

import { Button } from "@/components/ui/button";

import { NAV_LINKS } from "@/utils/constants";
import { cn } from "@/lib/utils";

type Props = {
  session: Session | null;
};

export default function NavLinks({ session }: Props) {
  const pathname = usePathname();

  return NAV_LINKS.map((navLink) => {
    if ((navLink.protected && session) || (!navLink.protected && !session)) {
      const isActive = navLink.href === pathname;

      return (
        <Link
          key={navLink.href}
          href={navLink.href}
          className={cn(
            "text-sm font-medium hover:underline hover:underline-offset-4",
            {
              "underline underline-offset-4": isActive,
            },
          )}
        >
          {navLink.label}
        </Link>
      );
    } else {
      return null;
    }
  });
}
