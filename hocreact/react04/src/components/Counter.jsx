const Counter = ({ state, dispatch }) => {
  const { count } = state;
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 10,
    });
    //Hàm dispatch sẽ truyền vào 1 action (Object)
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 5,
    });
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
