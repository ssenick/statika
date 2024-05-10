// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

//! svg animaton
export function svgAnimation(perentSelector) {
  if (window.innerWidth > 992) {
    const perent = document.querySelector(perentSelector),
      lines = perent.querySelectorAll('.line');
    let len = 0,
      speed = 5,
      delay = 0;

    lines.forEach((el) => {
      let elementLen = el.getTotalLength();
      len += elementLen;
    });

    lines.forEach((el) => {
      let elementLen = el.getTotalLength();

      let duraction = (elementLen / len) * speed;
      if (el.closest('.line-v') || el.closest('.line-g')) {
        el.style.animationDuration = `1.5s`;
        el.style.animationDelay = `${delay}s`;
        el.setAttribute('stroke-dasharray', elementLen);
        el.setAttribute('stroke-dashoffset', elementLen);
        delay += 0.06;
      } else {
        el.style.animationDuration = `${duraction}s`;
        el.style.animationDelay = `${delay}s`;
        el.setAttribute('stroke-dasharray', elementLen);
        el.setAttribute('stroke-dashoffset', elementLen);
        delay += 0.04;
      }
    });
  }
}

//form tel
if (document.querySelector('input[type="tel')) {
  document.querySelector('input[type="tel').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^\d.]/g, '');
  });
}

//! logo header show
document.addEventListener('resize', showLogoHeader);
export function showLogoHeader() {
  const scrollTop = window.scrollY,
    logoHeader = document.querySelector('.header__logo') ? document.querySelector('.header__logo') : null,
    heigthHeader = document.querySelector('.header').offsetHeight * 1.5,
    selector = document.querySelector('#about-us').offsetTop ? document.querySelector('#about-us').offsetTop : null;
  if (selector - heigthHeader <= scrollTop && !logoHeader.closest('._active')) {
    logoHeader.classList.add('_active');
  } else if (selector - heigthHeader >= scrollTop && logoHeader.classList.contains('_active')) {
    logoHeader.classList.remove('_active');
  }
}
showLogoHeader();

//! change insex slide
export function slideIndexChange(sliderMain, sliderPopup, event) {
  if (sliderMain && sliderPopup) {
    const clickedIndex = event.clickedIndex;
    sliderPopup.activeIndex = clickedIndex;
  }
}
//=================================
//=================================


















