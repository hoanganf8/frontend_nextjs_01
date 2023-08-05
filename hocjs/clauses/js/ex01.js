/*
Cú pháp if else

if (dieukien) {
    //Nội dung
}

if (dieukien) {
    //Nội dung đúng
} else {
    //Nội dung sai
}

if (dieukien) {
    //Nội dung
} else if (dieukien) {
    //Nội dung
} else if (dieukien) {
    //Nội dung
} else {
    //Nội dung
}

if (dieukien) {
    if (dieukien) {

    } else {

    }
} else {

}
*/

var a = 10;
var b = 2;
var c;
if (b !== 0) {
  c = a / b;
  console.log(`Thương = ${c}`);
} else {
  console.log("Không tính được");
}

/*
Bài tập: Tính lương thực nhận của 1 nhân viên

var salary = 15000000

Lương thực nhận = Tổng lương - thuế

Bảng thuế như sau: 
- Lương < 5tr => Thuế  1.5%
- Lương từ 5tr đến 15tr => Thuế 3%
- Lương trên 15tr => 5%
*/

var salary = 15000000;
var tax;

if (salary < 5000000) {
  tax = 1.5;
} else if (salary > 15000000) {
  tax = 5;
} else {
  tax = 3;
}

salary = salary - (tax * salary) / 100;
console.log(`Thực nhận = ${salary}`);
