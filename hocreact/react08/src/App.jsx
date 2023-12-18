import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "./redux/slices/counterSlice";
const { decrement, increment } = counterSlice.actions;
const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // dispatch({
    //   type: "counter/increment",
    //   payload: 5,
    // });
    dispatch(increment(5));
  };
  const handleDecrement = () => {
    // dispatch({
    //   type: "counter/crement",
    //   payload: 10,
    // });
    dispatch(decrement(5));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default App;
