// import { useEffect, useLayoutEffect } from "react";
import { useCallback, useMemo, useState } from "react";
import { fibonaci } from "../utils/functions";
import Result from "./Result";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  //   useLayoutEffect(() => {
  //     console.log("Effect");
  //     if (count === 5) {
  //       setCount(0);
  //     }
  //   }, [count]);
  const totalFibonaci = useMemo(() => {
    return [...Array(count).keys()].reduce((prev, current) => {
      console.log("totalFibonaci");
      return prev + fibonaci(current + 1);
    }, 0);
  }, [number]);

  //Tính toán totalFibonaci dựa vào state status
  /*
  useMemo: 
  - Lưu kết quả vào bộ nhớ đệm
  - Có 2 tham số: 
  + callback: Chứa logic cần trả về kết quả (Bắt buộc phải có return)
  + dependencies: Điều kiện để useMemo hoạt động (Giống useEffect)
  Trong trường hợp callback trong useMemo không chạy --> Hook useMemo sẽ trả về kết quả cũ được lưu trong bộ nhớ đệm
  */
  const handleReset = useCallback(() => {
    setCount(0);
    setNumber(0);
  }, []);
  /*
  useCallback: 
  - Lưu trữ hàm vào trong bộ nhớ đệm
  - Có 2 tham số: 
  + callback: Chứa nội dung hàm cần lưu trữ (Không cần phải return)
  + dependencies: Điều kiện để useCallback hoạt động (Giống useEffect)
  Trong trường hợp callback trong useCallback không chạy --> Hook useCallback sẽ lấy hàm trong bộ nhớ đệm
  */
  return (
    <div>
      {/* {console.log("render")} */}
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(+e.target.value);
        }}
        onBlur={() => {
          setNumber(count);
        }}
      />
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setNumber(count + 1);
        }}
      >
        +
      </button>
      <Result totalFibonaci={totalFibonaci} onReset={handleReset} />
    </div>
  );
};

export default Counter;

/*
useEffect
- State thay đổi
- Re-render
- Update UI
- Cleanup
- Callback

useLayoutEffect
- State thay đổi
- Re-render
- Cleanup
- Callback
- Update UI (Chờ khi callback chạy xong)
*/
