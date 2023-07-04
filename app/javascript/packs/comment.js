$(document).on('turbolinks:load', function() {
  $('.text-form').on('input', function() {
    var text_length = $(this).val().length;
    if (text_length % 14 === 0) {
      var $container = $(this).parent();
      this.style.height = '30px';
      this.style.height = this.scrollHeight + "px";
      $container.height($(this)[0].scrollHeight);
    }
  });
});
