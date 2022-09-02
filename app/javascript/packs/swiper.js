document.addEventListener("DOMContentLoaded", function(){
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
   slidesPerView: 1,
	 spaceBetween: 2,
	 initialSlide: 1,
    loop: true,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
});
