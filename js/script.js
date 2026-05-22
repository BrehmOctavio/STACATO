/* ========================================
   CONTACT MODAL
======================================== */

/* OPEN BUTTONS */

const openContactButtons = document.querySelectorAll(".open-contact");

/* CONTACT SECTION */

const contactSection = document.querySelector(".section__contact");

/* CLOSE BUTTON */

const closeContact = document.querySelector(".header__close");

/* ========================================
   OPEN CONTACT MODAL
======================================== */

openContactButtons.forEach((button) => {
  button.addEventListener("click", () => {
    contactSection.classList.add("active");
  });
});

/* ========================================
   CLOSE CONTACT MODAL
======================================== */

closeContact.addEventListener("click", () => {
  contactSection.classList.remove("active");
});

/* CLOSE - clicking ELEMENT (todos los que existan) */

document.querySelectorAll(".nav__element").forEach((el) => {
  el.addEventListener("click", () => {
    contactSection.classList.remove("active");
  });
});

/* ========================================
   SIDEBAR OBSERVER
======================================== */

const stacatoName = document.querySelector(".stacato__name");
const hero = document.querySelector(".hero");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      stacatoName.style.opacity = "0";
      stacatoName.style.pointerEvents = "none";
    } else {
      stacatoName.style.opacity = "1";
      stacatoName.style.pointerEvents = "auto";
    }
  },
  { threshold: 0.1 },
);

observer.observe(hero);

/* ========================================
   PRODUCT SLIDES
======================================== */

const firstGroup = document.querySelector(".first");
const secondGroup = document.querySelector(".second");

const nextButtons = document.querySelectorAll(".next");
const backButtons = document.querySelectorAll(".back");

// estado inicial
firstGroup.classList.add("active");

nextButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    firstGroup.classList.remove("active");
    secondGroup.classList.add("active");
  });
});

backButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    secondGroup.classList.remove("active");
    firstGroup.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const first = document.querySelector(".first-mobile");
  const second = document.querySelector(".second-mobile");

  const nextBtn = document.querySelector(".next-mobile");
  const backBtn = document.querySelector(".back-mobile");

  console.log("BACK BTN:", backBtn);
  console.log("NEXT BTN:", nextBtn);

  nextBtn.addEventListener("click", () => {
    console.log("NEXT CLICK");

    first.classList.remove("is-active");
    second.classList.add("is-active");
  });

  backBtn.addEventListener("click", () => {
    console.log("BACK CLICK");

    second.classList.remove("is-active");
    first.classList.add("is-active");
  });
});

// video-nakedear
const section = document.querySelector(".section__nakedear-video");
const video = document.querySelector(".nakedear-video__landing");

section.addEventListener("click", () => {
  section.classList.add("active");

  video.play();
});

//mobile
const mobileSection = document.querySelector(".section-video__mobile");

const mobileObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.55) {
        mobileSection.classList.add("in-view");
      } else {
        mobileSection.classList.remove("in-view");
      }
    });
  },

  {
    threshold: [0, 0.55, 1],
  },
);

mobileObserver.observe(mobileSection);

//video
const mobileVideoSectionTrigger = document.querySelector(
  ".section-video__mobile",
);
const mobileLandingVideoPlayer = document.querySelector(
  ".nakedear-video-landing__mobile",
);

/* SCROLL ANIMATION */

const mobileFeedAnimationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.55) {
        mobileVideoSectionTrigger.classList.add("in-view");
      } else {
        mobileVideoSectionTrigger.classList.remove("in-view");
      }
    });
  },

  {
    threshold: [0, 0.55, 1],
  },
);

mobileFeedAnimationObserver.observe(mobileVideoSectionTrigger);

/* VIDEO REVEAL */

mobileVideoSectionTrigger.addEventListener("click", () => {
  mobileVideoSectionTrigger.classList.add("video-active");

  mobileLandingVideoPlayer.play();
});

//POSTER-VIDEO-IMAGES
const nakedearSection = document.querySelector(".nakedear__product-info-video");

const nakedearVideo = nakedearSection.querySelector(".nakedear__video");

const nakedearButtons = nakedearSection.querySelectorAll(".button__container");

nakedearButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mediaPath = button.dataset.poster;

    /* VIDEO */

    if (mediaPath.endsWith(".mp4")) {
      nakedearVideo.pause();

      nakedearVideo.removeAttribute("poster");

      nakedearVideo.src = mediaPath;

      nakedearVideo.load();

      nakedearVideo.play();
    } else {
      /* IMAGE */
      nakedearVideo.pause();

      nakedearVideo.currentTime = 0;

      nakedearVideo.removeAttribute("src");

      nakedearVideo.setAttribute("poster", mediaPath);

      nakedearVideo.load();
    }
  });
});

/* =========================
   SUWB
========================= */

const suwbSection = document.querySelector(".suwb-product__info-video");
const suwbVideo = suwbSection.querySelector(".suwb__video");
const suwbButtons = suwbSection.querySelectorAll(".suwb-button");

suwbButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mediaPath = button.dataset.poster;

    suwbVideo.pause();
    suwbVideo.currentTime = 0;
    suwbVideo.removeAttribute("src");
    suwbVideo.load();
    suwbVideo.setAttribute("poster", mediaPath);
  });
});

/* =========================
   SUWB DONGLE
========================= */

const dongleSection = document.querySelector(".dongle-product__info-video");

const dongleVideo = dongleSection.querySelector(".suwb-dongle-product__video");

const dongleButtons = dongleSection.querySelectorAll(".dongle-button");

dongleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mediaPath = button.dataset.poster;

    dongleVideo.pause();
    dongleVideo.currentTime = 0;
    dongleVideo.removeAttribute("src");
    dongleVideo.load();
    dongleVideo.setAttribute("poster", mediaPath);
  });
});

/* =========================
   ZERO MOBILE
========================= */

const zeroSectionMobile = document.querySelector(".section-zero__mobile");
const zeroVideoMobile = zeroSectionMobile.querySelector(".zero-video__mobile");
const zeroButtonsMobile = zeroSectionMobile.querySelectorAll(
  ".zero-button-mobile",
);

zeroButtonsMobile.forEach((button) => {
  button.addEventListener("click", () => {
    const mediaPath = button.dataset.poster;

    zeroVideoMobile.pause();
    zeroVideoMobile.currentTime = 0;
    zeroVideoMobile.removeAttribute("src");
    zeroVideoMobile.load();
    zeroVideoMobile.setAttribute("poster", mediaPath);
  });
});

/* =========================
   WASTED MOBILE
========================= */

const wastedSectionMobile = document.querySelector(".section-wasted__mobile");
const wastedVideoMobile = wastedSectionMobile.querySelector(
  ".wasted-video__mobile",
);
const wastedButtonsMobile = wastedSectionMobile.querySelectorAll(
  ".wasted-button-mobile",
);

wastedButtonsMobile.forEach((button) => {
  button.addEventListener("click", () => {
    const mediaPath = button.dataset.poster;

    wastedVideoMobile.pause();
    wastedVideoMobile.currentTime = 0;
    wastedVideoMobile.removeAttribute("src");
    wastedVideoMobile.load();
    wastedVideoMobile.setAttribute("poster", mediaPath);
  });
});

/* =========================
   NOTHING MOBILE
========================= */

const nothingSectionMobile = document.querySelector(".section-nothing__mobile");
const nothingVideoMobile = nothingSectionMobile.querySelector(
  ".nothing-video__mobile",
);
const nothingButtonsMobile = nothingSectionMobile.querySelectorAll(
  ".nothing-button-mobile",
);

nothingButtonsMobile.forEach((button) => {
  button.addEventListener("click", () => {
    const mediaPath = button.dataset.poster;

    nothingVideoMobile.pause();
    nothingVideoMobile.currentTime = 0;
    nothingVideoMobile.removeAttribute("src");
    nothingVideoMobile.load();
    nothingVideoMobile.setAttribute("poster", mediaPath);
  });
});

/* =========================
   VIDEO N NAKEDEAR
========================= */

const playButtons = document.querySelectorAll(".button__play");
const headsetVideo = document.querySelector(".nakedear__video");

// guardar video original
const originalVideoSrc = "./assets/videos/headset/COMMS IN OR OUT OF EAR.mp4";

playButtons.forEach((playButton) => {
  playButton.addEventListener("click", () => {
    // restaurar video
    headsetVideo.src = originalVideoSrc;

    // sacar poster
    headsetVideo.removeAttribute("poster");

    // recargar video
    headsetVideo.load();

    // reproducir desde el inicio
    headsetVideo.currentTime = 0;

    headsetVideo.play();
  });
});

/* =========================
   ZERO MOBILE VIDEO PLAY
========================= */

const zeroPlayButtonsMobile = document.querySelectorAll(
  ".zero-button-play__mobile",
);

const zeroMobileVideo = document.querySelector(".zero-video__mobile");

// video original correcto
const zeroOriginalVideoSrc =
  "./assets/videos/headset/COMMS IN OR OUT OF EAR.mp4";

zeroPlayButtonsMobile.forEach((playButton) => {
  playButton.addEventListener("click", () => {
    // restaurar video original
    zeroMobileVideo.src = zeroOriginalVideoSrc;

    // quitar poster
    zeroMobileVideo.removeAttribute("poster");

    // recargar video
    zeroMobileVideo.load();

    // reiniciar
    zeroMobileVideo.currentTime = 0;

    // reproducir
    zeroMobileVideo.play();
  });
});

/* =========================
   LINKS
========================= */

document.querySelectorAll("#logo-top").forEach((logo) => {
  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.querySelector(".nav__logo-nakedear").addEventListener("click", () => {
  document.getElementById("nakedear-product").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
