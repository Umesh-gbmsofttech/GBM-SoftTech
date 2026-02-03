import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  isNavbarOpen: boolean;
  activeModal: string | null;
}

const initialState: UiState = {
  isNavbarOpen: false,
  activeModal: null
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setNavbarOpen(state, action: PayloadAction<boolean>) {
      state.isNavbarOpen = action.payload;
    },
    openModal(state, action: PayloadAction<string>) {
      state.activeModal = action.payload;
    },
    closeModal(state) {
      state.activeModal = null;
    }
  }
});

export const { setNavbarOpen, openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
