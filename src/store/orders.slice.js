import { createSlice } from "@reduxjs/toolkit";

const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
}

const formatDate = (date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

const initialState = [
  {
    id: "1",
    company: "Manuchar",
    description: "200t de codigo",
    date: formatDate(new Date()),
    typebag:'',
    cantbag:'',
    operators:'',
    apuntador:'',
    
  },
  {
    id: "2",
    company: "Parana",
    description: "200t urea",
    date: formatDate(new Date()),
    typebag:'',
    cantbag:'',
    operators:'',
    apuntador:'',
    
  },
  {
    id: "3",
    company: "San Nicolas",
    description: "200t de codigo",
    date: formatDate(new Date()),
    typebag:'',
    cantbag:'',
    operators:'',
    apuntador:'',
    
  },
  {
    id: "4",
    company: "Uruguay",
    description: "200t de codigo",
    date: formatDate(new Date()),
    typebag:'',
    cantbag:'',
    operators:'',
    apuntador:'',
    
  },
  {
    id: "5",
    company: "pepe",
    description: "200t de codigo",
    date: formatDate(new Date()),
    typebag:'',
    cantbag:'',
    operators:'',
    apuntador:'',
    
  },
];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
  },
});

export default ordersSlice.reducer;