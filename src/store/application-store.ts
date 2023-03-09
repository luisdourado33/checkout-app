import { configureStore } from "@reduxjs/toolkit";

import authenticatedSlice from "./reducers/authenticatedSlice";

export const applicationStore = configureStore({
  reducer: {
    authenticated: authenticatedSlice,
  },
});

export type RootState = ReturnType<typeof applicationStore.getState>;
export type AppDispatch = typeof applicationStore.dispatch;
