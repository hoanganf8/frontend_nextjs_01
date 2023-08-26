// var user = ["Hoàng an", "hoangan.web@gmail.com", 31, "Hà Nội"];

// console.log(user);

//Object: Chia theo cặp key value (key thường sẽ là string, tường minh hơn)

/*
1. Object Literal (Đối tượng nguyên bản)
2. Function Constructor (Hàm tạo)
*/

//Object Literal (Hàm tạo của object là: Object)
// console.log([Object]);

//Khai báo object
var user = {
  //key: value
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  getCourse: function () {
    return "Front-End";
  },
};
/*
- key: Thường là chuỗi, không chứa gạch ngang, đặt tên tường minh
value: Bất kỳ kiểu dữ liệu nào: null, undefined, boolean, string, number, array, object, function

Lưu ý: 
- Nếu key có giá trị là các kiểu dữ liệu khác function => Gọi là thuộc tính
- Nếu key có giá trị là function => Gọi là phương thức
*/

//Truy cập vào key của object
// console.log(user.name);
// console.log(user.email);
// console.log(user.getCourse());
// console.log(user["name"]);

//Thêm key mới cho object
user.age = 31;
user["address"] = "Hà Nội";

//Thay đổi giá trị key đã tồn tại
user.email = "contact@fullstack.edu.vn";

//Xóa key
delete user.age;

console.log(user);

//Lấy danh sách key (Duyệt object)
// for (var key in user) {
//   console.log(key, user[key]);
// }
// console.log(Object.keys(user));
// Object.keys(user).forEach(function (key) {
//   console.log(key, user[key]);
// });

//Lấy danh sách key và value
console.log(Object.entries(user));

//Lưu ý: Object và Array thường đi với nhau
/*
Object lồng array
Array lồng object
Object lồng object
Object đứng độc lập
*/
