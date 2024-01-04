const getTodo = async () => {
  const response = await fetch(`${process.env.SERVER_API}/todos`, {
    cache: "force-cache",
    next: {
      //   revalidate: 10,
      tags: ["todo-list"],
    },
  });
  return response.json();
};
const TodoList = async () => {
  const todoList = await getTodo();
  return (
    <ul>
      {todoList.map(({ title, id }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default TodoList;

/*
Server với Server (API)

Để xóa cache: 
- revalidatePath()
- revalidateTag()
==> Chỉ hoạt động ở Server Action và Router Handler
*/
