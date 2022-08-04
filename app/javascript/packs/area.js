window.onload = function(){ 

  //選択肢たカテゴリーid情報を取得
  let TokyoStateId = $('.tokyo-state-box').val();
    
  
    
  

  //カテゴリーが初期値でない場合
   if (TokyoStateId != "") {
    $('.tokyo-state-box').val('');
    $('.tokyo-state-box option').css('display', 'block');
    $('#tokyo-state-box').css('display', 'block');

    //state-boxのid3を取得すると、area-boxのid5から10、30以上を消す
   if (TokyoStateId == 3) {
   $('.tokyo-area-box option[value]').each(function(i) {
    $('.tokyo-area-box option[value =' (i) >=5&&i<20 ,']').css('display', 'none');
      }
      )}
       }
         };
