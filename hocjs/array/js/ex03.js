//some(callback)
/*
- Vòng lặp kiểm tra: Trả về true/false
- Trả về true nếu có ít nhất 1 lần lặp của callback trả về true
*/

var numbers = [1, 3, 5, 2, 9];
//Kiểm tra mảng trên có số chẵn hay không?
var check = numbers.some(function (number) {
  return number % 2 === 0;
});
console.log(check);

//every(callback)
/* 
- Vòng lặp miểm tra: Trả về true/false
- Chỉ trả về true nếu tất cả các lần lặp trả về true
- Trả về false khi không có lần lặp nào trả về true
*/

var numbers = [1, 3, 5, 11, 9];
//Kiểm tra mảng trên có phải tất cả là số lẻ không?
var check = numbers.every(function (number) {
  return number % 2 !== 0;
});
console.log(check);

//find()
/*
- Cách hoạt động giống filter
- Trả về phần đầu tiên tìm được
*/

//findLast()
/*
- Cách hoạt động giống filter
- Trả về phần tử cuối cùng tìm được
*/

//findIndex()
/*
Trả về index đầu tiên tìm được
*/

//findLastIndex()
//Trả về index cuối cùng tìm được

var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
var result = numbers.findLastIndex(function (number) {
  return number > 3;
});
console.log(result);

//Bài tập:
var users = [
  ["Hoàng An", "hoangan.web@gmail.com"],
  ["Nguyễn Dương", "duong@gmail.com"],
  ["Anh Quân", "quan@gmail.com"],
];

var email = "duong@gmail.com";

//Xóa user có email như trên
var index = users.findIndex(function (user) {
  return user[1] === email;
});
if (index !== -1) {
  users.splice(index, 1);
}

console.log(users);

//Bài tập: Lọc trùng user có cùng email

var users = [
  ["Hoàng An", "hoangan.web@gmail.com"],
  ["Nguyễn Dương", "duong@gmail.com"],
  ["Anh Quân", "quan@gmail.com"],
  ["Nguyễn Dương", "duong@gmail.com"],
];
// console.log(users);
var newArr = []; //Lưu kết quả mảng không bị trùng
users.forEach(function (user) {
  var index = newArr.findIndex(function (item) {
    return user[1] === item[1];
  });

  if (index === -1) {
    newArr.push(user);
  }
});

// console.log(newArr);

//Bài tập:
var users = [
  ["Hoàng An", "hoangan.web@gmail.com", 20],
  ["Nguyễn Dương", "duong@gmail.com", 21],
  ["Anh Quân", "quan@gmail.com", 23],
];
var email = "duong@gmail.com";

//Tăng user nào có email như trên thêm 2 tuổi

//Cách 1: Dùng index
// var index = users.findIndex(function (user) {
//   return user[1] === email;
// });
// if (index !== -1) {
//   users[index][2] += 2;
// }
// console.log(users);

//Cách 2: Dùng map
var newArr = users.map(function (user) {
  if (user[1] === email) {
    user[2] += 2;
  }

  return user;
});
console.log(newArr);
