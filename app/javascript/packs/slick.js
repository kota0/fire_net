window.addEventListener('turbolinks:load', function() {
  $('.slider').slick({
    speed: 500,
    fade: true,
    arrows: true,
    dots: true,
    infinite: true,
    cssEase: 'linear'
  });
});
