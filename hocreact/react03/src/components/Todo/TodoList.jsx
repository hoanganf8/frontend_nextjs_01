/* eslint-disable react/prop-types */
const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default TodoList;
