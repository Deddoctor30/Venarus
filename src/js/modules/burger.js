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
            // document.body.style.overflow = 'hidden';
      } else {
         burgerTrigger.setAttribute("src", "./img/header/burger__full.png");
         // document.body.style.overflow = '';
      }
      bg.classList.toggle('wrapper-background');
   }

   trigger.addEventListener('click', () => {
      changer();
   });

   document.addEventListener('keyup', (event) => {
      if (event.code === 'Escape' && !content.classList.contains('_active')) {
         changer();
      }
   });

   document.addEventListener('click', (event) => {
      if (event.target === bg && bg.classList.contains('wrapper-background')) {
         changer();
      }
   });
}

export default burger;