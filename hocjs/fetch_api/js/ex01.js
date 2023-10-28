//Fetch API

//1. Dữ liệu lưu ở đâu? -> Back-end (Database)

//2. Làm sao để front-end tương tác được với Back-end?
// -> HTTP Request - HTTP Response
/*
Có 2 cơ chế: 
1. Client Side: Giao tiếp thông qua API (Back-end sẽ cung cấp API để front-end sử dụng)

2. Server Side: Server trả trực tiếp về HTML -> Request thông qua HTML

API là gì? -> Application Programming Interface
-> Giao diện lập trình ứng dụng
-> Tạo môi trường giao tiếp giữa các ứng dụng với nha
+ Web API
+ API hệ điều hành
+ API thư viện, framework

RESTFul API
1. URL: Server URL + Path (Resource)
-> https://api.fullstack.edu.vn/users
-> https://api.fullstack.edu.vn/users/1/images

2. HTTP METHOD
- GET -> Lấy dữ liệu
- POST -> Thêm mới dữ liệu
- PUT -> Sửa dữ liệu (Ghi đè)
- PATCH -> Sửa dữ liệu (Không ghi đè)
- DELETE -> Xóa dữ liệu

3. ENDPOINT
URL + METHOD

GET /users
GET /users/{id}
POST /users
PUT /users/{id}

4. Status Code

JSON là gì? 
- Định dạng dữ liệu: Chuyển từ object, array,...
- Thuộc kiểu chuỗi
*/

const users = [
  {
    id: 1,
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
  },
  {
    id: 2,
    name: "Hoàng An 2",
    email: "hoangan.web2@gmail.com",
  },
];
//Chuyển kiểu chuỗi (Đảm bảo tính toàn vẹn của dữ liệu), hỗ trợ hầu hết các ngôn ngữ lập trình -> JSON hỗ trợ hầu hết các ngôn ngữ lập trình

//Chuyển kiểu dữ liệu -> JSON
const json = JSON.stringify(users);
console.log(json);

//Chuyển JSON -> Kiểu dữ liệu
const arr = JSON.parse(json);
console.log(arr);
