import { Metadata } from "next";

import Heading from "@/components/common/Heading";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <Heading
      title="Profile"
      description="This is a profile page, where you can view and edit your personal information."
    />
  );
}
