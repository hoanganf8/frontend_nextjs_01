const initialState = {
  todoList: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/fetch": {
      return { ...state, todoList: action.payload };
    }
    case "todo/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    default: {
      return state;
    }
  }
};
