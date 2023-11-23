//React Render UI --> Thông qua thư viện ReactDOM
import ReactDOM from "react-dom/client"; //CSR
import React from "react";

//Quy trình Render của ReactDOM
//React Element --> Qua thư viện React DOM --> Tạo thành HTML

//Tạo React Element --> Trả về 1 object
// const h1 = React.createElement(
//   "h1",
//   null,
//   React.createElement(
//     "a",
//     {
//       href: "https://fullstack.edu.vn",
//       target: "_blank",
//     },
//     "Học React không khó",
//   ),
// );
// const h2 = React.createElement("h2", null, "Học React dễ hơn JS");
// const button = React.createElement(
//   "button",
//   {
//     className: "btn",
//     onClick: (e) => {
//       console.log("Click me");
//       console.log(e);
//     },
//   },
//   "Click me",
// );
// // const arr = [];
// // for (let i = 1; i <= 100; i++) {
// //   arr.push(React.createElement("li", null, "Item " + i));
// // }
// const arr = [...Array(100).keys()].map((index) =>
//   React.createElement("li", null, "Item " + (index + 1)),
// );
// const ul = React.createElement("ul", null, ...arr);
// const div = React.createElement(
//   "div",
//   {
//     id: "main",
//     className: "main",
//     "data-index": "ahihi",
//     style: {
//       color: "red",
//       fontWeight: "bold",
//       fontSize: "2rem",
//     },
//   },
//   h1,
//   h2,
//   ul,
//   button,
// );

//Bài tập:
// - Thêm thẻ ul vào trước thẻ button
// - Thêm 100 thẻ li vào thẻ ul

//JSX (Javascript XML) --> React Element (Thông qua Babel) --> HTML (Thông qua React DOM)
const title = "Tôi là Hoàng An";
const getName = () => <h2>Hoàng An</h2>;
const Product = () => <h2>Khóa học React</h2>; // --> Functional Component
const div = (
  <div>
    <h1>Học React không khó</h1>
    <h2>Học React dễ hơn JS</h2>
    <h2>{title}</h2>
    {getName()}
    <Product />
    <div className="content">
      <button
        className="btn"
        id="btn"
        onClick={() => {
          console.log("Hello F8");
        }}
      >
        Click me
      </button>
    </div>
  </div>
);

//Render React Element
ReactDOM.createRoot(document.querySelector("#root")).render(div);
