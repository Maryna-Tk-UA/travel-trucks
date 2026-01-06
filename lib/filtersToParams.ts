import type { CatalogFilters } from "./store/useCampersStore";

const mapVehicleTypeToForm = (t: CatalogFilters["vehicleType"]) => {
  if (t === "van") return "panelTruck";
  if (t === "fully") return "fullyIntegrated";
  if (t === "alcove") return "alcove";
  return undefined;
};

export const buildFilterParams = (filters?: CatalogFilters) => {
  if (!filters) return {};

  const params: Record<string, string | number | boolean | undefined> = {};

  const location = filters.location.trim();
  if (location) params.location = location;

  const form = mapVehicleTypeToForm(filters.vehicleType);
  if (form) params.form = form;

  if (filters.equipment.includes("ac")) params.AC = true;
  if (filters.equipment.includes("kitchen")) params.kitchen = true;
  if (filters.equipment.includes("tv")) params.TV = true;
  if (filters.equipment.includes("bathroom")) params.bathroom = true;
  if (filters.equipment.includes("automatic"))
    params.transmission = "automatic";

  return params;
};
