//Cắt chuỗi
// const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 0388875179 the 1500s, when an unknown printer took a galley of type and scrambled it 0123456789 to make a type specimen book. It has survived not only five centuries, but also the leap into electronic`;

// const pattern = /(0|\+84)\d{9}/g;

// const phone = content.match(pattern);
// console.log(phone);

//Capturing Group
// --> Kỹ thuật chụp 1 phần của biểu thức chính quy và trả về kết quả
// --> Chụp bằng ngoặc tròn

//Non-Capturing Group --> Loại bỏ kết quả trong cặp ngoặc tròn
// Thêm ?:

// const url =
//   "https://frontend-nextjs.fullstack.edu.vn:8080/khoa-hoc/front-end-offline?id=1&query=abc#home";

// const pattern =
//   /^(?:http|https):\/\/[a-z0-9]+[a-z0-9-_.]*\.([a-z]{2,})(?::\d{2,}|)(?:\/*|\/.*)$/;

// const result = url.match(pattern);
// console.log(result);

//Greedy, Lazy
// const html = `<img width="200" src="https://fullstack.edu.vn/images/img01.jpg" alt="Hello F8"/>`;
// const pattern = /<img.*src="(.+?)"/;
// const result = html.match(pattern);
// console.log(result);

//Thay thế
let content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 0388875179 the 1500s, when an unknown printer took a galley of type and scrambled it +84123456789 to make a type specimen book. It has survived not only five centuries, but also the leap into electronic`;
const pattern = /((0|\+84)(\d{9}))/g;
content = content.replace(
  pattern,
  `<a href="tel:$1" target="_blank" title="Gọi tới số: $1" data-start="$2" data-end="$3">$1</a>`,
);
document.body.innerHTML = content;

//Đối sánh chuỗi dựa vào Capturing Group
/*
Capturing Group 1 --> $1
Capturing Group 2 --> $2
Capturing Group 3 --> $3
Capturing Group 4 --> $4
*/
