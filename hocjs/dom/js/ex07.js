//event target
// - event target khác gì với this?

/*
this: Element gán sự kiện
e.target: Mục tiêu mà người dùng tác động (Tương tác sự kiện)
*/

// var title = document.querySelector(".title");
// title.addEventListener("click", function (e) {
//   console.log(this);
//   console.log(e.target);
//   e.target.style.color = "red";
// });

//Cách 1: Không dùng event target
// var h2 = document.querySelectorAll(".products h2");
// console.log(h2);
// h2.forEach(function (item) {
//   item.addEventListener("click", function () {
//     console.log(this);
//     this.style.color = "red";
//   });
// });

///Array-like object -> Dùng Array.from() để chuyển thành array

//Cách 2: Dùng event target
// var products = document.querySelector(".products");
// products.addEventListener("click", function (e) {
//   var item = e.target;
//   if (item.localName === "h2") {
//     item.style.color = "red";
//   }
// });

var content = document.querySelector(".content");
var btn = content.querySelector(".btn");
// console.log(btn);

//Vấn đề: Chỉ bấm button được 1 lần -> Làm sao khắc phục?

// var handleClick = function () {
//   var btn = content.querySelector(".btn");
//   //   console.log(btn);
//   btn.addEventListener("click", function () {
//     content.innerHTML += `<h1>F8</h1>`;
//     handleClick();
//   });
// };

// handleClick();

content.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    content.innerHTML += `<h1>F8</h1>`;
  }
});
