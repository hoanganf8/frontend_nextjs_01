//Câu lệnh switch case
/*
- Chỉ chấp nhận so sánh bằng (===)
- Thường áp dụng khi có nhiều nhánh và nhiều trường hợp hoặc (||)
*/

var action = "update";
switch (action) {
  case "create":
  case "insert":
  case "add":
    console.log("Thêm");
    break;

  case "edit":
  case "update":
    console.log("Sửa");
    break;

  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;

  default:
    console.log("Danh sách");
    break;
}

if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm");
} else if (action === "edit" || action === "update") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log("Xóa");
} else {
  console.log("Danh sách");
}

//Trên thực tế: switch case có thể sẽ nằm trong if else hoặc, if else nằm trong 1 case
