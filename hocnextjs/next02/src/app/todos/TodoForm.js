"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/todos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      },
    );
    if (response.ok) {
      console.log("success");
      router.refresh();
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={title}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
