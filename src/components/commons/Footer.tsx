"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import Container from "@/components/commons/Container";

export default function Footer() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <footer className="border-t bg-white">
      <Container className="py-4 text-sm text-muted-foreground">
        <p>Current Path: {pathname}</p>

        <p>Auth Status: {session ? "Logged in" : "Logged out"}</p>
      </Container>
    </footer>
  );
}
