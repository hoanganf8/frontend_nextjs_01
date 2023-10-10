//Xử lý tăng giảm counter

var counter = document.querySelector(".counter");

// var changeE = new Event("change");
var validEvent = new Event("valid");
var invalidEvent = new Event("invalid");

var h1 = counter.children[0];
var decrementBtn = counter.children[1];
var incrementBtn = counter.children[2];
// var btnLink = document.querySelector(".active");
incrementBtn.addEventListener("click", function () {
  h1.innerText++;
  //   h1.dispatchEvent(changeE);
  if (h1.innerText >= 10) {
    counter.dispatchEvent(validEvent);
  } else {
    counter.dispatchEvent(invalidEvent);
  }
});

decrementBtn.addEventListener("click", function () {
  h1.innerText--;
  //   h1.dispatchEvent(changeE);
  if (h1.innerText < 10) {
    counter.dispatchEvent(invalidEvent);
  } else {
    counter.dispatchEvent(validEvent);
  }
});
// h1.addEventListener("change", () => {
//   if (h1.innerText >= 10) {
//     btnLink.disabled = false;
//   } else {
//     btnLink.disabled = true;
//   }
// });
