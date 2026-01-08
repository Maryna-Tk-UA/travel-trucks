import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type NewBookingData = {
  name: string;
  email: string;
  date: string;
  comment: string;
};

const initialData: NewBookingData = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

type BookingDraftStore = {
  draft: NewBookingData;
  setDraft: (patch: Partial<NewBookingData>) => void;
  clearDraft: () => void;
  hasHydrated: boolean;
  setHasHydrated: (v: boolean) => void;
};

export const useBookingDraftStore = create<BookingDraftStore>()(
  persist(
    (set) => ({
      draft: initialData,

      setDraft: (patch) => set((s) => ({ draft: { ...s.draft, ...patch } })),

      clearDraft: () => set({ draft: initialData }),

      hasHydrated: false,
      setHasHydrated: (v) => set({ hasHydrated: v }),
    }),
    {
      name: "traveltrucks-booking-draft",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ draft: s.draft }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

export { initialData };
