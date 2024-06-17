import { Gender } from "./gender";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  date_of_birth: string;
  phone_number: string;
  gender: Gender | undefined;
  password: string;
};
