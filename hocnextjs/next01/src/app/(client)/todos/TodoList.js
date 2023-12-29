"use client";

import { useEffect, useState } from "react";

const todoApi = `https://jsonplaceholder.typicode.com/todos`;

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const getTodos = async () => {
    const response = await fetch(todoApi);
    const data = await response.json();
    setTodoList(data);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <h2>ABC</h2>
      {todoList.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
      <button onClick={() => {}}>Click me</button>
    </>
  );
};

export default TodoList;

//Client Component
