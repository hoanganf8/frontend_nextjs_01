// import Counter from "./components/Counter";
import { useState } from "react";
import Counter2 from "./components/Counter2";
import HelloWorld from "./components/HelloWorld";
import PreviewImage from "./components/PreviewImage";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <HelloWorld />}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
};

export default App;

/*
Component đưa vào DOM --> Mouting
Component loại bỏ khỏi DOM --> Unmouting

Tình huống: Website có 3 trang:
- Home
- About
- Contact

Truy cập Home --> Chuyển qua About

Khi setState: 
- Component Mounted
- Component chưa Unmounted
*/
