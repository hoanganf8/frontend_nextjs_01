"use client";
import { useState } from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json()); //Trả về promise
const TodoList = () => {
  const {
    data: todoList,
    error,
    isLoading,
    mutate,
  } = useSWR("http://localhost:3005/todos", fetcher, {
    fallbackData: [],
  });

  const [name, setName] = useState("");
  if (error) {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
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
      const todo = await response.json();

      mutate([...todoList, todo], {
        revalidate: false,
      }); //re-fetch
    }
  };

  return (
    <>
      <ul>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          todoList.map(({ id, name }) => <li key={id}>{name}</li>)
        )}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên công việc..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Thêm</button>
      </form>
    </>
  );
};

export default TodoList;
