const initialState = {
  todoList: ["CV 1", "CV 2", "CV 3"],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    default: {
      return state;
    }
  }
};
