export type UserDetailsType = {
  id: string;
  hashname: string;
  date_birth: string;
  description: string | null;
  bio: string | null;
  thumb: string | null;
};

export type UserStateType = {
  id: string;
  name: string;
  email: string;
  details: Partial<UserDetailsType>;
};

export type InitialStateType = {
  user: UserStateType | null;
  auth: boolean;
};
