import rootReducer from "./store/reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const reduxConfig = () => {
  // applyMiddleware(thunk) : viết bất độ trong redux , xử dụng
  // call API -> trả về action là 1 hàm để gọi API
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return { store, persistor };
};

export default reduxConfig;
