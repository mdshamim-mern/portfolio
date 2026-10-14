import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import AdminShell from "@/components/admin/AdminShell";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await isAdmin())) redirect("/login");
  return <AdminShell>{children}</AdminShell>;
}
