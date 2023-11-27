import React, { useState } from "react";

const App = () => {
  console.log("render");
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  const [todoList, setTodoList] = useState([]);
  const getTodos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    setTodoList(data);
  };

  const handleLoadTodos = () => {
    getTodos();
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <hr />
      <button onClick={handleLoadTodos}>Load Todo</button>
      {todoList.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default App;

/*
State trong React
- Trạng thái của 1 Component
- Thể hiện dữ liệu của 1 component
- Khi state thay đổi --> Component re-render
- State chỉ hoạt động trong 1 component
- State không nên thay đổi trực tiếp mà cần thông qua các hàm setState
- Hàm setState là 1 hàm bất đồng bộ (Khi thay đổi State --> state sẽ không thay đổi ngay)

Có 2 cách để làm việc với State trong React
1. Nếu dùng class Component --> Dùng thuộc tính state có sẵn trong class React.Component
2. Nếu dùng functional Component --> Sử dụng thông qua các React Hook (useState, useReducer)

Hook là gì?
- Hàm đặc biệt, bắt đầu bằng từ khóa use (Ví dụ: useState, useReducer, useEffect,...)
- Chỉ được gọi functional component hoặc được gọi trong 1 hook khác
- Thay đổi 1 số thành phần của React: state, lifecycle,....
- Giải quyết các bài toán phức tạp

Hook chia thành 2 loại: 
- React Hook Buit-in --> Hook có sẵn của React
- Custom Hook --> Do lập trình viên tự định nghĩa
*/
