import { useEffect } from "react";
import { useRef, useState } from "react";
import Button from "./Button";
const Counter = () => {
  const [count, setCount] = useState(0);
  const totalRef = useRef(0);
  const inputRef = useRef();
  const handleIncrement = () => {
    setCount(count + 1);
  };
  if (count < 5) {
    totalRef.current += count;
  }
  const buttonRef = useRef();
  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus(); //DOM
    // console.log(buttonRef);
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Từ khóa tìm kiếm..." />
      <h1>Count: {count}</h1>
      <h2>Tổng: {totalRef.current}</h2>
      <button onClick={handleIncrement}>+</button>
      <Button total={totalRef.current} />
    </div>
  );
};

export default Counter;
