import { createSlice } from "@reduxjs/toolkit";
import Place from "../model/Place";
// import * as FileSystem from "expo-file-system";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const date = new Date().getTime();
      const newPlace = new Place(
        date,
        action.payload.title,
        action.payload.image,
        action.payload.address
      );
      state.places.push(newPlace);
    },
  },
});

export const { addPlace } = placeSlice.actions;

export const savePlace = (title, image, address ) => {
  console.warn('address: ', address)
  return async (dispatch) => {
    // const fileName = image.split("/").pop();
    // const path = FileSystem.documentDirectory + fileName;
    try {
      dispatch(addPlace({ title, image, address}));
      // await FileSystem.moveAsync({
      //   from:image,
      //   to:path,
      // })
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export default placeSlice.reducer;
