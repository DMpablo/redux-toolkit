import { createSlice } from "@reduxjs/toolkit";
import Place from "../model/Place";

const initialState = {
places:[],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const date = new Date().getTime();
      const newPlace = new Place( date, action.payload )
      state.places.push(newPlace);
    }
  },
});

export const {addPlace} = placeSlice.actions;

export default placeSlice.reducer;