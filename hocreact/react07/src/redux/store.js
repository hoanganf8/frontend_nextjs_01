import { legacy_createStore as createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { counterReducer } from "./reducers/counterReducer";
const rootReducer = combineReducers({
  //key: value
  todo: todoReducer,
  counter: counterReducer,
});
export const store = createStore(rootReducer);
/*
Tình huống đặt ra: Dự án có nhiều features: todo, product, post,...
--> Viết tất cả logic vào 1 reducer --> Khó kiểm soát
--> Giải pháp: Tách từng feature thành từng reducer, sau đó nối lại vào store
*/
