var header = document.querySelector("header");
var h1 = header.querySelector("h1");
var nav = header.querySelector("nav");

var h1Height = h1.clientHeight;

window.addEventListener("scroll", function () {
  var y = window.scrollY;
  if (y >= h1Height) {
    nav.classList.add("fixed");
    document.body.style.paddingTop = `${nav.clientHeight}px`;
  } else {
    nav.classList.remove("fixed");
    document.body.style.paddingTop = "";
  }
});

var navItems = nav.children;
Array.from(navItems).forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    //Lấy nội dung của thuộc tính href
    var hash = this.getAttribute("href");
    //hash lúc này chính là selector của các thẻ section
    var section = document.querySelector(hash);

    //Lấy tọa độ tại thẻ section tương ứng so với Top
    var offsetTop = section.offsetTop - nav.clientHeight - 15;

    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
