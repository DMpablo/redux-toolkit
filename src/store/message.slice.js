import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "primer mensaje",
    description: "este es un mensaje desde readux",
  },
];

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
  },
});

export default messageSlice.reducer;