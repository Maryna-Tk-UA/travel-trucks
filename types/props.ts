import { Camper } from "./camper";

export type CamperIdParams = Promise<{ id: string }>;

export type CamperPageProps = {
  params: CamperIdParams;
};

export type CamperLayoutProps = {
  params: CamperIdParams;
  children: React.ReactNode;
  booking: React.ReactNode;
};

export type CatalogLoadMoreProps = {
  initialItems: Camper[];
  total: number;
};
