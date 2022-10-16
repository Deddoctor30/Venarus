function search () {
   const searchInner = document.querySelector('.search__input'),
         logo = document.querySelector('.header__logo img'),
         trigger = document.querySelector('.search__button');

   trigger.addEventListener('click', () => {
      searchInner.classList.toggle('header__hide');
      if (window.screen.width < 458) {
         logo.classList.toggle('logo-hide')
      }
   });
}

export default search;