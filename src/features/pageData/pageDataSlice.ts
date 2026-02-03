import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageDataState {
  heroHeadline: string;
  highlights: string[];
}

const initialState: PageDataState = {
  heroHeadline: "Engineering ideas into products that scale.",
  highlights: ["Product Strategy", "UX + UI Design", "Cloud Engineering"]
};

const pageDataSlice = createSlice({
  name: "pageData",
  initialState,
  reducers: {
    setHeroHeadline(state, action: PayloadAction<string>) {
      state.heroHeadline = action.payload;
    },
    setHighlights(state, action: PayloadAction<string[]>) {
      state.highlights = action.payload;
    }
  }
});

export const { setHeroHeadline, setHighlights } = pageDataSlice.actions;
export default pageDataSlice.reducer;
