//Copy Object
// var a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// var b = a;
//Copy Object
// var b = Object.assign({}, a); //Shallow Copy
// var b = { ...a }; //Spread (ES6) => Shallow Copy
// var b = JSON.parse(JSON.stringify(a)); //Deep Copy
// b.name = "Hoàng An F8";
// console.log(a);

//Optional Chaining (?.)

//1. Optional Chaining với thuộc tính
//Thêm dấu ? trước dấu . gọi tên thuộc tính
//Nếu không có thuộc tính => Trả về undefined
// var a = undefined;
// console.log(a?.name);

// var a = 12;
// console.log(`Độ dài của chuỗi là: ${a?.length ?? "Không xác định"}`);

//2. Optional Chaining với phương thức
var a;
console.log(a?.getName?.());

/*
apply()
bind()
call()

ES6 Object: Spread, Destructuring, Object Literal Enhancement
*/
