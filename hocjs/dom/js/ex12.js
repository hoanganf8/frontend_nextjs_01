//Bài tập Counter sử dụng DOM Nodes
var root = document.querySelector("#root");
var h1 = document.createElement("h1");
h1.innerText = `Count: `;
// var span = document.createElement("span");
// span.innerText = 0;
// h1.append(span);
var textNode = document.createTextNode(0);
// console.log([textNode]);
h1.append(textNode);

var plusBtn = document.createElement("button");
plusBtn.innerText = `+`;
plusBtn.addEventListener("click", function () {
  //   span.innerText++;
  textNode.data++;
});

var minusBtn = document.createElement("button");
minusBtn.innerText = `-`;
minusBtn.addEventListener("click", function () {
  //   span.innerText--;
  textNode.data--;
});

root.append(h1);
root.append(minusBtn);
root.append(plusBtn);

//Comment Node
var comment = document.createComment("Counter App");
root.append(comment);

var commentButton = document.createComment("Action Button");
root.insertBefore(commentButton, minusBtn);
