# Ngôn ngữ tiền xử lý SCSS

## Cài đặt trình biên dịch

1. Cài đặt NodeJS
   => Học viên tự cài

2. Cài đặt SASS

npm i sass -g

## Câu lệnh biên dịch SCSS sang CSS

1. Biên dịch cả folder scss sang css

sass folder_scss:foldercss

Watch Mode

sass folder_scss:foldercss --watch

2. Biên dịch 1 file scss sang 1 file css

sass duong-dan-file-scss duong-dan-file-css

=> Watch Mode tương tự như trên

3. Nén file CSS từ file SCSS

=> Tạo ra file .min (minify)

sass duong-dan-file-scss duong-dan-file-css --style compressed
