import { configureStore } from "@reduxjs/toolkit";

import messageReducer from './message.slice'
import ordersReducer from './orders.slice'

const store = configureStore({
  reducer: { 
    message: messageReducer,
    orders: ordersReducer
  },
});

export default store;