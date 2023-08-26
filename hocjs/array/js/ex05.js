//Tham chiếu

var a = ["Hoàng An", "hoangan.web@gmail.com"];

// var b = a;

//Thao tác với array b => array a sẽ thay đổi

//Copy array sang địa chỉ mới
// var b = a.slice(0); //shallow copy
// var b = a.map(function (value) {
//   return value;
// });

var b = JSON.parse(JSON.stringify(a)); //Deep Copy

//Giải thích: Chuyển array => json => array

b[0] = "Hoàng An F8";

// console.log(a);
// console.log(b);

//Array-Like Object

//Array.from(arr) -> Chuyển array-like object thành array
function myFunc() {
  //arguments  => Array-Like Object
  console.log(arguments);
  console.log(Array.from(arguments));
  Array.from(arguments).forEach(function (a) {
    console.log(a);
  });
}

myFunc(5, 10, 15, 20);

//Một số tình huống trả về Array-Like Object:
// - arguments
// - HTMLCollection

// var a = [];
// a[a.length] = 1;
// a["name"] = "An";
