const initialState = {
  count: 0,
};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/init": {
      return { ...state, count: action.payload };
    }
    case "counter/increment": {
      return { ...state, count: state.count + 1 };
    }
    case "counter/decrement": {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};
