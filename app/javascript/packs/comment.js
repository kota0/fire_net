$(document).on('turbolinks:load', function() {
  $('.comment-form-text').on('input', function() {
    var text_length = $(this).val().length;
    if (text_length % 14 === 0) {
      this.style.height = "";
      this.style.height = this.scrollHeight + "px";
    }
  });
});
