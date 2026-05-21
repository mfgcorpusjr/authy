"use client";

import { usePathname } from "next/navigation";

import Container from "@/components/commons/Container";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t">
      <Container className="py-4 text-sm text-muted-foreground">
        <p>Current Path: {pathname}</p>

        <p>Auth Status: Logged out</p>
      </Container>
    </footer>
  );
}
