export type FilterOption = {
  key: string;
  label: string;
  iconName: string;
  active?: boolean;
};

export const EQUIPMENT_OPTIONS: FilterOption[] = [
  { key: "ac", label: "AC", iconName: "icon-wind", active: true },
  { key: "automatic", label: "Automatic", iconName: "icon-diagram" },
  { key: "kitchen", label: "Kitchen", iconName: "icon-hugeicons_gas-stove" },
  { key: "tv", label: "TV", iconName: "icon-tv" },
  { key: "bathroom", label: "Bathroom", iconName: "icon-ph_shower" },
];

export const VEHICLE_TYPE_OPTIONS: FilterOption[] = [
  { key: "van", label: "Van", iconName: "icon-bi_grid-1x2" },
  { key: "fully", label: "Fully Integrated", iconName: "icon-bi_grid" },
  { key: "alcove", label: "Alcove", iconName: "icon-bi_grid-3x3-gap" },
];
