import { useEffect, useState } from "react";
// let a;
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  //Công việc phụ (Side Effect)
  //   if (count >= 5 && count <= 10) {
  //     a = count;
  //   }
  //   useEffect(() => {
  //     console.log("Side Effect: " + count);
  //   }, [a]);
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getTodos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    setTodoList(data);
    setLoading(false);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {console.log("Render: " + count)}
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        todoList.map(({ id, title }) => <h3 key={id}>{title}</h3>)
      )}
    </div>
  );
};

export default Counter;

/*
useEffect(callback, dependencies)
- callback --> Hàm để thực thi logic
- dependencies --> Options để quyết định khi nào chạy hàm callback trong useEffect
+ [] --> Hàm callback chỉ chạy 1 lần sau khi component được đưa vào DOM
+ [bien1, bien2, bien3,...] --> Hàm callback chỉ chạy khi 1 trong các biến trong dependencies thay đổi
+ null hoặc undefined --> Hàm callback chỉ chạy khi component re-render
*/
