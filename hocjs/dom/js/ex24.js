//Template là 1 thẻ html đặc biệt dùng để tạo 1 mẫu giao diện -> Thường được áp dụng cho các web component

var btn = document.querySelector(".btn");
var todo = document.querySelector(".todo");

var count = 0;
var todoItemTemplate = `<h3>Công việc: {count}</h3>`;

var template = document.createElement("template");
template.innerHTML = todoItemTemplate;

var shadow = todo.attachShadow({
  mode: "closed",
});

var todoItemEl = btn.addEventListener("click", function () {
  //   todo.innerHTML += `<h3>Công việc: ${++count}</h3>`;
  //Chuyển thành shadow -> Có host
  //Tạo 1 element -> Sau đó attachShadow
  //-> Sử dụng template -> Tạo ra shadow
  var todoItem = template.content.cloneNode(true);

  todoItem.children[0].innerText = todoItem.children[0].innerText.replaceAll(
    "{count}",
    ++count,
  );

  var style = document.createElement("style");
  style.textContent = `
    h3 {
        color: green;
    }
  `;
  todoItem.prepend(style);

  shadow.append(todoItem);
});
