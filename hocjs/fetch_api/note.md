Call API:

- fetch()
- axios lib
- xhr

-> Phát sinh nhiều vấn đề

- Rối, khó bảo trì nâng cấp
- Cần thêm các tác vụ khác: thêm header, authentication, authorization -> Rối
- Giả sử: fetch() -> Không được phép sử dụng -> Sửa lại hết từng file

-> Giải pháp: Tách nghiệp vụ Call API thành 1 hàm riêng

## Authentication

- Cho biết bạn là ai?
- Đăng nhập

Luồng Request: Đăng nhập => Server Verify => Khởi tạo mã số (sessionId, Token) => Trả về Client

## Authorization

- Ủy quyền
- Cho phép được làm gì? Không được làm gì?
- Server: Kiểm tra mã số (sessionId, token) hợp lệ hay không?

* Không hợp lệ -> Trả về thông báo lỗi (401)
* Hợp lệ -> Xử lý nghiệp vụ tiếp theo

Ví dụ:

- Đăng nhập -> Authentication
- Sửa thông tin tài khoản -> Authorization

## Các hình thức Authentication

1. Session-Based (Cookie-Based) Authentication

- Ưu điểm:

* Dễ triển khai
* Các framework, thư viện, cms từ trước đa số theo cơ chế này

- Nhược điểm:

* Không scale được
* Không áp dụng cho các ứng dụng đa nền tảng

Ví dụ: 1 dự án có nhiều server (microservices)

Request => LB => - Server 1 -> Login lưu session vào server này - Server 2 -> Không có session -> Bắt đăng nhập lại - Server 3

2. Token-Based Authentication
