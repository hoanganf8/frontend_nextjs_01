//Tạo shadow root -> Đi từ Host

// var content = document.querySelector(".content");
// var shadowRoot = content.attachShadow({
//   mode: "open",
// });

//Thêm content vào root
// console.log([shadowRoot]);
// shadowRoot.innerHTML = `
// <style>
// h1 {
//     color: red;
// }
// </style>
// <h1>F8 - Học lập trình để đi làm</h1>
// `;

Component.create("todo-item", function () {
  var doName = this.innerText;
  var shadow = this.attachShadow({
    mode: "closed",
  });
  shadow.innerHTML = `
  <style>
    .todo-item {
        border: 1px solid green;
        margin: 10px 0;
    }
  </style>
  <div class="todo-item">
    <input type="checkbox" />
    ${doName}
  </div>
  `;
  //   console.log(this.shadowRoot);
});
