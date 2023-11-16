//Regex
/*
Các cú pháp viết tắt: 
\d --> Đại diện cho số
\D --> Không phải là số
\w --> Đại diện: Chữ thường, hoa, số, _
\W --> Ngược lại của \w
\s --> Đại diện cho khoảng trắng
\S --> Không phải khoảng trắng
. --> Đại diện cho tất cả

Phủ định: ^ (ĐỂ trong cặp ngoặc [])

Hoặc: | (Nên bọc vào cặp ngoặc tròn)
*/

// const phone = "+84388865169";
// const pattern = /^(0|\+84)\d{9}$/;
// console.log(pattern.test(phone));

//Bài tập: Validate thẻ html (Thẻ đầy đủ)
//<tag attribute1="value1" attribute1="value2" attribute3>Text</tag>

// const str = "hoanganit!@#$%^";
// const pattern = /^[^A-Z0-9]+$/;
// console.log(pattern.test(str));

//Bài tập: Validate URL
const url =
  "https://frontend-nextjs.fullstack.edu.vn:8080/khoa-hoc/front-end-offline?id=1&query=abc#home";

const pattern =
  /^(http|https):\/\/[a-z0-9]+[a-z0-9-_.]*\.[a-z]{2,}(:\d{2,}|)(\/*|\/.*)$/;
console.log(pattern.test(url));
