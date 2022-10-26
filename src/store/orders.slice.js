import { createSlice } from "@reduxjs/toolkit";
import date from "../utils.js";

const initialState = [
  {
    id: 10000,
    last_name: "Example SRL",
    first_name: "Example SRL es un ejemplo",
    // date: date,
  },
];

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    list: initialState,
  },
  reducers: {
    fetchOrders: (state, action) => {
      state.list = action.payload
      // console.warn('************************action.payload: ', action.payload);
    },
    editOrder: (state, action) => {
      const id = action.payload.id;
      state.list = [action.payload];

      console.warn(action.payload);

    },
  },
});


export const { editOrder, fetchOrders } = ordersSlice.actions;

export default ordersSlice.reducer;

