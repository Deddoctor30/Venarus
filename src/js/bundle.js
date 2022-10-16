/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const burger = () => {
  const trigger = document.querySelector('.header__burger-trigger'),
        content = document.querySelector('.header__menu'),
        burgerTrigger = document.querySelector('#burger-trigger'),
        bg = document.querySelector('.wrapper');

  const changer = () => {
    content.classList.toggle('_active');
    trigger.classList.toggle('_active-trigger');

    if (burgerTrigger.getAttribute("src") === "./img/header/burger__full.png") {
      burgerTrigger.setAttribute("src", "./img/header/burger__half.png");
      document.body.style.overflow = 'hidden';
    } else {
      burgerTrigger.setAttribute("src", "./img/header/burger__full.png");
      document.body.style.overflow = '';
    }

    bg.classList.toggle('wrapper-background');
  };

  trigger.addEventListener('click', () => {
    changer();
  });
  document.addEventListener('keyup', event => {
    if (event.code === 'Escape' && !content.classList.contains('_active')) {
      changer();
    }
  });
  document.addEventListener('click', event => {
    if (event.target === bg && bg.classList.contains('wrapper-background')) {
      changer();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/manufactury-slider.js":
/*!**********************************************!*\
  !*** ./src/js/modules/manufactury-slider.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function manufacturySlider() {
  if (document.querySelector('.manufactury__slider')) {
    $('.manufactury__items').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToScroll: 1,
      slidesToShow: 2,
      variableWidth: true,
      prevArrow: $('.manufactury__controls-prew-arrow'),
      nextArrow: $('.manufactury__controls-next-arrow'),
      responsive: [{
        breakpoint: 1200,
        settings: {
          arrows: false
        }
      }]
    });
  }

  const prevArrow = document.querySelector(".manufactury__controls-prew-arrow"),
        nextArrow = document.querySelector(".manufactury__controls-next-arrow");
  currentChanger();
  prevArrow.addEventListener('click', () => {
    currentChanger();
  });
  nextArrow.addEventListener('click', () => {
    currentChanger();
  });

  function currentChanger() {
    document.querySelectorAll(".manufactury__item").forEach(item => {
      if (item.classList.contains('slick-current')) {
        item.style.cssText = `
          width: 263px;
          height: 150px;
      `;
      } else {
        item.style.cssText = `
        width: 458px;
        height: 270px;
    `;
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (manufacturySlider);

/***/ }),

/***/ "./src/js/modules/product-slider.js":
/*!******************************************!*\
  !*** ./src/js/modules/product-slider.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function productSlider() {
  if (document.querySelector('.main__product')) {
    $('.product__slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToScroll: 1,
      slidesToShow: 1,
      variableWidth: true,
      prevArrow: $('.controlls__prew-arrow'),
      nextArrow: $('.controlls__next-arrow'),
      responsive: [{
        breakpoint: 1224,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true // dots: true

        }
      }]
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (productSlider);

/***/ }),

/***/ "./src/js/modules/search.js":
/*!**********************************!*\
  !*** ./src/js/modules/search.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function search() {
  const searchInner = document.querySelector('.search__input'),
        logo = document.querySelector('.header__logo img'),
        trigger = document.querySelector('.search__button');
  trigger.addEventListener('click', () => {
    searchInner.classList.toggle('header__hide');

    if (window.screen.width < 458) {
      logo.classList.toggle('logo-hide');
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/js/modules/spec-slider.js":
/*!***************************************!*\
  !*** ./src/js/modules/spec-slider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function cardSlider() {
  if (document.querySelector('.spec__slider')) {
    $('.spec__items').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (cardSlider);

/***/ }),

/***/ "./src/js/modules/videoControlls.js":
/*!******************************************!*\
  !*** ./src/js/modules/videoControlls.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const videoControlls = () => {
  const media = document.querySelectorAll('video'),
        button = document.querySelector('.manufactury__play');

  const playPause = item => {
    if (item.paused) {
      button.classList.add('paused');
      item.play();
    } else {
      button.classList.remove('paused');
      item.pause();
    }
  };

  const hideControlls = () => {
    button.style.cssText = `visibility: hidden;`;
  };

  const showControlls = () => {
    button.style.cssText = `visibility: visible;`;
  }; // Запуск по клику ан видел


  media.forEach(item => {
    item.addEventListener('click', () => {
      if (item.classList.contains('slick-active') && !item.classList.contains('slick-current')) {
        playPause(item);
      }
    });
  }); // Запуск по клику на кнопку

  button.addEventListener('click', () => {
    media.forEach(item => {
      if (item.classList.contains('slick-active') && !item.classList.contains('slick-current')) {
        playPause(item);
      }
    });
  }); // Появление у сокрытие кнопки при наведении мышки на окно видео

  media.forEach(item => {
    item.addEventListener('mouseenter', showControlls);
  });
  media.forEach(item => {
    item.addEventListener('mouseleave', hideControlls);
  }); // Чтобы не было бага с сокрытием кнопки

  button.addEventListener('mouseenter', showControlls);
  button.addEventListener('mouseleave', hideControlls);
};

/* harmony default export */ __webpack_exports__["default"] = (videoControlls);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_videoControlls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/videoControlls */ "./src/js/modules/videoControlls.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/js/modules/search.js");
/* harmony import */ var _modules_product_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/product-slider */ "./src/js/modules/product-slider.js");
/* harmony import */ var _modules_spec_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/spec-slider */ "./src/js/modules/spec-slider.js");
/* harmony import */ var _modules_manufactury_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/manufactury-slider */ "./src/js/modules/manufactury-slider.js");
 // import burger from './modules/burger';
// import filter from './modules/filter';
// import slider from './modules/slider';
// import login from './modules/login';
// import cards from './modules/cards';
// import form from './modules/form';
// import email from './modules/email';
// import {open} from './modules/login';
// import catalog from './modules/catalog';
// import catalogSlider from './modules/catalog-slider';







window.addEventListener('DOMContentLoaded', () => {
  // const timeOut = setTimeout(() => open('.modal', timeOut), 500000);
  // form();
  // burger();
  // filter('.slider__item', '.goods__item');
  // if (document.querySelector('.collection__slider')) {
  //    slider({
  //       container: '.blog__items',
  //       cards: '.blog__item',
  //       wrap: '.blog__wrapper',
  //       nextArr: '.blog__arrow-next',
  //       prevArr: '.blog__arrow-prew'
  //    });
  // }
  // login('.modal', '.account__login', timeOut);
  // cards('.social__yt-video');
  // email();
  // catalog();
  // catalogSlider();
  (0,_modules_videoControlls__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_search__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_product_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_manufactury_slider__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_spec_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map