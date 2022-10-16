function cardSlider() {
   if (document.querySelector('.spec__slider')) {
      $('.spec__items').slick({
         dots: true,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         slidesToScroll: 1,
         variableWidth: true,
       });
   }

}

export default cardSlider;