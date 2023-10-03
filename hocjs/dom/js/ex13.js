var content = document.querySelector(".content");
// console.log(content);

//1. children -> Chỉ chọn element
// console.log(content.children);

//2. childNodes -> Trả về tất cả các Node con
// console.log(content.childNodes);

//3. firstChild -> Trả về Node con đầu tiên

//4. firstElementChild -> Trả về Element đầu tiên

//5. lastChild -> Trả về Node con cuối cùng

//6. lastElementChild -> Trả về element con cuối cùng

//7. nextElementSibling -> Chọn đến element kế tiếp

//8. nextSibling -> Chọn tới Node kế tiếp

//9. previousElementSibling -> Chọn element phía trước

//10. previousSibling -> Chọn node phía trước

// var h1 = content.firstElementChild;
// console.log(h1.previousElementSibling);

var h2 = content.lastElementChild;
console.log(h2.previousSibling.previousSibling);

console.log(lyric);
