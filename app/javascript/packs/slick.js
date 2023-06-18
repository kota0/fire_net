window.addEventListener('turbolinks:load', function() {
  $('.post-media-images').slick({
    speed: 500,
    fade: true,
    arrows: true,
    dots: true,
    infinite: true,
    cssEase: 'linear'
  });
});
