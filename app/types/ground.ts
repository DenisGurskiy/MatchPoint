import { Activity } from "./activity";
import { City } from "./city";

export type GroundType = {
  id: number;
  name: string;
  image: string;
  location: City;
  phone: string;
  fields?: {
    id: number;
    activity: Activity;
    price: number;
  }[];
};
