const closeIcon = document.querySelector(".close_icon");
const btn = document.querySelector(".btn");
const videoContainer = document.querySelector(".video_container");
const video = document.querySelector("video");
btn.addEventListener("click", () => {
  videoContainer.classList.remove("active");
});
closeIcon.addEventListener("click", () => {
  videoContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
//end ??