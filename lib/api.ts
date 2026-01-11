import { Camper } from "@/types/camper";
import axios, { AxiosError } from "axios";
import { CatalogFilters } from "./store/useCampersStore";
import { buildFilterParams } from "./filtersToParams";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const PER_PAGE = 4;

export type CampersResponse = {
  total: number;
  items: Camper[];
};

type getCampersProps = {
  page?: number;
  filters?: CatalogFilters;
};

export const getCampers = async ({
  page = 1,
  filters,
}: getCampersProps = {}) => {
  try {
    const res = await axios.get<CampersResponse>("/campers", {
      params: {
        page,
        limit: PER_PAGE,
        ...buildFilterParams(filters),
      },
    });

    return res.data;
  } catch (error) {
    const err = error as AxiosError;

    if (err.response?.status === 404) {
      return { total: 0, items: [] };
    }

    throw error;
  }
};

export const getSingleCamper = async (id: string) => {
  const res = await axios.get<Camper>(`/campers/${id}`);
  return res.data;
};
