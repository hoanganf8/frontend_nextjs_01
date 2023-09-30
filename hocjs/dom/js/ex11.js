//DOM Nodes
/*
- Element
- Comment
- Text
- Attribute

Để làm việc với DOM Nodes -> Cần phải có 1 html trên trang web để chứa nó
*/

// var root = document.querySelector("#root");
// root.innerHTML = `
// <h1>F8 - Học lập trình</h1>
// <button>Click me</button>
// `;

// var btn = root.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log("Hello Clicked");
// });

var root = document.querySelector("#root");

//Tạo Element
var h1 = document.createElement("h1");
h1.innerText = `Học lập trình để đi làm`;
h1.id = "title";

var button = document.createElement("button");
button.innerText = "Click me";

//Show Node lên UI
root.append(h1); //Thêm xuống dưới
root.prepend(button); //Thêm lên trên
//document.body.prepend(button);

/*
Bài tập: Tạo cặp thẻ ul li như sau
<ul class="menu" data-type="navigation">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>

Sau đó show lên UI (id=root và nằm dưới cùng)
*/

var ul = document.createElement("ul");
ul.classList.add("menu");
ul.dataset.type = "navigation";

for (var index = 1; index <= 5; index++) {
  var li = document.createElement("li");
  li.innerText = `Item ${index}`;
  ul.append(li);
}

root.append(ul);

var plusBtn = document.createElement("button");
plusBtn.innerText = `+`;
root.append(plusBtn);

//Yêu cầu: Click vào nút plus -> Thêm item mới của ul li
plusBtn.addEventListener("click", function () {
  var li = document.createElement("li");
  li.innerText = `Item ${index++}`;
  ul.append(li);
});

//Thêm 1 Node vào trước 1 Node con khác
var h2 = document.createElement("h2");
h2.innerText = `Học Javascript không khó`;
root.insertBefore(h2, h1);

//Thay thế 1 node con bằng 1 node khác
var h3 = document.createElement("h3");
h3.innerText = `Học lập trình để có lương ngàn đô`;
root.replaceChild(h3, h1);
root.append(h1);

//Xóa 1 node con
var result = root.removeChild(button);
console.log(result);
// var result = button.remove();
// console.log(result);
