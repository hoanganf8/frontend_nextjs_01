"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Form = () => {
  const [form, setForm] = useState({
    status: "all",
    keyword: "",
  });
  const router = useRouter();
  console.log(router);
  const pathname = usePathname();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const { status, keyword } = form;
    const newUrl = `${pathname}?${new URLSearchParams(form)}`;
    router.push(newUrl);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <select name="status" onChange={handleChange}>
        <option value="all">Tất cả</option>
        <option value="active">Kích hoạt</option>
        <option value="inactive">Chưa kích hoạt</option>
      </select>
      <input
        type="search"
        name="keyword"
        placeholder="Từ khóa..."
        onChange={handleChange}
      />
      <button>Tìm kiếm</button>
    </form>
  );
};

export default Form;
