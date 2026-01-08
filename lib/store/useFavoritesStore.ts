"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FavoritesState = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  clearFavorites: () => void;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (id) =>
        set((s) => {
          const exists = s.favorites.includes(id);
          return {
            favorites: exists
              ? s.favorites.filter((x) => x !== id)
              : [...s.favorites, id],
          };
        }),
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "traveltrucks-favorites",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useIsFavorite = (id: string) =>
  useFavoritesStore((s) => s.favorites.includes(id));
