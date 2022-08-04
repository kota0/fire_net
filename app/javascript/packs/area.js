$(document).on('change', '#tokyo-area-box', function() {
  //選択肢たカテゴリーid情報を取得
     let TokyoStateId = $('#post_state_id').val();
     let TokyoAreaId = $('#post_area_id').val();
  

  //カテゴリーが初期値でない場合
   if (TokyoStateId != "") {
    $('.tokyo-state-box').val('');
    $('.tokyo-state-box option').css('display', 'block');
    $('#tokyo-state-box').css('display', 'block');

    //カテゴリー選択によって、サイズボックスの選択肢を変更
   if (TokyoStateId == 3) 
   $('.tokyo-area-box option[value]').each(function(i) {
      $('.tokyo-area-box option[value = ['i=<39'].css('display', 'none');
      )};
      
  