console.log(Array.prototype);

var users = ["An", "Dương", "Vương", "Tùng", "Vương"];

//1. at(index) => Lấy phần tử mảng theo index
// console.log(users.at(1));

//bien.ham1().ham(2).ham3() => Chaining
//bien.ham1()[0]

//2. concat(...args) => Nối mảng và trả về 1 mảng mới

// console.log(users.concat([1, 2, 3], ["a", "b", "c"]));

// console.log(users.concat(["Hoàng Anh"]));
// users[users.length] = ["Hoàng Anh"];
// console.log(users);

//3. indexOf(value) => Tìm vị trí xuất hiện đầu tiên của phần tử trong mảng, nếu không tìm thấy sẽ trả về -1
// console.log(users.indexOf("Vương"));

//4. lastIndexOf(value) => Trả về vị trí cuối tìm được
// console.log(users.lastIndexOf("Vương"));

//5. includes(value) => Tìm phần tử trong mảng và trả về true/false
// console.log(users.includes("Vương"));

//6. slice(start, end) => Cắt mảng từ start đến end và trả về 1 mảng mới
// console.log(users.slice(1, 3));
// console.log(users.slice(1));
// console.log(users.slice(-2));

//7. join(seps) => Nối các phần tử mảng thành 1 chuỗi
// console.log(users.join(" "));

//Bài tập 1: Lấy tên từ tên đầy đủ
//Dùng mảng
// var fullname = "Tạ Hoàng An "; //An
// var firstName = fullname.trim().split(" ").slice(-1).join();
// console.log(firstName);

//8. push(...args) => Thêm phần tử vào cuối mảng và trả về số lượng phần tử mới sau khi đã thêm. Hàm này sẽ thay đổi mảng ban đầu
// var count = users.push("A", "B", "C");
// console.log(users);
// console.log(count);

//9. unshift(...args) => Thêm phần tử vào đầu mảng và trả về số lượng phần tử sau khi thêm. Hàm này sẽ thay đổi mảng ban đầu

// var count = users.unshift("A", "B", "C");
// console.log(users);
// console.log(count);

//10. pop() => Xóa phần tử cuối mảng và trả về giá trị phần tử vừa xóa. Hàm này sẽ thay đổi mảng ban đầu
// var value = users.pop();
// console.log(users);
// console.log(value);

//11. shift() => Xóa phần tử đầu mảng và trả về giá trị phần tử vừa xóa. Hàm này sẽ thay đổi mảng ban đầu
// var value = users.shift();
// console.log(users);
// console.log(value);

//12. reverse() => Đảo ngược mảng và trả về mảng sau khi đảo ngược. Hàm này cũng thay đổi mảng ban đầu
// console.log(users.reverse());
// console.log(users);

//13. sort() => Sắp xếp mảng theo thứ tự tăng dần và trả về true/false. Hàm này sẽ thay đổi mảng ban đầu
// users.sort();
// console.log(users);

var numbers = [5, 1, 100, 2, 8];
numbers.sort(function (a, b) {
  //   console.log(a, b);
  //   return a - b;
  //Nếu số sau < số trước => Đổi chỗ
  if (a < b) {
    return -1;
  }
});
/*
a => Phần tử sau
b => Phần tử trước

So sánh a với b (So sánh phần tử sau với phần tử trước)

Nếu return về số âm => Đổi chỗ 

*/
// console.log(numbers);

var customers = [
  "Tạ Hoàng An",
  "Đặng Ngọc Sơn",
  "Trần Công Lực",
  "Vũ Thành Khang",
];
//Sắp xếp theo thứ tự tăng dần (Theo tên)

// var getName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };

// customers.sort(function (a, b) {
//   if (getName(a) < getName(b)) {
//     return -1;
//   }
// });

// console.log(customers);

//14. splice(start, number) => Xóa number phần từ vị trí start
// console.log(users);
// var results = users.splice(1, 2, "A", "B", "C");
// console.log(users);
// console.log(results);

//15. fill(value) => Thay đổi tất cả các phần tử thành 1 giá trị
// var results = users.fill("F8");
// console.log(users);
// console.log(results);

//Vòng lặp: Định nghĩa dưới dạng hàm

//16. forEach(callback)
/*
- Duyệt qua từng phần tử trong mảng
- Trả về value và index => Gửi vào callback
*/

// var handleLoop = function (value, index) {
//   console.log(value, index);
// };
// users.forEach(handleLoop);

//Ví dụ: Tính tổng:
// var numbers = [2, 8, 1, 9, 5];
// var total = 0;
// var result = numbers.forEach(function (value) {
//   total += value;
// });
// console.log(total);
// console.log(result);

//17. map(callback)
/*
- Duyệt qua các phần tử => Gửi dữ liệu về callback (Giống forEach)
- Trả về 1 mảng mới với số lượng phần tử bằng số lượng phần tử của mảng ban đầu
- Giá trị phần tử của mảng mới phụ thuộc vào giá trị trả về của callback (return của callback)
*/

// var result = users.map(function (value, index) {
//   console.log(value, index);
//   return index + " - " + value;
// });

// console.log(result);

//Bài tập:
var query = [
  ["name", "Front-End"],
  ["teacher", "Hoàng An"],
  ["education", "F8"],
];
// console.log(query);

//Chuyển thành chuỗi dưới => Dùng map()
//name=Front-End&teacher=Hoàng+An&education=F8

// var result = query
//   .map(function (item) {
//     //   console.log(item);
//     // var str = item.join("=");
//     // console.log(str);
//     // return str;
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(result);
/*
Ý tưởng: 
- Lặp qua từng phần tử bằng map => Mỗi phần tử là 1 mảng => Nối các phần tử của mảng con thành 1 chuỗi có dấu =

- return về chuỗi sau khi đã nối => Lưu vào 1 mảng mới
*/

//18. filter(callback)

/*
- Duyệt qua từng phần tử => Gửi value, index vào callback
- Trả về 1 mảng mới
- Giá trị các phần tử của mảng mới phụ thuộc vào phần tử được return true trong callback
*/

// var numbers = [1, 2, 3, 4, 5];
// var results = numbers.filter(function (value, index) {
//   console.log(value, index);
//   if (value >= 3) {
//     return true;
//   }
// });
// console.log(results);

//Bài tập:
var numbers = [1, 2, 6, 8, 5];
//Lọc ra các phần tử là số chẵn và lưu vào 1 mảng mới
var result = numbers
  .filter(function (number, index) {
    if (number % 2 === 0) {
      //Logic xóa
      return true;
    }
    //   return number % 2 === 0;
  })
  .filter(function (value) {
    //value = số chẵn
    var index = numbers.indexOf(value);
    if (index !== -1) {
      numbers.splice(1, 1);
    }
    return true;
  });

console.log(result);
console.log(numbers);

//Yêu cầu: Làm lại bài tập trên với 1 vòng filter

//Buổi sau: Tìm hiểu các phương thức lặp tiếp theo:
/*
- some()
- every()
- find()
- findLast()
- findIndex()
- findLastIndex()
- reduce()
- Tìm hiểu tổng quan về Object
*/
