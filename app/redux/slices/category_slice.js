import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: "all", 
  reducers: {
    chooseCategory: (state, action) => {
      return action.payload; 
    },
  },
});

// Export the action creator for choosing a category
export const { chooseCategory } = categorySlice.actions;

// Export the reducer to be used in the store
export default categorySlice.reducer;
