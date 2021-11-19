import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/login/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
