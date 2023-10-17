//Strict mode = Chế độ nghiêm ngặt trong Javascript

"use strict";

// x = 10; //Lỗi
// console.log(x);

// var user = {
//   name: "Hoàng An",
// };

// // delete user; //Lỗi

// console.log(user);

// var getMessage = function () {
//   //Hello
//   ("use strict");
//   x = 10; //Lỗi
//   console.log(x);
// };

// getMessage();

// var total = 010 + 20 + 30

// console.log(total);

//Hoisting
/*
- Đây là cơ chế mặc định của Javascript
- Kỹ thuật tự động đẩy khai báo lên trước phần thực thi: biến, hàm (function declaration)
- Với khai báo biến: chỉ đẩy phần khai báo lên trước phần thực thi, ko đẩy giá trị, không áp dụng với từ let, const
*/

x = 10;
console.log(x);
var x; //-> Tồn tại hoisting

getMessage();

//function declaration
function getMessage() {
    console.log('Hello F8');
}

getTotal();
//function expression
var getTotal = function() {
    console.log(10);
}