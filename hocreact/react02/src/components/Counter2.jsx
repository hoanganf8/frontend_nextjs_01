import { useEffect, useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("Effect: " + count);
    return () => {
      //Cleanup
      console.log("Cleanup: " + count);
    };
  });
  return (
    <div>
      {console.log("Render: " + count)}
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter2;

/*
usEffect
1. State thay đổi
2. Render
3. Update UI
4. Cleanup (Lần trước)
5. Callback

Cleanup sẽ dọn dẹp
- removeEventListener
- Timer: Interval, Timeout
- Blob, Storage,...
- Kiểm tra unmount trước khi setState

let a = 10;
a = a + 10;
a = "F8"

let b = 20;
*/
