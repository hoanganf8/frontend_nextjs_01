/*
while (dieukien) {
    Nội dung
}

Bước 1: Kiểm tra điều kiện

Bước 2: 

- Nếu sai => Không chạy vòng lặp
- Nếu đúng => Chuyển đến bước 3

Bước 3: Chạy nội dung trong vòng lặp

Bước 4: Quay lại kiểm tra điều kiện

- Sai => Thoát
- Đúng => Lặp lại bước 3
*/

// var i = 1;
// var total = 0;
// while (i <= 10) {
//   //   console.log(`i = ${i}`);
//   total += i;
//   i++;
// }
// console.log(`Total = ${total}`);

var n = 100;
//Kiểm tra xem biến n chia hết cho 2 bao nhiêu lần
var count = 0;
while (n % 2 === 0) {
  n /= 2;
  count++;
}

console.log(count);
