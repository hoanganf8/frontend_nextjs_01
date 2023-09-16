//DOM CSS: Can thiệp CSS Inline vào thẻ html (Thông qua thuộc tính style)
// -> Trả về 1 object có key là các thuộc tính CSS
// -> update lại các key -> CSS thay đổi

var content = document.querySelector(".content");
// console.log(content.style);
// content.style.color = "red";
// content.style.fontWeight = "bold";
// content.style.textTransform = "uppercase";

var css = {
  color: "red",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontStyle: "italic",
  backgroundImage: `url("https://picsum.photos/536/354")`,
  //   transform: "translateX(20px)",
};

Object.assign(content.style, css);

//Bổ sung thuộc tính sau
/*
- background-image
- transform translateX
*/

//Lấy giá trị thuộc tính
// console.log(content.style.fontStyle);
// console.log(content.style.display);
// console.log(content.style);

// var toggleBtn = document.querySelector(".toggle");
// toggleBtn.addEventListener("click", function () {
//   if (content.style.display === "none") {
//     content.style.display = ""; //block
//   } else {
//     content.style.display = "none";
//   }
// });

var fadeOutBtn = document.querySelector(".fadeout-btn");
var fadeInBtn = document.querySelector(".fadein-btn");
var duration = content.dataset.duration;
var timingFunction = content.dataset.timingFunction;
fadeOutBtn.addEventListener("click", function () {
  var css = {
    transition: `opacity ${duration}ms ${timingFunction}`,
    opacity: 0,
  };
  Object.assign(content.style, css);
  //Chờ khi nào opacity chạy xong -> display: none
  setTimeout(function () {
    content.style.display = "none";
  }, duration);
});

fadeInBtn.addEventListener("click", function () {
  content.style.display = "block";

  var css = {
    transition: `opacity ${duration}ms ${timingFunction}`,
    opacity: 1,
  };
  setTimeout(function () {
    Object.assign(content.style, css);
  });
});
