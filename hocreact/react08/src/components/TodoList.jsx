import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../redux/slices/todoSlice";
const {addTodo} = todoSlice.actions;
const TodoList = () => {
    const todoList = useSelector((state) => state.todo.todoList)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(name));
        setName('')
    }
    return (
        <div>
            <h2>Todo App</h2>
            <ul>
                {
                    todoList.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Tên..." value={name} onChange={(e) => setName(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;
