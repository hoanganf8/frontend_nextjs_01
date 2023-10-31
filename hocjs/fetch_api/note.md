Call API:

- fetch()
- axios lib
- xhr

-> Phát sinh nhiều vấn đề

- Rối, khó bảo trì nâng cấp
- Cần thêm các tác vụ khác: thêm header, authentication, authorization -> Rối
- Giả sử: fetch() -> Không được phép sử dụng -> Sửa lại hết từng file

-> Giải pháp: Tách nghiệp vụ Call API thành 1 hàm riêng
