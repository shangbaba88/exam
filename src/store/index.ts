import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import subjectReducer from "./slice/subject";

// 类型定义
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const store = configureStore({
  reducer: {
    subject: subjectReducer,
  },
});
