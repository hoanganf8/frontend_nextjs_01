import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const handleGetTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };
  return (
    <div>
      <TodoList todoList={todoList} />
      <TodoAdd onGetTodo={handleGetTodo} />
    </div>
  );
};

export default Todo;
