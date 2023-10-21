//Enhanced Object Literal

const username = "hoangan.web";
const email = "contact@fullstack.edu.vn";
const age = undefined;

//Tạo 1 object từ 2 biến trên với key giống tên biến
function getUsername() {
  return this.username;
}
const user = {
  username,
  email,
  age,
  getUsername,
  getEmail() {
    return this.email;
  },
};

console.log(user);

const getOptions = ({ rootEl, timeout, animation }) => {
  console.log(rootEl, timeout, animation);
};

const rootEl = "#root";
const timeout = 10000;
const animation = true;
getOptions({ rootEl, timeout, animation });

//named arguments -> Truyền các đối số theo tên
/*
Ví dụ: 1 hàm có 5 tham số => 3 tham số đầu tiên có giá trị mặc định
Tình huống: Chỉ muốn thay đổi tham số thứ 4
*/

// const hellWorld = (a = 1, b = 2, c = 3, d, e) => {
//   console.log(`a = ${a}`);
//   console.log(`b = ${b}`);
//   console.log(`c = ${c}`);
//   console.log(`d = ${d}`);
//   console.log(`e = ${e}`);
// };

// hellWorld(1, 2, 3, 10, 30);

const hellWorld = ({ a = 1, b = 2, c = 3, d, e }) => {
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(`c = ${c}`);
  console.log(`d = ${d}`);
  console.log(`e = ${e}`);
};

hellWorld({ d: 10, e: 30 });
