//Web Components -> Chia trang web thành các thành phần khác nhau -> Dễ bảo trì, nâng cấp, tái sử dụng

//Khi làm việc với Component => Quan tâm tới Vòng đời Component => Lifecycle Callback

// var HelloWorld = function () {
//   //Kế thừa từ HTMLElement
//   return Reflect.construct(HTMLElement, [], HelloWorld);
// };

// //Tạo Prototype cho HelloWorld từ Prototype của HTMLElement -> Có các đặc điểm của 1 element
// HelloWorld.prototype = Object.create(HTMLElement.prototype);

// HelloWorld.prototype.connectedCallback = function () {
//   //Nội dung component
//   this.innerText = `Hello F8`;
// };

// customElements.define("hello-world", HelloWorld);

Component.create("hello-world", function () {
  var div = document.createElement("div");
  div.classList.add("box");
  var h2 = document.createElement("h2");
  h2.innerText = "Xin chào F8";
  div.append(h2);
  this.append(div);

  //Internal CSS
  var borderColor = this.getAttribute("border-color");
  var style = document.createElement("style");
  style.textContent = `
  .box {
    border: 1px solid ${borderColor ?? "#000"};
    padding: 15px;
    border-radius: 15px;
  }
  `;
  this.prepend(style);
});
