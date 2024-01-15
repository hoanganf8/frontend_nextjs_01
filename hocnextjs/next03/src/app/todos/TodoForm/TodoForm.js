"use client";
import style from "./TodoForm.module.scss";
import { useState } from "react";
import { mutate } from "swr";

const TodoForm = () => {
  const [name, setName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3005/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (response.ok) {
      mutate("http://localhost:3005/todos"); //re-fetch
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className={style["todo-list"]}>
      <input
        type="text"
        placeholder="Tên công việc..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button>Thêm</button>
    </form>
  );
};

export default TodoForm;
