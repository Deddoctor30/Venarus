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
         responsive: [
           {
             breakpoint: 1224,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               // dots: true
             }
           },
         ]
       });
   }

}

export default productSlider;