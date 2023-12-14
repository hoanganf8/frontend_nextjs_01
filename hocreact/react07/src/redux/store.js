import { legacy_createStore as createStore } from "redux";
const initialState = {
  todoList: ["CV 1", "CV 2", "CV 3"],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    default: {
      return state;
    }
  }
};
export const store = createStore(rootReducer);
