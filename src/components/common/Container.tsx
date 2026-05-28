import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={cn("max-w-7xl w-full mx-auto px-4 sm:px-8", className)}>
      {children}
    </div>
  );
}
