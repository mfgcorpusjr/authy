import { Session } from "next-auth";

import { cn } from "@/lib/utils";

type Props = {
  session: Session | null;
};

export default function AuthIndicator({ session }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn("size-2 rounded-full animate-ping", {
          "bg-red-700": !session,
          "bg-green-700": session,
        })}
      />

      <div className="text-sm text-muted-foreground">
        {session ? "Authenticated" : "Not authenticated"}
      </div>
    </div>
  );
}
