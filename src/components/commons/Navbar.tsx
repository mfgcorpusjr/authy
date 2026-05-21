import Link from "next/link";

import { Button } from "@/components/ui/button";
import Container from "@/components/commons/Container";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <Container className="flex flex-col sm:flex-row justify-between items-center gap-4 py-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button asChild variant="ghost">
            <Link href="/">
              <h1 className="text-xl font-bold">Authy</h1>
            </Link>
          </Button>

          <Link
            href="/sign-in"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Sign In
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="size-2 rounded-full bg-red-700 animate-ping" />

          <div className="text-sm">Not authenticated</div>
        </div>
      </Container>
    </nav>
  );
}
