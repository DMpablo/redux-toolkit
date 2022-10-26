import axios from "axios";
import {fetchOrders} from '../store/orders.slice'


export const fetchAll = () => async (dispatch) => {
    try {
      const response = await axios.get("https://reqres.in/api/users?per_page=12");
      return dispatch(fetchOrders(response.data.data));
    } catch (error) {
      console.warn(error);
    }
  };
  