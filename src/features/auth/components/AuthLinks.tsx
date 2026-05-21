import Link from "next/link";

import SignOutLink from "@/features/auth/components/SignOutLink";

import { AUTH_LINKS } from "@/features/auth/utils/constants";

export default function AuthLinks() {
  return (
    <>
      {AUTH_LINKS.map((authLink) => (
        <Link
          key={authLink.href}
          href={authLink.href}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          {authLink.label}
        </Link>
      ))}

      <SignOutLink />
    </>
  );
}
