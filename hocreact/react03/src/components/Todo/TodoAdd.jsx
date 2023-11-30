/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoAdd = ({ onGetTodo }) => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onGetTodo(name);
    setName("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên công việc"
        onChange={handleChange}
        value={name}
      />
      <button>Thêm</button>
    </form>
  );
};

export default TodoAdd;
