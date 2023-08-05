/*
Toán tử và biểu thức
- Biểu thức = Toán tử + Toán hạng

S = a + b * c

1. Toán tử số học

+, -, *, /, %, **
++, --
*/

// var a = "10.5"; //Chuỗi số
// var b = 20;
// var c = a + b;
// var c = parseInt(a) + parseInt(b);
//Ép kiểu số nguyên

// var c = +a + +b; //Ép về kiểu số
// console.log(c);

var count = 1;
// count++; //count = count + 1
// ++count; //count = count + 1
// count--; //count = count - 1
// --count; //count = count - 1
// console.log(count);

// var total = count++; //Lấy trước khi tăng
// console.log(`Total = ${total}`);
// console.log(`Count = ${count}`);

// var total = ++count; //Lấy sau khi tăng
// console.log(`Total = ${total}`);
// console.log(`Count = ${count}`);

// var total = count++ + ++count; //1 + 3
// console.log(total); //4

// count++;
// console.log(`${++count}`);

/*
2. Toán tử logic (So sánh)
=> Toán này sẽ trả về kiểu dữ liệu boolean (true, false)
>, <, >=, <=, ==, ===, !=, !==
*/
// var a = 10;
// // var b = a == 10; //true, false
// var b = a === "10"; //So sánh cả giá trị và kiểu dữ liệu
// console.log(b);

/* 
3. Toán tử kết hợp
&& => and
|| => or
! => not
*/
// var a = 10;
// // var b = a >= 5 && a <= 10;
// var b = a < 0 || a >= 10;
// b = !b;
// console.log(b);

/*
4. Toán tử gán (=)
*/
// var a = 20;
// // a = a + 10;
// a += 10; //a = a + 10;
// a *= 10;
// a /= 10;
// a -= 10;
// a %= 3;
// a **= 2;
// console.log(a);

// var b = "Hoàng An";
// b += " F8";
// console.log(b);

/*
5. Toán tử 3 ngôi
*/

// var a = 10;
// //dieukien ? giatridung : giatrisai
// var b = a >= 10 ? "F8" : "Hoàng An";
// console.log(b);

// var x = 10;
// var total = 1 + 2 + (x >= 10 ? 10 : 5) + 3 + 4;

// console.log(total);

/*
6. Toán tử nullish (??)
*/
// var a; //undefined
// var a = null;
// var b = a ?? "F8";
// console.log(b);

//Bài tập: Viết lại toán tử nullish bằng toán tử 3 ngôi

// var b = a === null || a === undefined ? "F8" : a;
// var b = a !== null && a !== undefined ? a : "F8";
// console.log(b);

/*
Truthy, Falsy
=> Tự động chuyển về kiểu boolean trong ngữ cảnh thích hợp cần sử dụng boolean

- Chuyển về false => Falsy
- 0, "", null, undefined, false, NaN

- Việc chuyển kiểu dữ liệu khác về true => Truthy
- Các trường hợp còn lại
*/

// var a = -1;
// var b = a ? "F8" : "Hoàng An";
//=> Kiểm tra đúng

// var b = !a ? "F8" : "Hoàng An";
//=> Kiểm tra sai
// console.log(b);

/*
7. Toán tử && => Áp dụng với Truthy, Falsy

=> Nếu trước && là true => Lấy sau &&
=> Ngược lại, lấy trước &&
*/

// var a = 1;
// var b = a && "F8";
// console.log(b);

/*
8. Toán tử || => Áp dụng với Truthy, Falsy

=> Nếu trước || là false => Lấy sau ||
=> Ngược lại lấy trc ||
*/
var a = null;
var b = a || "F8";
console.log(b);
