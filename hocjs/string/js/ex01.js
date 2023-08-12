/*
Chuỗi trong Javascript

String() => Hàm tạo (Function Constructor)
*/
// var fullname = "Tạ Hoàng An";

// console.log(fullname, typeof fullname);

// var fullname2 = String("Tạ Hoàng An");
// console.log(fullname2, typeof fullname2);

// //Khai báo như object
// var fullname3 = new String("Tạ Hoàng An");
// console.log(fullname3, typeof fullname3);
// console.log(fullname3.length);
//Truy cập vào các thuộc tính, phương thức xử lý chuỗi (Được xây dựng từ hàm tạo String)
/*
tendoituong.tenThuocTinh
tendoituong.tenPhuongThuc()
*/

//Tự động tạo ra 1 object tạm thời để có thể truy cập vào các phương thức, thuộc tính của hàm tạo String

// document.write(fullname);

console.log(String.prototype);
var str = "Xin chào F8 Hoàng an F8";
//1. length => Lấy độ dài của chuỗi
// console.log(str.length);

//2. charAt() => Lấy ký tự theo index (index bắt đầu từ 0)
// console.log(str.charAt(1));
// for (var i = 0; i < str.length; i++) {
//   console.log(str.charAt(i));
// }

//3. charCodeAt() => Lấy mã ASCII của ký tự theo index
// console.log(str.charCodeAt(0));

//4. concat() => Nối chuỗi
// console.log(str.concat("F9", "F10", "F11"));

//5. indexOf(value) => Tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha, nếu không tìm thấy trả về -1

// console.log(str.indexOf("F8"));

//6. lastIndexOf(value) => Tìm vị trí cuối
// console.log(str.lastIndexOf("F8"));

//7. includes(value) => Tìm chuỗi và trả true/false
// console.log(str.includes("F8"));

//8. slice(start, end) => Cắt chuỗi từ start đến end
// console.log(str.slice(1, 5));
// console.log(str.slice(5));
// console.log(str.slice(-5));

//Bài tập: Lấy username của email
// var email = "hoangan.web@gmail.com";
// //hoangan.web
// var position = email.indexOf("@");
// var username = email.slice(0, position);
// console.log(username);

//9. replace(search, with) => Tìm kiếm và thay thế chuỗi đầu tiên

// console.log(str.replace("F8", "F88"));

/*
Lưu ý: Hàm replace hỗ trợ thay thế dựa vào biểu thức chính quy (Regex)
*/

//10. replaceAll(search, with) => Tìm kiếm và thay thế tất cả
// console.log(str.replaceAll("F8", "F88"));

//11. split() => Tách chuỗi thành mảng
// console.log(str.split(" "));

//12. toLowerCase() => Chuyển thành chữ thường
// console.log(str.toLowerCase());

//13. toUpperCase() => Chuyển thành chữ hoa
// console.log(str.toUpperCase());

//14. trim() => Loại bỏ khoảng trắng đầu và cuối chuỗi
// var str = "  Hoàng An   ";
// console.log(str);
// console.log(str.trim());

//15. trimStart() => Loại bỏ khoảng trắng đầu chuỗi

//16. trimEnd() => Loại bỏ khoảng trắng cuối chuỗi

//17. match() => Cắt chuỗi dựa vào biểu thức chính quy (Regex)

var content = `Lorem Ipsum 0388875179 is simply dummy text of the printing and typesetting 0123456789 industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and +84357123875 scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap`;

//Yêu cầu: Cắt ra các số điện thoại trong đoạn văn trên
var pattern = /(0|\+84)\d{9}/g; //Regex
var phones = content.match(pattern);
console.log(phones);
