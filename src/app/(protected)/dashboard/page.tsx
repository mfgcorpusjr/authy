import { Metadata } from "next";

import Heading from "@/components/common/Heading";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <Heading
      title="Dashboard Overview"
      description="This is a protected route, only visible to authenticated users."
    />
  );
}
