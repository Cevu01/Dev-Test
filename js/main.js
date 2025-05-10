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
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const infoTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".info",
      start: "top 80%",
      once: true,
    },
  });

  infoTl
    .from(".info__title", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
    .from(
      ".info__text p",
      {
        x: -80,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(".info__slice--1", {
      x: -200,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })
    .from(
      ".info__slice--2",
      { x: 200, opacity: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .from(
      ".info__slice--3",
      { y: 200, opacity: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

  gsap.utils.toArray(".info__decor").forEach((decor, i) => {
    gsap.to(decor, {
      x: i % 2 === 0 ? "+=20" : "-=20",
      rotation: i % 2 === 0 ? "+=8" : "-=8",
      duration: 3 + Math.random() * 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: Math.random(),
    });
  });
});

//WHY-US
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".why-us",
        start: "top 80%",
        once: true,
      },
    })
    .from(".why-us__title", {
      y: -40,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
    .from(
      ".why-us__item",
      {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.3"
    );

  gsap.utils.toArray(".why-us__decor").forEach((decor, i) => {
    gsap.to(decor, {
      x: i % 2 ? "-=20" : "+=20",
      y: i % 2 ? "+=10" : "-=10",
      rotation: i % 2 ? "-=8" : "+=8",
      duration: 4 + Math.random() * 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: Math.random() * 1.5,
    });
  });
});

//FOUNDER
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".founder",
      start: "top 80%",
      once: true,
    },
  })
  .from(".founder__image-wrapper", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(
    ".founder__content",
    {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.4"
  );

gsap.utils.toArray(".founder__decor").forEach((decor, i) => {
  gsap.to(decor, {
    x: i % 2 ? "-=25" : "+=25",
    y: i % 2 ? "+=15" : "-=15",
    rotation: i % 2 ? "-=10" : "+=10",
    duration: 5 + Math.random() * 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: Math.random() * 1,
  });
});
//CONTRIBUOTRS
//NETWORK
//NEWS
//FOOTER
