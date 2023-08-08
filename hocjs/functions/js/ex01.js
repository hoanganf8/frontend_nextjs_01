/*
Hàm là 1 cú pháp trong lập trinhf, cho phép gom nhóm các đoạn chương trình con để thuận tiện trong quá trình tái sử dụng

Hàm thể hiện 1 chức năng, đặt tên hàm bằng động từ

Dùng cú pháp camelCase

Cú pháp

1. Hàm không tham số, có tham số
Định nghĩa hàm
function tenHam() {
    Nội dung hàm
}

function tenHam(thamso1, thamso2,...) {
    Nội dung hàm
}

//Gọi hàm
tenHam()
tenHam(doiso1, doiso2,...)

2. Hàm có giá trị trả về, hàm không có giá trị trả về

- Hàm có từ khóa return => Hàm return
=> Khi return đc gọi => Thoát hàm (Các đoạn code dưới return không hoạt động)
- Hàm không có từ khóa return => Hàm void

3. Biến cục bộ, biến toàn cục
- Biến cục bộ: Local Variable => Chỉ sử dụng trong phạm vi 1 hàm
- Biến toàn cục: Global Variable => Sử dụng trong phạm vi ngoài hàm
*/

// function getMessage() {
//   console.log(`Xin chào f8`);
// }

// getMessage(); //Lời gọi hàm chủ động

// function getMsg(msg, type = "success") {
//   console.log(msg, type);
// }

// getMsg();

// //Viết hàm sum(a, b) => Tính tổng

// function sum(a, b) {
//   var total = a + b;
//   //   console.log(total);
//   return total;
// }

// console.log(sum(5, 10) + 10);

// function division(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }

//   return "Không tính được";
// }

// console.log(division(10, 2));

// function getMessage(value) {
//   var value = `Xin chào: ${value}`;
//   //Biến cục bộ => Khai báo trong hàm
//   console.log(value);
// }

// getMessage("F8");

function getMessage() {
  //msg => Biến toàn cục
  return msg;
}

function setMessage(value) {
  msg = value;
}

var msg = "Hoàng An F8";
//Biến toàn cục cần khai báo trước khi gọi hàm

setMessage("Fullstack = F8");
console.log(getMessage());
