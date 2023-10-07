/*
Event Scroll

1. Lấy tọa độ theo trục X
window.scrollX

2. Lấy tọa độ theo trục Y
window.scrollY

3. Thiết lập tọa độ cho Scroll
window.scroll(x,y)
window.scroll({
    top: y,
    left: x,
    behavior: smooth|instant|auto
})
*/
// window.addEventListener("scroll", function () {
//   //   console.log("Scroll Y:", window.scrollY);
// });

var scrollToBtn = document.querySelector(".scroll-to");
scrollToBtn.addEventListener("click", function () {
  window.scroll({
    top: 1000,
    behavior: "smooth",
  });
});

var topBtn = document.querySelector(".top-btn");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
