import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/login/userSlice";
import { postsApi } from "../services/postsApi";

export const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
