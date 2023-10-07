//load => Tất cả các tài nguyên được tải xong

//DOMContentLoaded => Khi cây DOM được hình thành

var preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  //   console.log("Web tải xong");
  //   var img = document.querySelector("img");
  //   console.log(img.width);
  Object.assign(preloader.style, {
    opacity: 0,
    visibility: "hidden",
  });
  setTimeout(function () {
    preloader.remove();
  }, 400);
});

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Hình thành cây DOM");
//   var img = document.querySelector("img");
//   console.log(img.width);
// });

// var img = document.querySelector("img");
// console.log(img);
// console.log(img.width);
