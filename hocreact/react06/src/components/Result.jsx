import { memo } from "react";
const Result = ({ totalFibonaci, onReset }) => {
  console.log("result");
  return (
    <div>
      <h2>Tổng số Fibonaci là: {totalFibonaci}</h2>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default memo(Result);
