//Các loại ép kiểu

//1. Ép kiểu sang số nguyên
//-> parseInt()
//-> Number.parseInt()
// var a = "1232aa12";
// a = parseInt(a);
// console.log(a);

//2. Ép sang kiểu số thực
// -> parseFloat()
// -> Number.parseFloat()
// var a = "123.2aa12";
// a = parseFloat(a);
// console.log(a);

//Các kiểu dữ liệu khác chuyển sang number
//true => NaN
//False => NaN
//[] => NaN
//{} => NaN
//null => NaN
//undefined => NaN
//Date => NaN
// var a = new Date();
// console.log(parseInt(a));

//3. Ép kiểu bằng Number()
// -> Chuyển thành kiểu số thực
// -> Dùng hàm Number() hoặc dấu +
// var a = "12.567a";
// // a = Number(a);
// a = +a;
// console.log(a);

//Các ngoại lệ
//true => 1
//false => 0
//[] => 0
//[1,2,3] => NaN
//[5] => 5
//["5"] => 5
//["F8"] => NaN
// {} => NaN (Các object nói chung)
// null => 0
// undefined => NaN
// new Date() => Trả về timestamp
// var a = new Date();
// console.log(Number(a));

//Bài tập:
var arr = [
  5,
  "10",
  20,
  1,
  true,
  false,
  undefined,
  null,
  NaN,
  Infinity,
  -Infinity,
  "F8",
];

//Yêu cầu: Tính tổng các số lẻ

var total = arr.reduce(function (prev, current) {
  //   console.log(current, Number(current));
  if (current !== true) {
    current = Number(current);
    if (
      !isNaN(current) &&
      current !== Infinity &&
      current !== -Infinity &&
      current % 2 !== 0
    ) {
      return prev + current;
    }
  }

  return prev;
}, 0);
console.log(total);

//Điều kiện để kiểm tra 1 biến là số:
/*
typeof = number
Không phải NaN
Không phải Infinity và -Infinity
*/

// Chuyển đổi hệ cơ số
//toString() => Chuyển số thành chuỗi
var a = 50;
// var a = a.toString(2); //Hệ nhị phân
// a = a.toString(8); //Hệ bát phân
a = a.toString(16); //Hệ thập lục phân
console.log(a);

//Lấy số chữ số phần thập phân
//toFixed(number) => number là số chữ số phần thập phân muốn lấy
//Tự động làm tròn
//Chuyển về chuỗi

//toPrecision(number) => Lấy số các chữ số từ đầu (Áp dụng nguyên tắc làm tròn)
// var a = 12.5658;
// a = a.toFixed(1);
// a = a.toPrecision(4);
// console.log(a);

// console.log([Number]);

//Chuyển đổi định dạng số
var price = 124300000000;
price = price.toLocaleString("vi", {
  style: "currency",
  currency: "EUR",
});
console.log(price);

console.log(Math);

//1. abs() => Trị tuyệt đối

//2. ceil() => Làm tròn lên

//3. floor() => Làm tròn xuống

//4. round() => Làm tròn

//5. min() => Lấy giá trị nhỏ nhất

//6. max() => Lấy giá trị lớn nhất

//7. random() => Lấy số ngẫu nhiên (>0 && <1)

//8. sqrt() => Căn bậc 2

console.log(Math.random());

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));

var seconds = 295; //295 giây

//Viết hàm chuyển đổi thành định dạng: phút:giây

//Ví dụ: 04:30
var getTime = function (value) {
  var mins = Math.floor(value / 60);
  value -= mins * 60;
  value = Math.floor(value);

  return `${mins < 10 ? "0" + mins : mins}:${value < 10 ? "0" + value : value}`;
};

console.log(getTime(seconds));
