//Function Constructor = Hàm tạo

//Sử dụng nguyên tắc đặt tên PascalCase

//Ví dụ: Person, CustomerService,...

function Person(name, email) {
  //Sử dụng từ khóa this để định nghĩa ra các thuộc tính và phương thức
  this.name = name;
  this.email = email;
  this.getName = function () {
    return this.name;
  };
}

Person.prototype.gender = "male";

//Tạo đối tượng
// var person = new Person("Hoàng An", "hoangan.web@gmail.com");

// console.log(person.gender);

// var boy = new Person("Dương", "duong@gmail.com");
// console.log(boy.gender);

//Bài tập 1: Thêm thuộc tính gender để thể hiện giới tính (Không sửa hàm tạo Person, đảm bảo các đối tượng tạo từ Person đều có)

//Bài tập 2:
/*
- Tạo 1 hàm tạo có tên: Calculator sẽ nhận vào 2 tham số
- Viết các phương thức sau: 
+ add()
+ sub()
+ mul()
+ div()
*/

function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.add = function () {
    return +a + +b;
  };

  this.sub = function () {
    return a - b;
  };

  this.mul = function () {
    return a * b;
  };

  if (b !== 0) {
    this.div = function () {
      return a / b;
    };
  }
}

var calc = new Calculator(5, 1);
// console.log(calc.add());
// console.log(calc.sub());
// console.log(calc.mul());
// console.log(calc.div());

var getMessage = function () {
  console.log("Hello F8");
};
// window.getMessage();

// Calculator.getMessage2 = function () {
//   console.log("Hello F8");
// };
// Calculator.getMessage2();

Calculator.getMessage = getMessage;

//Cú pháp:
//TenHamTao.tenHam = function() {}
//TenHamTao.tenbien = giatri

//Ví dụ: Array.isArray(), Number.isInteger()

//Kiểm tra biến được tạo từ hàm tạo nào
var a = []; //Array
var b = "Hoàng An"; //String
var c = new Calculator(5, 10); //Calculator
var d = false;
// console.log(a.constructor.name);
// console.log(b.constructor.name);
// console.log(c.constructor.name);
// console.log(d.constructor.name);
//=> Không áp dụng cho null và undefined

var User = function () {
  this.name = "Hoàng An";
  this.email = "hoangan.web@gmail.com";
  // console.log("Hoàng An F8");
  return "Hello F8";
};

var user = new User();
// console.log(user);
// console.log(user.name);
// console.log(User());

//Nối 2 object
var a = {
  name: "An",
  age: 31,
  title: "Dev",
};

var b = {
  email: "hoangan.web@gmail.com",
  title: "Giảng viên",
};

// Object.keys(b).forEach(function (key) {
//   a[key] = b[key];
// });
// console.log(a);
// console.log(b);

//Object.assign(target, source)
// => Nối object source vào target và trả về object mới

// var result = Object.assign(a, b);
// console.log(result);
// console.log(a);
// console.log(b);

//Bài tập: Dùng hàm Object.assign() để nối object a và b lại với nhau nhưng không làm thay đổi object a, b ban đầu

// var aClone = Object.assign({}, a);

// var result = Object.assign(aClone, b);
// console.log(result);
// console.log(a, b);

//Bài tập: Chuyển object sau thành dạng query string
var query = {
  name: "Hoàng An F8",
  status: 1,
  category: 1,
  keyword: "Fullstack Offline",
};

//Output: name=Hoàng+An+F8&status=1&category=1&keyword=Fullstack+Offline
//Lưu ý: Không sử dụng hàm URLSearchParams và các thư viện liên quan
var result = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
// console.log(result);

//Bài tập:
var url = `https://fullstack.edu.vn/search?_type=course&q=Javascript+cơ+bản&status=`;
console.log(url);

//Lấy query string của url trên => Chuyển về dạng object

/*
Output: 
{
  _type: "course",
  q: "Javascript cơ bản"
}

Gợi ý: 
1. Lấy chuỗi sau dấu ?: Dùng slice string hoặc split
2. Tách dấu & thành mảng
3. Tách dấu = thành mảng
4. Gộp bước 2, 3 thành mảng 2 chiều (Dùng map)
5. Dùng phương thức: Object.fromEntries() để chuyển
*/
var queryString = url.split("?").slice(-1).join();

var result = {};
queryString
  .split("&")
  .map(function (item) {
    return item.split("=");
  })
  .forEach(function (item) {
    if (item[1].length > 0) {
      result[item[0]] = item[1].replaceAll("+", " ");
    }
  });
// query = Object.fromEntries(query);
// console.log(query);
console.log(result);
