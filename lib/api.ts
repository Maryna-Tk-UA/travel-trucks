import { Camper } from "@/types/camper";
import axios from "axios";

export type CampersResponse = {
  items: Camper[];
  total: number;
};

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const getCampers = async () => {
  const res = await axios.get<CampersResponse>("");
  return res.data;
};

export const getSingleCamper = async (id: string) => {
  const res = await axios.get<Camper>(`/${id}`);
  return res.data;
};
