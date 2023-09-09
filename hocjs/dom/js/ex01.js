//DOM = Document Object Model
// => Mô hình hóa đối tượng tài liệu HTML

console.log([document]);

//Node => 1 object thể hiện 1 element (thẻ html)
/*
- Element node
+ Attribute
+ Text => Nội dung của thẻ html

- Text node

- comment node

Dựa vào Node để thực hiện các thao tác liên quan đến thẻ html

- Thay đổi các thẻ html 
- Thay đổi thuộc tính các thẻ html
- Thay đổi css (css inline)
- Xóa thẻ html
- Tạo mới các thẻ html và thuộc tính
- Gán sự kiện cho các thẻ html
- Tạo ra các sự kiện mới

Các loại DOM

- DOM Element: Truy xuất vào các thẻ html để trả về Node
- DOM HTML: Thay đổi nội dung, thuộc tính của thẻ html
- DOM CSS: Thay đổi CSS Inline (Làm việc dưới dạng object)
- DOM Event: Gán sự kiện cho các thẻ HTML
- DOM Event Listener: Lắng nghe các sự kiện
- DOM Navigation: Truy xuất tới các thẻ html thông qua phân cấp cha con, ngang hành
- DOM Node / NodeList: Thao tác với các thẻ html thông qua Objects (Tự tạo ra các thẻ html thông qua object)
*/

//DOM Element: Truy xuất vào các thẻ html

//1. Truy xuất thông qua id => Trả về 1 element đầu tiên
// var title = document.getElementById("title");
// console.log(title);

//2. Truy xuất vào thông qua class => Trả về 1 danh sách (Array-Like Object)
// => Cần phải lặp qua từng phần tử để xác định phần tử cần làm việc
// var titleList = document.getElementsByClassName("title");
// console.log(titleList);

//3. Truy xuất thông qua TagName => Trả về 1 danh sách
// var titleList = document.getElementsByTagName("h1");
// console.log(titleList);

//4. Truy xuất thông qua CSS Selector (Chỉ lấy element đầu tiên)
//Áp dụng tất cả kiến thức liên quan đến CSS Selector
// var title = document.querySelector("h1.title");
// console.log(title);

//5. Truy xuất thông qua CSS Selector (Lấy tất cả)
// var titleList = document.querySelectorAll(".title");
// console.log(titleList);

// var content = document.querySelector(".content");
// console.log(content.childNodes);
// console.log(content.children);

//6. Truy cập trực tiếp vào body, head
// console.log(document.body);
// console.log(document.head);

//7. Truy cập vào form thông qua thuộc tính name

// console.log(document.form_login.email);

//Buổi sau:
/*
1. DOM HTML
- innerHTML
- innerText
- textContent
- outerHTML
- outerText

- Làm việc với thuộc tính
+ Các thuộc tính có sẵn
+ Data Attribute: getAttribute, setAttribute, dataset
*/
