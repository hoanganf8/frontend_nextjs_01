// import { forwardRef } from "react";
import { memo } from "react";
function Button({ total }) {
  console.log("Button Render: " + total);
  return (
    <div>
      <button>Click me: {total}</button>
    </div>
  );
}

export default memo(Button);

//Sử dụng Higher Order Component (HOC)
// forwardRef
// memo --> Chỉ re-render khi props thay đổi
