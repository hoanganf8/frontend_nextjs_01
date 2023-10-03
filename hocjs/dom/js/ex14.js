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

  //Xử lý tua
  var currentTime = (audio.duration / 100) * percent;

  audio.currentTime = currentTime;
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

//Xử lý chức năng Karaoke
lyric = lyric.data.sentences;
console.log(lyric);

var requestId, currentIndex;

var karaokeContent = document.querySelector(".karaoke-content");

var handleKaraoke = function () {
  var currentTime = audio.currentTime * 1000;

  handleColor(currentTime); //Xử lý tô màu từng từ khi hát Karaoke

  var index = lyric.findIndex(function (sentence) {
    var words = sentence.words;
    return (
      currentTime >= words[0].startTime &&
      currentTime <= words[words.length - 1].endTime
    );
  });

  if (index !== -1 && index !== currentIndex) {
    if (index === 0) {
      var sentenceHtml = `
       <p>${getSentence(0)}</p>
       <p>${getSentence(1)}</p>
       `;
      karaokeContent.innerHTML = sentenceHtml;
    } else {
      //Thực hiện next câu dạng so le
      setTimeout(function () {
        nextSentence(index);
      }, 500);
    }

    currentIndex = index;
  }

  requestId = requestAnimationFrame(handleKaraoke);
};

var getSentence = function (index) {
  return lyric[index].words
    .map(function (word) {
      return `<span class="word" data-start-time="${word.startTime}" data-end-time="${word.endTime}">${word.data}<span>${word.data}</span></span>`;
    })
    .join(" ");
};

var nextSentence = function (index) {
  var sentenceEl = karaokeContent.children;
  var showSentence = function (lineIndex) {
    sentenceEl[lineIndex].style.transition = `opacity 0.4s linear`;

    sentenceEl[lineIndex].style.opacity = 0;

    setTimeout(function () {
      sentenceEl[lineIndex].innerHTML = getSentence(index + 1);
      sentenceEl[lineIndex].style.opacity = 1;
    }, 350);
  };
  if (index % 2 !== 0) {
    showSentence(0);
  } else {
    showSentence(1);
  }
};

var handleColor = function (currentTime) {
  var wordList = karaokeContent.querySelectorAll(".word");
  if (wordList.length) {
    wordList.forEach(function (wordItem, index) {
      //Lấy startTime, endTime của từng từ trên giao diện
      var startTime = wordItem.dataset.startTime;
      var endTime = wordItem.dataset.endTime;

      if (currentTime > startTime && currentTime < endTime) {
        //Tính tỉ lệ phần trăm từ currentTime so với toàn bộ thời gian của 1 từ
        var rate = ((currentTime - startTime) / (endTime - startTime)) * 100;

        wordItem.children[0].style.width = `${rate}%`;
      }

      if (currentTime >= endTime) {
        wordItem.children[0].style.width = `100%`;
      }
    });
  }
};

audio.addEventListener("play", function () {
  requestId = requestAnimationFrame(handleKaraoke);
});

audio.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});
