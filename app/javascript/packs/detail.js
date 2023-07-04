window.addEventListener('turbolinks:load', function() {
  $(".detail-btn").on("click", function () {
    var post = $(this).closest(".post");
  
    post.toggleClass("add-height");
    post.find(".post-body").toggleClass("add-height");
    post.find(".post-detail-wrapper").toggleClass("add-height");

    if ($(this).text() === '∨ すべて表示する') {
      $(this).text('∧ 閉じる');
    } else {
      $(this).text('∨ すべて表する');
    }
  });
   $(".detail-btn").on("click", function () {
     $(".show-detail-wrapper").toggleClass("add-height-w");
     });
});

