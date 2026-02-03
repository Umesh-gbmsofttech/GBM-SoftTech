import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

interface ThemeState {
  mode: PaletteMode;
}

const initialState: ThemeState = {
  mode: "dark"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    setMode(state, action: { payload: PaletteMode }) {
      state.mode = action.payload;
    }
  }
});

export const { toggleMode, setMode } = themeSlice.actions;
export default themeSlice.reducer;
