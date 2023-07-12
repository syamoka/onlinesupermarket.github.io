import { createSlice } from "@reduxjs/toolkit";
import foodlist from "../../../../JSON/sidebarFoodlist.json";

const initialState = {
  sidebarData: foodlist,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changeToEconomic: (state, action) => {
      state.sidebarData = action.payload;
    },

    changeToFoodlist: (state, action) => {
      state.sidebarData = action.payload;
    },
  },
});

export const sidebardata = (state) => state.sidebarSlice.sidebarData;
export const { changeToEconomic, changeToFoodlist } = sidebarSlice.actions;
export default sidebarSlice.reducer;
