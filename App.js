import store from "./src/store/store";
import { Provider } from "react-redux";
import {MessageInitial} from "./src/components/message";

export default function App() {
  return (
    <Provider store={store}>
      <MessageInitial/>
    </Provider>
  );
}


