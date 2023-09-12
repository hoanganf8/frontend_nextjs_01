//DOM HTML
var content = document.querySelector(".content");

//Lấy nội dung thẻ html
// console.log(content.innerHTML);

// console.log(content.innerText);

// console.log(content.outerHTML);

// console.log(content.outerText);

// console.log(content.textContent);

//Cập nhật nội dung thẻ html
// content.innerHTML = `<h2>Hoàng An F8</h2>`;
// content.innerText = `<h2>Hoàng An F8</h2>`;
// content.outerHTML = `<h2>Hoàng An F8</h2>`;
// content.outerText = `<h2>Hoàng An F8</h2>`;
// content.textContent = `<h2>Hoàng An F8</h2>`;

var counter = document.querySelector(".counter");
var numberEl = counter.querySelector("h2 span");
var incrementBtn = counter.querySelector(".increment-btn");

var decrementBtn = counter.querySelector(".decrement-btn");

incrementBtn.addEventListener("click", function () {
  numberEl.innerText++;
});

decrementBtn.addEventListener("click", function () {
  numberEl.innerText--;
});
