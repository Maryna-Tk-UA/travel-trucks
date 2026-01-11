import { Camper } from "@/types/camper";
import axios, { AxiosError } from "axios";
import { CatalogFilters } from "./store/useCampersStore";
import { buildFilterParams } from "./filtersToParams";

export const PER_PAGE = 4;

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io"; // fallback щоб не впало

const api = axios.create({
  baseURL: API_BASE_URL,
});

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
    const res = await api.get<CampersResponse>("/campers", {
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
  const res = await api.get<Camper>(`/campers/${id}`);
  return res.data;
};
