/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, EffectFade, Controller } from 'swiper';
import { slideIndexChange } from './script.js';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  let referencieSlider;
  let popupSlider;
  if (document.querySelector('.referencie__slider.swiper')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    referencieSlider = new Swiper('.referencie__slider.swiper', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Controller],
      observer: true,
      observeParents: true,
      slidesPerView: 2.3,
      spaceBetween: 50,
      autoHeight: false,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.referencie__prev.swiper-button-prev',
        nextEl: '.referencie__next.swiper-button-next',
      },

      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1140: {
          slidesPerView: 2.3,
          spaceBetween: 50,
        },
      },

      // События
      on: {
        tap: (e) => {
          slideIndexChange(referencieSlider, popupSlider, e);
        },
      },
    });
  }
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.popup__slider.swiper')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    popupSlider = new Swiper('.popup__slider.swiper', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, EffectFade, Controller],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        nextEl: '.slide-popup__button.swiper-button-next',
      },

      // Брейкпоинты
      /*
      breakpoints: {
        320: {
		 autoHeight: true,
        },
        992: {
			 autoHeight: false,
        },
      
      },
*/
      // События
      on: {},
    });
  }
  if (document.querySelector('.photo-slider__slider.swiper')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.photo-slider__slider.swiper', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, EffectFade],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      // Эффекты
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.photo-slider__prev.swiper-button-prev',
        nextEl: '.photo-slider__next.swiper-button-next',
      },

      // Брейкпоинты
      /*
      breakpoints: {
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1140: {
          slidesPerView: 2.3,
          spaceBetween: 50,
        },
      },
*/
      // События
      on: {},
    });
  }

  if (referencieSlider && popupSlider) {
    referencieSlider.controller.control = popupSlider;
    popupSlider.controller.control = referencieSlider;
  }
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
