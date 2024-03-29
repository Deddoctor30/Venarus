const videoControlls = () => {
   const media = document.querySelectorAll('video'),
         button = document.querySelector('.manufactury__play');
   const playPause = (item) => {
      if (item.paused) {
         button.classList.add('paused');
         item.play();
      } else {
         button.classList.remove('paused');
         item.pause();
      }
   }
   const hideControlls = () => {
      button.style.cssText = `visibility: hidden;`;
   }
   const showControlls = () => {
      button.style.cssText = `visibility: visible;`;
   }
   media.forEach((item) => {
      item.addEventListener('click', () => {
         if (item.classList.contains('slick-active') && !item.classList.contains('slick-current')) {
            playPause(item)
         }
      })
   })
   button.addEventListener('click', () => {
      media.forEach((item) => {
         if (item.classList.contains('slick-active') && !item.classList.contains('slick-current')) {
            playPause(item)
         }
      })
   });
   media.forEach((item) => {
      item.addEventListener('mouseenter', showControlls)
   })
   media.forEach((item) => {
      item.addEventListener('mouseleave', hideControlls)
   })
   button.addEventListener('mouseenter', showControlls)
   button.addEventListener('mouseleave', hideControlls)
}

export default videoControlls;