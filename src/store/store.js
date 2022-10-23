import { configureStore } from "@reduxjs/toolkit";

import messageReducer from './message.slice'

const store = configureStore({
  reducer: { message: messageReducer },
});

export default store;