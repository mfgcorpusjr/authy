import { Metadata } from "next";

import Heading from "@/components/commons/Heading";

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
