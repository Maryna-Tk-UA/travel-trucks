import { CamperPageProps } from "@/types/props";
import { redirect } from "next/navigation";

const CamperPage = async ({ params }: CamperPageProps) => {
  const { id } = await params;
  redirect(`/catalog/${id}/features`);
};

export default CamperPage;
