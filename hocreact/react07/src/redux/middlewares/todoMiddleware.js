export const fetchTodos = () => {
  return async (dispatch) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();

    //Dispatch data tới reducer
    dispatch({
      type: "todo/fetch",
      payload: data,
    });
    dispatch({
      type: "counter/init",
      payload: 100,
    });
  };
};
