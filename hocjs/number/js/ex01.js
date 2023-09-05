//Number: Kiểu dữ liệu nguyên thủy
//Hàm tạo của number là Number

console.log([Number]);

var a = 10;

//Kiểm tra 1 biến có phải number hay không?
// if (typeof a === "number") {
//   console.log("Đây là số");
// }

//Kiểm tra 1 số nguyên
// if (Number.isInteger(a)) {
//   console.log("Đây là số nguyên");
// }

//Số NaN (Not A Number): Giá trị không tính toán được
/*
- Ép kiểu thất bại
- Biểu thức số học có 1 toán hạng là NaN
*/
var a = NaN;
// console.log(a, typeof a);

//Kiểm tra giá trị NaN
if (Number.isNaN(a)) {
  console.log("Đây là số NaN");
}

//Infinity: Vượt quá mức lưu trữ cho phép
console.log(-(1000 ** 1000));
// console.log(10 / 0);

a = Infinity;
// if (a !== Infinity && a !== -Infinity) {
//   console.log("Không phải");
// }

if (Math.abs(a) !== Infinity) {
  console.log("Không phải");
}

//Tìm hiểu:
/*
Các loại ép kiểu: 
- parseInt()
- parseFloat()
- Number() và +

Làm tròn và lấy phần thập phân
- toFixed()

Định dạng số và tiền tệ: 
- toLocaleString()

Đối tượng Math
*/
