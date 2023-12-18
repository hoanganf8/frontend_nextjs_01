# Redux là gì?

- Thư viện để quản lý Global State trong các ứng dụng JS
- Có thể tích hợp vào tất cả ứng dụng JS: VanillaJS (JS thuần), React, React Native, Vuejs, NextJS,...

# Các thành phần của Redux

- Store: Kho lưu trữ các state
- Reducer: Hàm reducer để viết các logic update state
- Dispatch: Gửi action từ component lên Reducer
- Action: Object đặc tả hành động: thêm, sửa, xóa
- Subscribe: Lắng nghe sự thay đổi state trên Store (tìm hiểu observer pattern)

# Học Redux cần học những gì?

- Redux Core: Tự setup redux vào dự án theo cách thủ công --> Hiểu cách hoạt động của Redux
- Redux Toolkit: Bộ đóng gói của thư viện Redux giúp setup nhanh, code ít hơn,...
- Redux Middleware: Redux Thunk

# Redux Middleware

Component --> Dispatch tới Middleware --> Dispatch tới Reducer --> Update State
