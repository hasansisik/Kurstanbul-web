// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "./reducers/courseReducer";

const store = configureStore({
  reducer: {
    user: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
