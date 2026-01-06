import { Camper } from "@/types/camper";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const PER_PAGE = 4;

type CampersResponse = {
  total: number;
  items: Camper[];
};

export const getCampers = async ({ page = 1 }: { page?: number } = {}) => {
  const res = await axios.get<CampersResponse>("/campers", {
    params: {
      page,
      limit: PER_PAGE,
    },
  });
  return res.data;
};

export const getSingleCamper = async (id: string) => {
  const res = await axios.get<Camper>(`/campers/${id}`);
  return res.data;
};
