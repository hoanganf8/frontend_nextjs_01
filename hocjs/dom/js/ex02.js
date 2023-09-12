/*
Sự kiện là gì?
- Hành động từ phía người dùng tác động lên các thẻ html
- JS cung cấp sẵn các sự kiện cho các thẻ html
- Mỗi thẻ html sẽ có những sự kiện khác nhau

Làm sao để gán sự kiện cho thẻ html
1. Event Handler

2. Event Listener
*/

var title = document.querySelector(".title");
console.log([title]);

var handleClick = function (e) {
  //e = event object
  // => Trả về 1 đối tượng mô tả rõ thông tin về nhóm sự kiện
  console.log(this);
  console.log(e);
  console.log("Hello F8");
};

title.onclick = handleClick;

// title.onclick = function () {
//   console.log("Hoàng An F8");
// };

// title.onmouseover = function () {
//   console.log("Di chuột");
// };

var input = document.querySelector(".name");
// input.onkeyup = function (e) {
//   console.log("Hello:", e);
// };

input.onchange = function () {
  console.log("Thay đổi");
};

input.onfocus = function () {
  console.log("Focus vào");
};

input.onblur = function () {
  console.log("Focus ra");
};

var btn = document.querySelector(".btn");

//Sử dụng hàm:
//1. addEventListener(type, callback)
//2. removeEventListener(type, callback)

var handleClickBtn = function () {
  console.log("Hello F8");
  btn.removeEventListener("click", handleClickBtn);
};

btn.addEventListener("click", handleClickBtn);

// btn.addEventListener("click", function () {
//   console.log("Hello F88");
// });

//Gán sự kiện thông qua thuộc tính của thẻ html

var handleClickH2 = function () {
  console.log("Click h2");
};
