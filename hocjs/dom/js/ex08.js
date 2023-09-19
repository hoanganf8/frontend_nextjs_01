/*
DOM Navigation

1. parentElement
-> Chọn thành phần cha gần nhất

2. children
-> Chọn tất cả con cấp 1 (gần nhất)
-> Luôn trả về 1 danh sách -> Cần phải chọn đúng element cần xử lý

3. nextElementSibling 
-> Chọn thành phần ngang hàng đứng sau

4. previousElementSibling 
-> Chọn thành phần ngang hàng đứng trước
*/

var products = document.querySelector(".products");

//Case 1: Click vào nút xóa -> Xóa sản phẩm tương ứng

// products.addEventListener("click", function (e) {
//   if (e.target.classList.contains("remove")) {
//     e.target.parentElement.remove();
//   }
// });

//Case 2: Click vào nút -> Đổi màu tên sản phẩm

// products.addEventListener("click", function (e) {
//   if (e.target.classList.contains("remove")) {
//     console.log(e.target.parentElement.children[0]);
//     e.target.parentElement.children[0].style.color = "red";
//   }
// });

//Case 3: Click vào nút -> Đổi màu tên sản phẩm đứng sau
// products.addEventListener("click", function (e) {
//   if (e.target.classList.contains("remove")) {
//     var nextElement = e.target.parentElement.nextElementSibling;
//     if (nextElement === null) {
//       //   nextElement = products.children[0];
//       nextElement = products.firstElementChild;
//     }

//     nextElement.children[0].style.color = "red";
//   }
// });

//Case 4: Click vào nút -> Đổi màu tên sản phẩm đứng trước

products.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    var prevElement = e.target.parentElement.previousElementSibling;

    if (prevElement === null) {
      prevElement = products.lastElementChild;
    }

    prevElement.children[0].style.color = "red";
  }
});
