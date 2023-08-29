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
console.log(calc.add());
console.log(calc.sub());
console.log(calc.mul());
console.log(calc.div());
