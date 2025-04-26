import { UserDetailsType } from "@/store/slices";

export type RegisterResponseType = { _tkn: string };
export type RegisterRequestType = {
  email: string;
  password: string;
  name: string;
};

export type LoginResponseType = {
  id: string;
  email: string;
  name: string;
  details: UserDetailsType | null;
};
export type LoginRequestType = Omit<RegisterRequestType, "name">;
