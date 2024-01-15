import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";
export const metadata = {
  title: "Danh sách công việc - F8",
  description: "Quản lý công việc chuyên nghiệp với F8",
};
const TodoPage = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default TodoPage;
