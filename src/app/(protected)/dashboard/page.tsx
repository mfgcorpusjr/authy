import Heading from "@/components/commons/Heading";

export default function DashboardPage() {
  return (
    <Heading
      title="Dashboard Overview"
      description="This is a protected route, only visible to authenticated users."
    />
  );
}
