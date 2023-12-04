//Custom Hook
/*
- Hàm, phương thức bắt đầu bằng từ khóa use
- Có thể sử dụng các hook khác

Định 2 React Hook liên quan đến lấy dữ liệu từ context

useSelector(callback) --> Trả về state
useDispatch() --> Trả về hàm dispatch
*/
import { useContext } from "react";
import { GlobalContext } from "./Provider";
export const useSelector = (callback) => {
  const { state } = useContext(GlobalContext);
  //Biến state trả về toàn bộ state của dự án
  //Callback: Trả về state muốn lấy: todoList, count,...
  if (typeof callback !== "function") {
    throw new Error("callback is not a function");
  }
  return callback(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(GlobalContext);
  return dispatch;
};
