var img = document.querySelector("img");

//Lấy giá trị từng thuộc tính
//Cú pháp: element.tenthuoctinh

// console.log(img.src);
// console.log(img.alt);
// console.log(img.title);
// console.log(img.width);
// console.log(img.height);
// console.log(img.href);

//Thay đổi giá trị thuộc tính
img.src =
  "https://fastly.picsum.photos/id/855/200/200.jpg?hmac=l4U_O6zoVhjz9BqOito1u4k30FNJz3hLVYjvrdE59MU";
img.width = 100;
img.style = `border-radius: 50%;`;

//Xóa thuộc tính
img.removeAttribute("alt");

console.log(img.className); //Lấy giá trị của thuộc tính class

console.log([img]);

/*
Khi làm việc với js => Nhiều tình huống cần phải tạo ra những thuộc tính riêng (Không có sẵn trong thẻ html)
-> Đồng nghĩa: Không được w3c cho phép

W3C cho phép tạo các thuộc tính bắt đầu bằng tiền tố data- 
-> Data Attribute

Quy tắc đặt tên của Data Attribute
data-word1-word2

Ví dụ: data-count, data-index-number, data-animation-duration,...
*/

var title = document.querySelector(".title");
// console.log(title.getAttribute("data-count"));
// console.log(title.getAttribute("class"));

// console.log(title.dataset);
// console.log(title.dataset.count); //data-count
// console.log(title.dataset.indexNumber); //data-index-number

title.setAttribute("data-count", 10);
title.dataset.indexNumber = "ahihi";
title.dataset.animationDuration = "1s";

delete title.dataset.animationDuration; //Xóa được

delete title.id; //Không xóa được

delete title.dataset.count; //Xóa được

title.removeAttribute("data-index-number");

//Làm việc với class
// console.log(title.className);
console.log(title.classList);

//1. Thêm class mới
title.classList.add("title-2", "title-3");

//2. Xóa class
title.classList.remove("sub-title", "title-3");

//3. Kiểm tra class tồn tại
console.log(title.classList.contains("title-2"));

//4. Toggle class
title.classList.toggle("show");
title.classList.toggle("show");

//Xóa element: tenelement.remove()

title.remove();
