var showMessage = function (msg) {
  console.log(`Xin chào F8`);
  var a = "Front-End";
  var display = function () {
    console.log("Hoàng An: " + msg);
    console.log(a);
  };
  display();
};

showMessage("F8");

var Home = function () {
  var display = function () {
    console.log("Xin chào F8");
  };
  display();
};
Home();

/*
Ứng dụng vào các JS Framework: 
Component
- render
- event handler
- call api,...
*/

console.log("====Closure====");
// var sum = function (a, b) {
//   return a + b;
// };

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

//Giai đoạn 1: Nhận đối số a
var add = sum(10);

//Giai đoạn 2: Nhận đối số b
// var result1 = add(20);
// console.log(`Result 1: ${result1}`);

// var result2 = add(30);
// console.log(`Result 2: ${result2}`);

// var result3 = add(40);
// console.log(`Result 3: ${result3}`);

var counter = function () {
  var count = 0;
  return function () {
    return ++count;
  };
};

var count = counter();
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

/*
hàm con sẽ kế thừa
- Tham số của hàm cha
- Biến cục bộ của hàm cha
- Biến toàn cục
- Biến cục bộ của chính nó
- Tham số của chính nó
*/

//Giải thuật đệ quy
/*
Gọi lại chính hàm mà bạn đang định nghĩa
*/
// var showNumber = function (n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };

// showNumber(10);

var getTotal = function (n) {
  if (n === 1) {
    return 1;
  }

  return n + getTotal(n - 1);
};

console.log(getTotal(5));

//Tính tổng: 1 + 2 + 3 + ... + N

/*
n = 5
5 + getTotal(4)
5 + 4 + getTotal(3)
5 + 4 + 3 + getTotal(2)
5 + 4 + 3 + 2 + getTotal(1)
5 + 4 + 3 + 2 + 1
*/

var fibonacci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));

/*
n = 5
fibonacci(5) = fibonacci(4) + fibonacci(3)
fibonacci(3) + fibonacci(2) + fibonacci(2) + fibonacci(1)
fibonacci(2) + fibonacci(1) + 1 + 1 + 1
1 + 1 + 1 + 1 + 1 = 5

Hàm: 
- Arrow function
- Generator function
*/
