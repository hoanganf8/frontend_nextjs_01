//Prototype

/*
1. Prototype với thuộc tính
Object.prototype.tenthuoctinh = giatri

2. Prototype với phương thưccs
Object.prototype.tenphuongthuc = function() {

}

Lưu ý: prototype sẽ ảnh hưởng tới tất cả các kiểu dữ liệu (trừ null, undefined), nếu gán vào hàm tạo Object
*/
Object.prototype.getFirst = function () {
  var keys = Object.keys(this);
  var firstKey = keys[0];
  return this[firstKey];
};

Object.prototype.message = "F8";

var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

var customer = {
  email: "contact@fullstack.edu.vn",
  age: 31,
};

//Yêu cầu: Mỗi object => Viết 1 phương thức để lấy ra giá trị của thuộc tính đầu tiên
// console.log(user.getFirst());
// console.log(customer.getFirst());

// var fullname = "Hoàng An";
// var age = 31;
// var users = [];
// var a = true;
// var today = new Date();
// console.log(fullname.message);
// console.log(age.message);
// console.log(users.message);
// console.log(a.message);
// console.log(today.message);
// console.log(String.prototype);

String.prototype.getLast = function () {
  // console.log(this);
  return this.slice(this.lastIndexOf(" "));
};
// console.log(String.prototype);

var fullname = "Hoàng An";
console.log(fullname.getLast()); //An
//Bài tập: Viết phương thức prototype có tên getLast trong hàm tạo String
//=> yêu cầu: Trả về từ cuối cùng

//Bài tập: Viết lại vòng lặp map (Đặt tên là map2)
/*
- Không được dùng các phương thức có sẵn: forEach, map, push,...
- Chỉ được dùng: các vòng lặp cơ sở, câu lệnh rẽ nhánh,...
*/

Array.prototype.map2 = function (callback) {
  if (typeof callback !== "function") {
    return;
  }

  var newArr = [];

  if (this.length) {
    for (var i = 0; i < this.length; i++) {
      var value = this[i];
      var result = callback(value, i);
      newArr[newArr.length] = result;
    }
  }

  return newArr;
};

var users = ["An", "Tuấn", "Sơn"];

var newArr = users.map2(function (user, index) {
  // console.log(user, index);
  return `F8 - ${index} - ${user}`;
});

console.log(newArr);
