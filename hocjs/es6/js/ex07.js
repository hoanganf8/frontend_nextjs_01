//Static: Method, Property

class User {
  constructor() {
    //Thuộc tính non-static
    this.username = "Hoàng An";
  }

  //Thuộc tính static
  static email = "hoangan.web@gmail.com";

  //Phương thức static
  static getEmail() {
    return this.email;
  }

  //Phương thức non-static
  getName() {
    return this.username;
  }

  static getUsername() {
    //this sẽ là class User
    //Muốn truy cập đến phương thức, thuộc tính non-static -> Chuyển thành object
    // console.log(this);
    console.log(new this().username);
  }

  showEmail() {
    //this sẽ là object của class User
    //Muốn truy cập đến phương thức, thuộc tính static -> Chuyển về class
    console.log(this.constructor.email);
  }
}
// User.getUsername();
// const user = new User();
// user.showEmail();
// User.email = "contact@fullstack.edu.vn";
// console.log(User.email);

// const user = new User();
// user.username = "Hoàng An F8";
// console.log(user);

// const user2 = new User();
// console.log(user2);

// console.log(User.getEmail());

class Person {
  static self = null;
  constructor() {
    this.constructor.self = this;
    console.log("Constructor");
    this.name = "Hoàng An";
    this.email = "hoangan.web@gmail.com";
    this.age = 30;
  }

  static getEmail() {
    if (!this.self) {
      return new this().email;
    }

    return this.self.email;
  }

  static getName() {
    if (!this.self) {
      return new this().name;
    }

    return this.self.name;
  }
}

const person = new Person();
console.log(person.age);
console.log(Person.getName());
console.log(Person.getEmail());
