import { Metadata } from "next";

import Heading from "@/components/common/Heading";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <Heading
      title="Settings"
      description="Manage your account settings and preferences here."
    />
  );
}
