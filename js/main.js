gsap.registerPlugin(SplitText, ScrollTrigger);

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

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 10) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

gsap.utils.toArray(".hero__decor").forEach((decor, i) => {
  gsap.to(decor, {
    x: i % 2 === 0 ? "+=30" : "-=30",
    rotation: i % 2 === 0 ? "+=15" : "-=15",
    duration: 4 + Math.random() * 1,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });
});

//HERO
document.addEventListener("DOMContentLoaded", () => {
  const split = new SplitText(".hero__title", { type: "chars" });

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  tl.from(split.chars, {
    y: 20,
    autoAlpha: 0,
    stagger: 0.05,
    duration: 0.6,
  });
  tl.from(
    ".hero__subtitle",
    { y: 40, autoAlpha: 0, duration: 0.8 },
    "-=0.4"
  ).from(
    ".hero__cta",
    {
      scale: 0.5,
      autoAlpha: 0,
      transformOrigin: "center center",
      duration: 0.2,
      ease: "back.out(1.7)",
      clearProps: "transform",
    },
    "-=0.5"
  );
});

//INFO
//WHY-US
//FOUNDER
//CONTRIBUOTRS
//NETWORK
//NEWS
//FOOTER
