import { useState } from "react";
import { useDispatch, useSelector } from "../store/hook";
const TodoList = () => {
  const [name, setName] = useState("");
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "todolist/add",
      payload: name,
    });
    setName("");
  };
  const handleRemove = (index) => {
    dispatch({
      type: "todolist/delete",
      payload: index,
    });
  };
  return (
    <div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <span
              onClick={() => {
                handleRemove(index);
              }}
            >
              Xóa
            </span>
          </li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
