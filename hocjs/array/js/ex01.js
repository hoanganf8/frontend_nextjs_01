//Khai báo mảng
var users = ["An", "Dương", "Vương"];

//Hàm tạo của mảng: Array
// console.log(Array.prototype);

// var users = new Array("An", "Dương", "Vương");
// console.log(users);

// console.log(typeof users);

//Kiểm tra 1 biến có phải là mảng hay không?
if (Array.isArray(users)) {
  console.log("Đây là mảng");
} else {
  console.log("Đây không phải mảng");
}

//Thêm phần tử vào cuối mảng
//tenbienmang[index] = giá trị;
users[users.length] = "Đạt";
users[users.length] = "Tùng";
users[users.length] = "Quý";
users[users.length] = "Tâm";

//Sửa phần tử trong mảng
users[1] = "Nhật Dương";

//Truy cập phần tử trong mảng
// console.log(users[1]);
// console.log(users[0]);

//Duyệt mảng (Đọc mảng)
// for (var index = 0; index < users.length; index++) {
//   console.log(users[index], index);
// }

// for (var index in users) {
//   console.log(users[index], index);
// }

// for (var value of users) {
//   console.log(value);
// }

//Xóa phần tử trong mảng
// var indexDel = 1;
// var newArr = [];
// for (var index in users) {
//   if (+indexDel === +index) {
//     continue;
//   }
//   newArr[newArr.length] = users[index];
// }

// console.log(users);
// console.log(newArr);

//Bài tập:

// var value = "Thắng";
// //Thêm value vào đầu mảng users (Không dùng phương thức có sẵn), es6 trở lên
// var newArr = [value];
// for (var index in users) {
//   newArr[newArr.length] = users[index];
// }
// console.log(newArr);

//Bài tập
console.log(users);
var customers = ["A", "B", "C"];
console.log(customers);
//Nối mảng customers và mảng users thành 1 mảng mới. Không dùng hàm có sẵn, es6 trở lên

var newArr = [];
// for (var user of users) {
//   newArr[newArr.length] = user;
// }

// for (var customer of customers) {
//   newArr[newArr.length] = customer;
// }
var newArr = [];
var customers = ["A", "B", "C", "D"];
for (var i = 0; i < customers.length + users.length; i++) {
  if (i < users.length) {
    newArr[newArr.length] = users[i];
  } else {
    var indexCustomer = i - users.length;

    newArr[newArr.length] = customers[indexCustomer];
  }

  //   if (i < users.length) {
  //     newArr[newArr.length] = users[i];
  //     continue;
  //   }
  //   newArr[newArr.length] = customers[i - users.length];
}
console.log(newArr);

/*
Mảng 1: 5 phần tử: 0 1 2 3 4 => length = 5
Mảng 2: 3 phần tử: 0 1 2

Tính tổng số phần tử của cả 2 mảng: 8

Chạy biến i từ 0 đến 7

Lấy từng phần tử của mảng 2 => Tính ra 

Công thức: i - độ dài mảng 1
*/
