/*
Function declaration

function tenHam() {
    
}

Function expression

var tenHam = function() {

}
*/

// var getMessage = function () {
//   console.log(`Xin chào f8`);
// };

// getMessage();

//IIFE
// (function (name) {
//   console.log("Xin chào F8", name);
// })("hoàng An");

// var a = function (name) {
//   console.log(name);
// };

// var b = a;

// b("F8");

// var a = function () {
//   console.log("Xin chào F8");
// };

// if (typeof a === "function") {
//   a();
// }

// var b;

// if (b === undefined) {
//   console.log("Nó là undefined");
// }
// console.log(typeof b, b);
// if (typeof b === "undefined") {
//   console.log("Nó là undefined");
// }

// var sum = function (a, b) {
//   console.log(arguments);
//   console.log(a, b);
// };

// sum(5, 10, 15, 20);

//rest parameter
// var concat = function (str, ...args) {
//   console.log(str);
//   console.log(args);
//   //   console.log(arguments);
//   /*
//   Tách dữ liệu thành 2 phần
//   - Phần 1: Đối số 1
//   - Phần 2: Các đối số còn lại
//   */
// };

// concat("Hoàng An", "F8", "F9", "F10");

//Hàm setTimeout
//Delay 1 function
/*
- Tham số 1: 1 hàm
- Tham số 2: Thời gian muốn delay
- Tham số 3: rest param
*/
// var handleShow = function (name, email) {
//   console.log("Xin chào F8", name);
//   console.log(email);
// };
// setTimeout(handleShow, 2000, "Hoàng An", "hoangan.web@gmail.com");
// setTimeout(function () {
//   console.log("Xin chào F8");
// }, 2000);
//Gọi hàm theo kiểu Callback

//setInterval => Lặp đi lặp lại nội dung trong function
// var count = 0;
// var id = setInterval(function () {
//   console.log(`xin chào:`, ++count);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);

//Định nghĩa hàm callback

var getA = function (fn, ...args) {
  setTimeout(function () {
    console.log("getA");
    if (typeof fn === "function") {
      fn(...args); //Lời gọi hàm chủ động
    }
  }, 1000);
};

var getB = function (name, email) {
  console.log(`getB`, name, email);
};

var getC = function () {
  console.log(`getC`);
};

// getA(getB, "Hoàng An", "hoangan.web@gmail.com");

/*
Định nghĩa 3 hàm: 
one() => Mất 3s để hiện kết quả: Thứ nhất
two() => Mất 1s để hiện kết quả: Thứ hai
three() => Mất 2s để hiện kết quả: Thứ ba
*/

//Thực hiện gọi hàm làm sao để chạy theo thứ tự: one() => two() => three()

var one = function (fn) {
  setTimeout(function () {
    console.log("Thứ nhất");
    if (typeof fn === "function") {
      fn();
    }
  }, 3000);
};

var two = function (fn, name) {
  setTimeout(function () {
    console.log("Thứ hai", name);
    if (typeof fn === "function") {
      fn();
    }
  }, 1000);
};

var three = function (fn, name) {
  setTimeout(function () {
    console.log("Thứ ba", name);
    if (typeof fn === "function") {
      fn();
    }
  }, 2000);
};

var four = function (name) {
  console.log("Hoàng An", name);
};

one(function () {
  two(function () {
    three(function () {
      four("Hoàng An 3");
    }, "Hoàng An 2");
  }, "Hoàng An");
});

//Callback Hell => Khó bảo trì

/*
Tìm hiểu trước: 
- Hàm con: Định nghĩa 1 hàm trong 1 hàm khác
- Closure
- Giải thuật đệ quy
*/
