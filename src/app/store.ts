import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@features/theme/themeSlice";
import uiReducer from "@features/ui/uiSlice";
import pageDataReducer from "@features/pageData/pageDataSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ui: uiReducer,
    pageData: pageDataReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
