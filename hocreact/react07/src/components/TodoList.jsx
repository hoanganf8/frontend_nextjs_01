import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const TodoList = () => {
  const todoList = useSelector((state) => {
    console.log(state);
    return state.todo.todoList;
  });
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "todo/add",
      payload: name,
    });
    setName("");
  };
  return (
    <div>
      <h2>Todo List App</h2>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
