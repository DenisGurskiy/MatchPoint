import { Activity } from "./activity";
import { Booking } from "./booking";

export type Field = {
  id: number;
  activity: Activity;
  price: number;
  bookings: Booking[];
};
