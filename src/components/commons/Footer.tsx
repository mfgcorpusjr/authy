import { auth } from "@/auth";

import Container from "@/components/commons/Container";
import CurrentPath from "@/components/commons/CurrentPath";

export default async function Footer() {
  const session = await auth();

  return (
    <footer className="border-t bg-white">
      <Container className="py-4 text-sm text-muted-foreground">
        <CurrentPath />

        <p>Auth Status: {session ? "Signed In" : "Signed Out"}</p>
      </Container>
    </footer>
  );
}
