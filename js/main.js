// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".workflow__video-wrapper");
  if (!wrapper) return;

  const video = wrapper.querySelector("video");
  const btn = wrapper.querySelector(".workflow__play-btn");
  const overlay = wrapper.querySelector(".workflow__overlay");

  const startVideo = () => {
    overlay.remove();
    btn.style.display = "none";
    video.setAttribute("controls", "");
    video.play();
  };

  overlay.addEventListener("click", startVideo);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    startVideo();
  });
});
