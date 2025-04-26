import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api";
import { authSlice } from "./slices";

export const rootReducer = combineReducers({
  /**
   * Apis Reducer
   */
  [baseApi.reducerPath]: baseApi.reducer,
  /**
   * Other Reducers
   * ...
   */
  [authSlice.reducerPath]: authSlice.reducer,
});
