import type { Camper } from "@/types/camper";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { EquipmentKey, VehicleTypeKey } from "@/constants/filter";
import { getCampers, PER_PAGE } from "@/lib/api";

export type CatalogFilters = {
  location: string;
  equipment: EquipmentKey[];
  vehicleType: VehicleTypeKey | "";
};

type CampersState = {
  campers: Camper[];
  total: number;
  page: number;

  filters: CatalogFilters;

  isLoading: boolean;
  error: string | null;

  initCampers: (items: Camper[], total: number) => void;
  setCampers: (items: Camper[]) => void;

  setLocation: (value: string) => void;
  toggleEquipment: (key: EquipmentKey) => void;
  setVehicleType: (value: VehicleTypeKey | "") => void;
  resetFilters: () => void;

  resetCampers: () => void;

  searchCampers: () => Promise<void>;
  loadMore: () => Promise<void>;
  hasMore: boolean;
};

const INITIAL_FILTERS: CatalogFilters = {
  location: "",
  equipment: [],
  vehicleType: "",
};

export const useCampersStore = create<CampersState>()(
  persist(
    (set, get) => ({
      campers: [],
      total: 0,
      page: 1,

      filters: INITIAL_FILTERS,

      isLoading: false,
      error: null,

      initCampers: (items, total) =>
        set((state) =>
          state.campers.length
            ? state
            : {
                campers: items,
                total,
                page: 1,
                error: null,
                hasMore: items.length < total,
              }
        ),

      setCampers: (items) => set({ campers: items }),

      setLocation: (value) =>
        set((state) => ({ filters: { ...state.filters, location: value } })),

      toggleEquipment: (key) =>
        set((state) => {
          const exists = state.filters.equipment.includes(key);
          const equipment = exists
            ? state.filters.equipment.filter((k) => k !== key)
            : [...state.filters.equipment, key];

          return { filters: { ...state.filters, equipment } };
        }),

      setVehicleType: (value) =>
        set((state) => ({ filters: { ...state.filters, vehicleType: value } })),

      resetFilters: () => set({ filters: INITIAL_FILTERS }),

      resetCampers: () => set({ campers: [], total: 0, page: 1 }),

      searchCampers: async () => {
        set({
          isLoading: true,
          error: null,
          campers: [],
          total: 0,
          page: 1,
          hasMore: false,
        });

        try {
          const res = await getCampers({ page: 1, filters: get().filters });

          set({
            campers: res.items,
            total: res.total,
            page: 1,
            isLoading: false,
            hasMore:
              res.items.length === PER_PAGE && res.items.length < res.total,
          });
        } catch (e) {
          set({
            isLoading: false,
            error: e instanceof Error ? e.message : "Unknown error",
          });
        }
      },

      loadMore: async () => {
        const { isLoading, hasMore, page, filters } = get();
        if (isLoading || !hasMore) return;

        const nextPage = page + 1;
        set({ isLoading: true, error: null });

        try {
          const res = await getCampers({ page: nextPage, filters });

          set((s) => {
            const merged = [...s.campers, ...res.items];
            const unique = Array.from(
              new Map(merged.map((c) => [c.id, c])).values()
            );

            return {
              campers: unique,
              page: nextPage,
              total: res.total,
              isLoading: false,
              hasMore:
                res.items.length === PER_PAGE && unique.length < res.total,
            };
          });
        } catch (e) {
          set({
            isLoading: false,
            error: e instanceof Error ? e.message : "Unknown error",
          });
        }
      },

      hasMore: false,
    }),
    {
      name: "traveltrucks-catalog",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        filters: state.filters,
      }),
    }
  )
);
