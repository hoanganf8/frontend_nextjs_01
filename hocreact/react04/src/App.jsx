// import Counter from "./components/Counter";
// import { useReducer } from "react";
// import { initialState, reducer } from "./reducers/rootReducer";
import TodoList from "./components/TodoList";
const App = () => {
  //Tạo state
  // const [state, dispatch] = useReducer(reducer, initialState);
  // return <Counter state={state} dispatch={dispatch} />;
  return <TodoList />;
};

export default App;

/*
State: 
- Logic update state viết trong Event Handler
- Gặp vấn đề khi bài toán logic phức tạp
- Không kế thừa được
+ Nhiều component dùng chung 1 state
+ Khó bảo trì, nâng cấp

Giải pháp:
- Tách logic cập nhật state sang 1 hàm khác --> reducer
- Sử dụng hook kết nối giữa hàm reducer với state --> useReducer (Hoạt động giống vòng lặp reduce)
- Hook useReducer phù hợp với các state phức tạp hoặc nhiều state cần quản lý (Global State)

Cách sử dụng: 
const [state, dispatch] = useReducer(reducer, initialState)

Tư duy quản lý state toàn cục (Global State)

Global State
  - Component 1
  - Component 2
      - Component 2.1
      - Component 2.2
  - Component 3
      - Component 3.1
      - Component 3.2
*/
