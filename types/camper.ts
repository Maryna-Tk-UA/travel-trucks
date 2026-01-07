export type CamperImage = {
  thumb: string;
  original: string;
};

export type CamperReview = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: CamperImage[];
  reviews?: CamperReview[];
};

export type CamperForm = "panelTruck" | "fullyIntegrated" | "alcove";
