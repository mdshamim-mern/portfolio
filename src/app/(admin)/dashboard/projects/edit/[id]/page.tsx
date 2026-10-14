import ProjectForm from "@/components/admin/ProjectForm";
export default function EditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProjectForm projectId={params.id} />;
}
