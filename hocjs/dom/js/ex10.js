var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progessSpan = progress.querySelector("span");

//Giá trị khởi tạo
var initialClientX;
var percent;
var currentPercent = 0;

progressBar.addEventListener("mousedown", function (e) {
  //Lấy offsetX của progress-bar
  var offsetX = e.offsetX;
  //Tính giá trị phần trăm giữa offsetX và chiều rộng của progress-bar
  percent = (offsetX * 100) / progressBar.clientWidth;
  //Làm tròn 2 chữ số phần thập phân
  percent = percent.toFixed(2);

  progress.style.width = `${percent}%`;

  //Kích hoạt hành động bấm chuột và kéo
  initialClientX = e.clientX;
  currentPercent = percent;
  document.addEventListener("mousemove", handleDrag);
});

progessSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);

  //Cập nhật clientX khi bấm chuột vào button màu tím
  initialClientX = e.clientX;
});

//Hủy sự kiện mousemove nếu mouseup vào document
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);

  //Lấy phần trăm cuối cùng và cập nhật vào biến currentPercent

  currentPercent = percent;
});

//Kéo thả thay đổi vị trí
var handleDrag = function (e) {
  //Lấy giá trị clientX mới nhất tại vị trí chuột

  //Khoảng cách kéo = clientX mới nhất - clientX ban đầu
  var moveWidth = e.clientX - initialClientX;

  //Tính phần trăm giữa khoảng cách kéo và chiều rộng của progress-bar
  percent = (moveWidth * 100) / progressBar.clientWidth;

  percent = +percent.toFixed(2) + +currentPercent;

  //Cập nhật width cho progress

  if (percent < 0) {
    percent = 0;
  }

  if (percent > 100) {
    percent = 100;
  }

  progress.style.width = `${percent}%`;
};

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");
var playBtn = document.querySelector(".player .play-btn");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;

//Viết hàm chuyển đổi từ giây -> Định dạng phút:giây

var getTime = function (seconds) {
  //Tính ra số phút:
  //Lấy số giây / 60 -> Làm tròn xuống (Math.floor())
  var mins = Math.floor(seconds / 60);

  //Tính số giây còn lại sau khi đã trừ cho số phút -> Làm tròn xuống (Vì sẽ bị lẻ số giây)
  seconds = Math.floor(seconds - mins * 60);

  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

//Lấy thời lượng của audio
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

//Phát nhạc và dừng nhạc khi bấm nút play
playBtn.addEventListener("click", function () {
  //audio.paused -> Lấy trạng thái audio
  if (audio.paused) {
    audio.play(); //Phát nhạc
  } else {
    audio.pause();
  }
});

//Lắng nghe event play
audio.addEventListener("play", function () {
  playBtn.children[0].classList.remove("fa-play");
  playBtn.children[0].classList.add("fa-pause");
});

//Lắng nghe event pause
audio.addEventListener("pause", function () {
  playBtn.children[0].classList.remove("fa-pause");
  playBtn.children[0].classList.add("fa-play");
});

//Lắng nghe sự kiện timeupdate
audio.addEventListener("timeupdate", function () {
  //Lấy thời gian hiện tại của bài hát
  var currentTime = audio.currentTime;

    //Chuyển currentTime thành phần trăm
    var percent = (currentTime * 100) / audio.duration;
  
  //if cái gì đó {
  //Show currentTime lên UI
  currentTimeEl.innerText = getTime(currentTime);

  //Cập nhật width vào progress
  progress.style.width = `${percent}%`;
  //}
});
