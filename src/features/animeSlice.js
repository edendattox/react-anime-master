import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
};

export const animeSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    anime: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { anime } = animeSlice.actions;

export const selectName = (state) => state.name;

export default animeSlice.reducer;
