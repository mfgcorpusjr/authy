import Link from "next/link";
import { LucideLock } from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "@/components/commons/Container";
import NavLinks from "@/components/commons/NavLinks";
import SignOutLink from "@/features/auth/components/SignOutLink";
import AuthIndicator from "@/features/auth/components/AuthIndicator";

import { auth } from "@/auth";

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="border-b bg-white">
      <Container className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button asChild variant="ghost">
            <Link href="/">
              <LucideLock />

              <h1 className="text-xl font-bold">Authy</h1>
            </Link>
          </Button>

          <NavLinks session={session} />

          {session && <SignOutLink />}
        </div>

        <AuthIndicator session={session} />
      </Container>
    </nav>
  );
}
