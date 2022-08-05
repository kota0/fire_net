$(function(){ 

  
  $('#post_state_id').on('change',function(){
  
  
    let TokyoStateId = $('.tokyo-state-box ').val();
    let TokyoAreaId = $('.tokyo-area-box ').val();

 
   if (TokyoStateId == "3" ) {
    
    // $('.tokyo-area-box option[value]').css('display', 'block');

    $('.tokyo-area-box option[value]').css('display', 'block');
    $('.tokyo-area-box option[value]').each(function(i) {
      if (i>38) {
        $('.tokyo-area-box option[value = ' +(i)+ ']').css('display', 'none');

        // ここの記述で選択したid以外を非表示にする
        var r = $('option:tokyo-state-box').val();
        $(r != i).css('display', 'block');


       }
      })
    }
  })
});