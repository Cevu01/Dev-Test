gsap.registerPlugin(SplitText, ScrollTrigger);

//VIDEO
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

//HEADER
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");
const toggle = document.querySelector(".header__toggle");
let lastScrollY = window.scrollY;
let hideTimeout;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  header.classList.toggle("is-scrolled", scrollY > 10);

  const inHero = hero.getBoundingClientRect().bottom > header.offsetHeight;
  if (inHero) {
    header.classList.remove("is-hidden");
    clearTimeout(hideTimeout);
  } else {
    if (scrollY > lastScrollY) {
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => header.classList.add("is-hidden"), 1000);
    } else {
      header.classList.remove("is-hidden");
    }
  }
  lastScrollY = scrollY;
});

toggle.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

const links = document.querySelectorAll(".header__nav-link");
links.forEach((link) =>
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
  })
);

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
});

document.querySelector(".hero__cta").addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
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
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".contributors",
      start: "top 80%",
      once: true,
    },
  })
  .from(".contributors__title", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  })
  .from(
    ".contributors__item",
    {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.5)",
      stagger: {
        each: 0.15,
        from: "center",
      },
    },
    "-=0.3"
  )
  .from(
    ".contributors__footer-text",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.2"
  );

gsap.utils.toArray(".contributors__decor").forEach((icon, i) => {
  gsap.to(icon, {
    x: i % 2 ? "+=15" : "-=15",
    y: i % 2 ? "+=10" : "-=10",
    rotation: i % 2 ? "+=8" : "-=8",
    ease: "sine.inOut",
    duration: 4 + Math.random() * 2,
    repeat: -1,
    yoyo: true,
    delay: Math.random() * 1,
  });
});
document.querySelector(".contributors__cta").addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

//NETWORK
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".network",
      start: "top 80%",
      once: true,
    },
  })
  .from(".network__title", {
    y: -40,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  })
  .from(
    ".network__icon",
    {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.5)",
      stagger: 0.1,
    },
    "-=0.3"
  );

gsap.utils.toArray(".network__icon img").forEach((icon, i) => {
  gsap.to(icon, {
    y: i % 2 ? "+=10" : "-=10",
    duration: 3 + Math.random() * 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: Math.random(),
  });
});

//NEWS
gsap.registerPlugin(ScrollTrigger);

const elegantNews = gsap.timeline({
  scrollTrigger: {
    trigger: ".news",
    start: "top 85%",
    toggleActions: "play none none none",
    once: true,
  },
});

elegantNews.from(".news__title", {
  y: -30,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
});

elegantNews.from(
  ".news__card",
  {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.2,
  },
  "-=0.4"
);

gsap.utils.toArray(".news__decor").forEach((el, i) => {
  gsap.to(el, {
    y: i % 2 ? "+=15" : "-=15",
    duration: 3 + i,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 0.5,
  });
});
document.querySelector(".news__cta").addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

//FOOTER
gsap.registerPlugin(ScrollTrigger);
gsap.from(".footer__decor", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
    toggleActions: "play none none none",
    once: true,
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.utils.toArray(".footer__decor").forEach((el, i) => {
  gsap.to(el, {
    x: i % 2 ? "+=20" : "-=20",
    y: i % 2 ? "-=10" : "+=10",
    duration: 4 + Math.random() * 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 1 + i * 0.3,
  });
});
