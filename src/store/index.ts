import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { axiosCreateConfig } from "../lib/http";

const api = axiosCreateConfig();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
