const todoApi = `https://jsonplaceholder.typicode.com/todos`;
const getTodos = async () => {
  const response = await fetch(todoApi);
  return response.json();
};
const TodoList2 = async () => {
  const todoList = await getTodos();
  return (
    <>
      {todoList.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </>
  );
};

export default TodoList2;

//Server Component
