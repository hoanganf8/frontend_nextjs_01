//Xử lý enable hoặc disable button action
/*
- Enable khi counter >= 10
- Disable khi counter < 10
*/

var actionBtn = document.querySelector(".action button");

counter.addEventListener("valid", function () {
  actionBtn.disabled = false;
});

counter.addEventListener("invalid", function () {
  actionBtn.disabled = true;
});
