export const EQUIPMENT_OPTIONS = [
  { key: "ac", label: "AC", iconName: "icon-wind", active: true },
  { key: "automatic", label: "Automatic", iconName: "icon-diagram" },
  { key: "kitchen", label: "Kitchen", iconName: "icon-cup-hot" },
  { key: "tv", label: "TV", iconName: "icon-tv" },
  { key: "bathroom", label: "Bathroom", iconName: "icon-ph_shower" },
] as const;

export const VEHICLE_TYPE_OPTIONS = [
  { key: "van", label: "Van", iconName: "icon-bi_grid-1x2" },
  { key: "fully", label: "Fully Integrated", iconName: "icon-bi_grid" },
  { key: "alcove", label: "Alcove", iconName: "icon-bi_grid-3x3-gap" },
] as const;

export type EquipmentKey = (typeof EQUIPMENT_OPTIONS)[number]["key"];
export type VehicleTypeKey = (typeof VEHICLE_TYPE_OPTIONS)[number]["key"];
