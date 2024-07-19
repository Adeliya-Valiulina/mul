window.addEventListener("DOMContentLoaded", () => {
  const swiperMobile = new Swiper(".logos-swiper", {
    // loop: true,
    // loopFillGroupWithBlank: false,
    slidesPerView: "auto",
    spaceBetween: 16,

    // speed: 1000,
    simulateTouch: true,

    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 160,
    },
    breakpoints: {
      0: {
        scrollbar: {
          el: ".swiper-scrollbar",
          dragSize: 35,
        },
      },
      576: {
        scrollbar: {
          el: ".swiper-scrollbar",
          dragSize: 160,
        },
      },
    },
  });
  const swiper = new Swiper(".swiper-featured", {
    spaceBetween: 32,
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".swiper__button--next",
      prevEl: ".swiper__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  const swiperSlider = new Swiper(".swiper-slider", {
    spaceBetween: 32,
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".slider-button--next",
      prevEl: ".slider-button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // window.onload = function () {
  //   document.body.classList.add("loaded_hiding");
  //   window.setTimeout(function () {
  //     document.body.classList.add("loaded");
  //     document.body.classList.remove("loaded_hiding");
  //   }, 500);
  // };

  // const deadline = "2024-05-31";

  // function getTimeRemaining(endtime) {
  //   let days, hours, minutes, seconds;
  //   const t = Date.parse(endtime) - Date.parse(new Date());

  //   if (t <= 0) {
  //     days = 0;
  //     hours = 0;
  //     minutes = 0;
  //     seconds = 0;
  //   } else {
  //     (days = Math.floor(t / (1000 * 60 * 60 * 24))),
  //       (hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
  //       (minutes = Math.floor((t / 1000 / 60) % 60)),
  //       (seconds = Math.floor((t / 1000) % 60));
  //   }

  //   return {
  //     total: t, // общее кол-во мс
  //     days: days,
  //     hours: hours,
  //     minutes: minutes,
  //     seconds: seconds,
  //   };
  // }

  // // Добавить ноль в числа

  // function getZero(num) {
  //   if (num >= 0 && num < 10) {
  //     return `0${num}`;
  //   } else {
  //     return num;
  //   }
  // }

  // // Устанавливает таймер на страницу
  // function setClock(selector, endtime) {
  //   const timer = document.querySelector(selector),
  //     days = timer.querySelector("#days"),
  //     hours = timer.querySelector("#hours"),
  //     minutes = timer.querySelector("#minutes"),
  //     seconds = timer.querySelector("#seconds"),
  //     timeInterval = setInterval(updateClock, 1000);

  //   updateClock();
  //   // Обновление таймера каждую секунду

  //   function updateClock() {
  //     // Расчет того времени, который остался на эту секунду
  //     const t = getTimeRemaining(endtime);

  //     // Поместить расчетные величины на страницу
  //     days.innerHTML = getZero(t.days);
  //     hours.innerHTML = getZero(t.hours);
  //     minutes.innerHTML = getZero(t.minutes);
  //     seconds.innerHTML = getZero(t.seconds);

  //     // Остановить таймер по истечении срока
  //     if (t.total <= 0) {
  //       clearInterval(timeInterval);
  //     }
  //   }
  // }
  // setClock(".timer", deadline);

  // POPUP

  const buttonPopup = document.querySelector(".anons-button");
  const popup = document.querySelector("#anons-popup");
  const anons = document.querySelector(".anons");
  const popupWrap = document.querySelector(".anons-popup__wrapper");
  // const closePopup = document.querySelector("#anons-popup__close");

  buttonPopup.addEventListener("click", openPopup);

  // closePopup.addEventListener("click", () => {});
  function openPopup() {
    popup.classList.remove("hide");
    popup.classList.add("show");
    popupWrap.classList.add("anim");
    anons.classList.add("absolute");
    anons.classList.remove("fixed");
    document.body.style.overflowY = "hidden";
  }

  function closePopup() {
    document.body.style.overflowY = "visible";
    popup.classList.remove("show");
    popup.classList.add("hide");
    anons.classList.remove("absolute");
    anons.classList.add("fixed");
  }

  popup.addEventListener("click", (e) => {
    if (
      e.target !== popup ||
      e.target.getElementById("anons-popup__close") == ""
    ) {
      closePopup();
      e.preventDefault();
      return false;
    }
  });
  // esc
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && popup.classList.contains("show")) {
      closePopup();
    }
  });

  // const playButton = document.getElementById("play-video");
  // const videoPlay = document.querySelector(".video-container");
  // const video = document.querySelector(".video");
  // const vid = document.querySelector(".vid");

  // playButton.addEventListener("click", () => {
  //   openVideo();
  // });

  // function openVideo() {
  //   video.classList.add("show-video");
  //   video.classList.remove("hidden-video");
  //   document.body.style.overflow = "hidden";
  // }
  // function closeVideo() {
  //   video.classList.remove("show-video");
  //   video.classList.add("hidden-video");
  //   document.body.style.overflow = "";
  //   vid.stop();
  //   vid.currentTime = 0;
  // }

  // video.addEventListener("click", (e) => {
  //   if (e.target !== video || e.target.getAttribute("data-close") == "") {
  //     e.preventDefault();
  //     closeVideo();

  //   }
  // });

  // document.addEventListener("keydown", (e) => {
  //   if (e.code === "Escape" && video.classList.contains("show-video")) {
  //     closeVideo();
  //     e.preventDefault();
  //   }
  // });

  window.addEventListener("scroll", trackscroll); //после каждого скролла запускаем функцию "trackscroll"

  function trackscroll() {
    //переменной header присваиваем элемент с id "header"
    let header = document.querySelector(".nav-wrapper");
    let nav = document.querySelector(".nav");
    const logo = document.querySelector(".nav-logo__image");
    const logoFixed = document.querySelector(".nav-logo__fixed");

    function bigNavbar() {
      header.classList.remove("nav_padding");
      header.classList.add("nav-wrapper__big");
      nav.classList.remove("nav_bg");
      logo.style.display = "block";
      logoFixed.style.opacity = "0";
    }

    function smallNavbar() {
      header.classList.remove("nav-wrapper__big");
      header.classList.add("nav_padding");
      nav.classList.add("nav_bg");
      logo.style.display = "none";
      logoFixed.style.opacity = "1";
    }
    //если есть скролл, то удаляем название класса "header_big" и добавляем название класса "header_small" - делаем шапку маленькой
    if (window.scrollY > 100) {
      smallNavbar();
    }

    if (window.scrollY < 100) {
      bigNavbar();
    }
  }

  AOS.init({
    duration: 400,
    once: true,
  });

  if (window.innerWidth < 576) {
    function removeAos() {
      var elem = document.getElementById("aos-css-file");
      elem.parentNode.removeChild(elem);
      return false;
    }
    removeAos();
  }

  AOS.init();

  const hoverButton = document.querySelector(".about-button");
  const textColor = document.querySelector(".play-grey");

  hoverButton.addEventListener("mouseenter", () => {
    textColor.style.color = "#1F242C";
    textColor.style.transition = ".1s ease";
  });
  hoverButton.addEventListener("mouseout", () => {
    textColor.style.color = "#AAB9D0";
    textColor.style.transition = ".1s";
  });

  const tabs = document.querySelectorAll(".tab-list__item");
  const tabsContent = document.querySelectorAll(".tab-content__item");
  const tabsParent = document.querySelector(".tab-list");
  const tabsValue = document.querySelectorAll(".tab-list__value");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("content-hide");
      item.classList.remove("activ");
    });

    tabs.forEach((item) => {
      item.classList.remove("active");
    });
    tabsValue.forEach((item) => {
      item.classList.remove("green");
    });
  }

  function showTabContent(i = 0) {
    // show tabs
    tabsContent[i].classList.add("activ");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("active");
    tabsValue[i].classList.add("green");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tab-list__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  tabs.forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      item.classList.add("hover-active");
    });
  });

  tabs.forEach((item) => {
    item.addEventListener("mouseleave", () => {
      item.classList.remove("hover-active");

      // tabsValue.forEach((tab, i) => {
      //   tab[i].style.backgroundColor = '#3AE5A3'
      // })
    });
  });
  tabs.forEach((item, i) => {
    item.addEventListener("mouseenter", () => {
      tabsValue[i].classList.add("hover-green");
    });
    item.addEventListener("mouseleave", () => {
      tabsValue[i].classList.remove("hover-green");
    });
  });

  const inputButton = document.querySelector(".distribution-button");
  const input = document.querySelector(".distribution__input");
  inputButton.addEventListener("click", (e) => {
    e.preventDefault();
    input.value = "";
  });

  // document.querySelectorAll('.c').forEach((item) => {
  //   item.addEventListener('toggle', (event) => {
  //     if (event.target.open) {
  //       document.querySelectorAll('.faq details').forEach((otherItem) => {
  //         if (otherItem !== event.target) {
  //           otherItem.removeAttribute('open');
  //         }
  //       });
  //     }
  //   });
  // });
  const items = document.querySelectorAll(".accordion-button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));

  let menuButton = document.querySelector(".nav-hamburger");
  let menuNav = document.querySelector(".nav-mobile");
  menuButton.addEventListener("click", () => {
    menuNav.classList.toggle("nav-mobile--visible");
    // document.body.style.overflow = "hidden";
  });
});
