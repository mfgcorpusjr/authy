"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

import { Button } from "@/components/ui/button";

import { NAV_LINKS } from "@/utils/constants";

type Props = {
  session: Session | null;
};

export default function NavLinks({ session }: Props) {
  const pathname = usePathname();

  return NAV_LINKS.map((navLink) => {
    if ((navLink.protected && session) || (!navLink.protected && !session)) {
      const isActive = navLink.href === pathname;

      return (
        <Button
          key={navLink.href}
          asChild
          size="sm"
          variant={isActive ? "secondary" : "ghost"}
        >
          <Link
            key={navLink.href}
            href={navLink.href}
            className="text-sm font-medium"
          >
            {navLink.label}
          </Link>
        </Button>
      );
    } else {
      return null;
    }
  });
}
