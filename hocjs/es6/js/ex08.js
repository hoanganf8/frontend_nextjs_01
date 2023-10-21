//Setter, Getter
class User {
  #email = "hoangan.web@gmail.com"; //private
  constructor() {
    this.data = ["User 1", "User 2", "User 3"];
  }
  //getter
  get latest() {
    return this.data[this.data.length - 1];
  }
  //getter
  get first() {
    return this.data[0];
  }
  get email() {
    return this.#email;
  }
  //setter
  set email(value) {
    this.#email = value;
  }
}

const user = new User();
console.log(user.latest);
console.log(user.first);
user.email = "contact@fullstack.edu.vn";
console.log(user.email);

Array.prototype.__defineGetter__("length2", function () {
  console.log("Hello F8");
});
const users = ["User 1", "User 2", "User 3"];
users.length2;
