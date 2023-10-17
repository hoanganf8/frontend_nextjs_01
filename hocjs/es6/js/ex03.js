//Destructuring: Phá vỡ cấu trúc của object, array để truy cập vào các phần tử trong object, array và gán vào các biến riêng biệt

// const user = {
//   username: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
//   address: "Hà Nội",
//   "shipping-address": "Hồ Chí Minh",
//   address2: "Đà Nẵng",
// };

// const key = "address2";

// const {
//   username,
//   email: useremail,
//   age = 30,
//   "shipping-address": shippingAddress, // -> Bắt buộc đổi tên
//   [key]: address, //computed property
// } = user;

// console.log(username, useremail);
// console.log(age);
// console.log(shippingAddress);
// console.log(address);

// const { username, email, ...rest } = user;
// console.log(username, email);
// console.log(rest);

// const user = ["Hoàng An", "hoangan.web@gmail.com", 31, "Hà Nội"];
// const [username, email, age = 29] = user;
// console.log(username, email, age);

// const [username, email, , address] = user;
// console.log(username, email, address);

// const [username, ...rest] = user;
// console.log(rest);

//Hoán vị 2 biến
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

//Destructuring trong Destructuring
const profile = {
  displayName: "Hoàng An",
  emails: [
    {
      value: "hoangan.web@gmail.com",
    },
  ],
};

const {
  displayName,
  emails: [{ value: email }],
} = profile;
console.log(displayName, email);

//Destructuring áp dụng khi định nghĩa hàm

const users = [
  {
    id: 1,
    name: "User 1",
  },
  {
    id: 2,
    name: "User 2",
  },
  {
    id: 3,
    name: "User 3",
  },
];

const getUser = (userId) => users.find(({ id }) => id === userId);
console.log(getUser(1));

const getMessage = ({ msg, type = "success" }) => {
  console.log(msg, type);
};
getMessage({ msg: "Hello F8" });

/*
Spread
Classes
Module: import, export
Bất đồng bộ: callback, promise, async await
Try catch
*/
