export type Booking = {
  id: number;
  field: number;
  day: string;
  time: string;
  created_at: string;
  personal_data: number;
};

export type GroupedBooking = {
  id: number;
  address: string;
  fields: Record<string, Record<string, Booking[]>>;
};
