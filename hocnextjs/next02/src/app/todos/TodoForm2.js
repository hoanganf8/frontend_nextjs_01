"use client";
import { useRef } from "react";
import { handleSubmit } from "./action";
const TodoForm2 = () => {
  //   const handleSubmit = async (formData) => {
  //     "use server";
  //     // console.log(formData);
  //     const title = formData.get("title");
  //     console.log(title);
  //   };
  const inputRef = useRef();
  return (
    <form
      action={async (formData) => {
        const status = await handleSubmit(formData);
        //Thành công
        inputRef.current.value = "";
        inputRef.current.msg = "Thêm thành công";
      }}
    >
      <input type="text" placeholder="Title" name="title" ref={inputRef} />
      <button>Add</button>
      <p>{inputRef.current?.msg}</p>
    </form>
  );
};

export default TodoForm2;

/*
Làm việc với Server Action
- Xử lý các hành động ở phía server
- Thường sẽ xử lý form

Có 2 cách để làm việc với Server Action
- Cách 1: Gọi server action từ client component
- Cách 2: Gọi Server action từ server component
*/
