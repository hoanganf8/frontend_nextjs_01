//Spread: Trải các phần tử trong object, array ra ngoài

// const job = {
//   jobName: "Giảng viên",
//   company: "F8",
// };

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   ...job,
// };

// console.log(user);

// const oldArr = ["Hoàng An", "hoangan.web@gmail.com"];
// const newArr = ["Giảng viên", "F8", ...oldArr];
// console.log(newArr);

const items = [1, 2, 3];
const items2 = [...items];

const data = {
  status: 1,
  name: "Hoàng An",
};

//Tạo 1 mảng mới có cấu trúc giống mảng cũ nhưng thay đổi thuộc tính name thành giá trị khác
/*
2 bước: 
- B1: Clone object data
- B2: Thay đổi thuộc tính name -> Giá trị mới
*/
const newData = { ...data, name: "Hoàng An F8" };

// console.log(newData);
// console.log(data);

const products = ["Product 1", "Product 2", "Product 3"];
//Tạo ra 1 mảng mới có dữ liệu và cấu trúc giống mảng cũ. Thêm phần tử mới vào mảng

const newProducts = [...products, "Product 4"];
// console.log(newProducts);
// console.log(products);

const sum = (a, b) => a + b;
const values = [10, 20];
console.log(sum(...values));

//Yêu cầu: Tạo 1 mảng chứa các phần tử từ 0 đến length-1
const length = 10;
console.log(Array(length).keys());
const range = [...Array(length).keys()]; //Sao chép thành 1 mảng mới

console.log(range);

// Array.from(Array(length).keys()).forEach((value) => {
//   console.log(value);
// });

const range2 = Array.from(Array(length).keys()).map((_, index) => index + 1);
console.log(range2);
