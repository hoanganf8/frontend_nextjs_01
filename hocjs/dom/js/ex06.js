//Event Object
var btn = document.querySelector(".btn");
var initialOffsetX, initialOffsetY;
var handleDrag = function (e) {
  //   console.log("Kéo");
  var clientX = e.clientX;
  var clientY = e.clientY;
  btn.style.translate = `${clientX - initialOffsetX - 10}px ${
    clientY - initialOffsetY - 10
  }px`;
};
btn.addEventListener("mousedown", function (e) {
  //   console.log(e);
  document.addEventListener("mousemove", handleDrag);
  initialOffsetX = e.offsetX;
  initialOffsetY = e.offsetY;
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});

/*
Phương thức trong event object

1. preventDefault() -> Ngăn các hành động mặc định của trình duyệt
*/

var a = document.querySelector("a");
a.addEventListener("click", function (e) {
  e.preventDefault();
  //Lấy giá trị thuộc tính href
  console.log(this.href);
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

var content = document.querySelector(".content");
var button = document.querySelector(".content button");

content.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Content");
  document.body.style.background = "grey";
});

button.addEventListener("click", function (e) {
  e.stopPropagation(); //Ngăn hành động nổi bọt của thẻ html con
  console.log("Button");
});

document.addEventListener("click", function () {
  document.body.style.background = "initial";
});

//e.target => Buổi sau
//DOM Navigation
