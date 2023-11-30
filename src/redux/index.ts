import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ImageReducer from "./ImageReducer";
export const store = configureStore({
  reducer: {
    image: ImageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
