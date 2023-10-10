//Trigger Event: Tự kích hoạt 1 sự kiện mà không cần tác động từ người dùng

/*
Có 2 cách để Trigger Event

1. Dùng các hàm có sẵn của Element: click(), focus(), blur(), submit()... => Chỉ áp dụng với 1 số sự kiện phổ biến

2. Dùng dispatchEvent() => Áp dụng với tất cả sự kiện
*/
var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log("Hello F8");
});

// setInterval(function () {
//   btn.click();
// }, 1000);

var inputEl = document.querySelector(".name");
inputEl.focus(); //Trigger Event Focus

var quantityInput = document.querySelector(".quantity input");
var minusBtn = quantityInput.previousElementSibling;
var plusBtn = quantityInput.nextElementSibling;

var amountEl = document.querySelector(".amount");
var price = 12000;

//Trigger Event
// var changeEvent = new Event("change");

HTMLInputElement.prototype.change = function () {
  var changeEvent = new Event("change");
  this.dispatchEvent(changeEvent);
};

quantityInput.addEventListener("change", function () {
  var value = this.value;
  amountEl.innerText = (value * price).toLocaleString();
});

minusBtn.addEventListener("click", function () {
  quantityInput.value--;
  if (quantityInput.value < 1) {
    quantityInput.value = 1;
  }
  // quantityInput.dispatchEvent(changeEvent);
  quantityInput.change();
});

plusBtn.addEventListener("click", function () {
  quantityInput.value++;
  // quantityInput.dispatchEvent(changeEvent);
  quantityInput.change();
});
