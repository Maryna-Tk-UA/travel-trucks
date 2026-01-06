import { getSingleCamper } from "@/lib/api";
import { QueryClient } from "@tanstack/react-query";

export const prefetchCamper = async (queryClient: QueryClient, id: string) => {
  await queryClient.prefetchQuery({
    queryKey: ["camper", id],
    queryFn: () => getSingleCamper(id),
  });
};
