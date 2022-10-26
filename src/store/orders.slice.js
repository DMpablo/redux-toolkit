import { createSlice } from "@reduxjs/toolkit";
import date from "../utils.js";


const initialState = [
  {
    id: "1",
    company: "Manuchar",
    description: "200t de codigo",
    date: date(),
    typebag:'',
    cantbag:'',
    operators:'',
    apuntador:'',
    
  },
  {
    id: "2",
    company: "Parana",
    description: "200t urea",
    date: date(),
    typebag:'',
    cantbag:'',
    operators:'',
    apuntador:'',
    
  },
  {
    id: "3",
    company: "San Nicolas",
    description: "200t de codigo",
    date: date(),
    typebag:'',
    cantbag:'',
    operators:'',
    apuntador:'',
    
  },
  {
    id: "4",
    company: "Uruguay",
    description: "200t de codigo",
    date: date(),
    typebag:'',
    cantbag:'',
    operators:'',
    apuntador:'',
    
  },
  {
    id: "5",
    company: "pepe",
    description: "200t de codigo",
    date: date(),
    typebag:'',
    cantbag:'',
    operators:'',
    apuntador:'',
    
  },
];

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    list: initialState,
  },
  reducers: {
    editOrder: (state, action) => {
      const id = action.payload.id;
      state.list = [action.payload]

      console.warn(action.payload);
    //   const newPlace = new Place(
    //     date(),
    //     action.payload.title,
    //     action.payload.image,
    //     action.payload.address
    //   );
    //   state.places.push(newPlace);
    },
  },
});
export const { editOrder } = ordersSlice.actions;

export default ordersSlice.reducer;