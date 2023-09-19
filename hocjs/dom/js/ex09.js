//Tạo các element

var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".carousel-nav .next");
var prevBtn = document.querySelector(".carousel-nav .prev");

//-> Lấy ra danh sách các items
var carouselItems = carouselInner.children;

//-> Tính chiều rộng của 1 item
// console.log([carouselInner]);
var itemWidth = carouselInner.clientWidth; //Lấy chiều rộng của 1 element

//-> Tính tổng chiều rộng các items
var totalWidth = itemWidth * carouselItems.length;

//-> Cập nhật CSS
carouselInner.style.width = `${totalWidth}px`;

//Xử lý chuyển slide
var position = 0;
nextBtn.addEventListener("click", function () {
  //Chặn nếu chạy hết slide
  if (Math.abs(position) >= totalWidth - itemWidth) {
    return;
  }
  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) <= 0) {
    return;
  }
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;
});
