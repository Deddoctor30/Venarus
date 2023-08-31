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
         prevArrow: $('.manufactury__controls-prew-arrow-img'),
         nextArrow: $('.manufactury__controls-next-arrow-img'),
         responsive: [
           {
             breakpoint: 1200,
             settings: {
               arrows: false,
             }
           },
           {
             breakpoint: 1100,
             settings: {
              slidesToShow: 1,
             }
           },
         ]
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
     })
   }
}

export default manufacturySlider;