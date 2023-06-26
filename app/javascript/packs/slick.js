window.addEventListener('turbolinks:load', function() {
  applySlick('.post-media-images');
  applySlick('.show-media-images');
});

function applySlick(selector) {
  $(selector).slick({
    speed: 500,
    fade: true,
    arrows: true,
    dots: true,
    infinite: true,
    cssEase: 'linear'
  });
}
