//Stograge --> Bộ nhớ trình duyệt
//--> Chỉ lưu trữ Text
//1. localStorage: Lưu trữ không giới hạn thời gian
// - localStorage.getItem(key)
// - locaStorage.setItem(key, value)
// - localStorage.removeItem(key)
// - localStorage.clear() --> Xóa hết
//2. sessionStorage: Lưu trữ theo phiên của trình duyệt
// - sessionStorage.getItem(key)
// - sessionStorage.setItem(key, value)
// - sessionStorage.removeItem(key)
// - sessionStorage.clear() --> Xóa hết

//==> Đặc điểm chung
/*
- Dung lượng lưu trữ hơn cookie (4-5MB)
- Không share được giữa các subdomain
- Khớp chính xác dựa theo tên miền, giao thức, cổng
- Không phân biệt path (Đường dẫn sau port)
*/
//3. cookie: Lưu trữ theo thời gian chỉ định hoặc theo phiên
/*
- Dung lưu trữ thấp (KB)
- Có thể share giữa các subdomain
- Có thiết lập được expire, nếu không thiết lập sẽ là session
- Tránh được tấn công XSS
- Dễ bị tấn công CSRF
- Khớp theo path
- An toàn hơn: Vì có httpOnly, Secure
- Cookie tự động đính kèm vào request header khi sử dụng trình duyệt
*/

// localStorage.setItem("username", "hoangan.web");
// console.log(localStorage.getItem("username"));
// localStorage.removeItem("username");

// document.cookie = "username=hoanganweb;domain=localhost";
// document.cookie = "username=hoanganf8;path=/hocjs/dom";
// document.cookie = "email=hoanganit19@gmail.com;path=/";

// const expire = new Date("2023-11-15 09:54:00").toUTCString();

// document.cookie = "username=hoanganit19;expires=" + expire;

// document.cookie = "username=;expires=" + new Date().toUTCString();
// document.cookie = "username=;max-age=2";

//Server --> Trả về Response Header: Set-Cookie

/*
res.header['Set-Cookie'] = 'username=hoanganit19;max-age=3600;HttpOnly'
*/
