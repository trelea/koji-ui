import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateType, UserStateType } from "./types";
import { RootState } from "@/store/store";

const initialState: InitialStateType = {
  auth: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (
      state: InitialStateType,
      payload: PayloadAction<UserStateType>
    ) => {
      state.auth = true;
      state.user = payload.payload;
    },
    deauthUser: (state: InitialStateType) => {
      state.auth = false;
      state.user = null;
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const isAuth = (state: RootState) => state.auth.auth;

export const { authUser, deauthUser } = authSlice.actions;
export default authSlice.reducer;
