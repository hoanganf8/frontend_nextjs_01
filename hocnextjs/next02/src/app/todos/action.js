"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
export const handleSubmit = async (formData) => {
  // console.log(formData);
  const title = formData.get("title");
  const response = await fetch(`${process.env.SERVER_API}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  if (response.ok) {
    // revalidatePath("/todos");
    revalidateTag("todo-list");
    //Chuyển về trang chủ
    redirect("/");
  }
};

//Router Handler
