$(function () {
  $('#post_state_id').on('change', function () {
      let TokyoStateId = $('.tokyo-state-box ').val();

      $('.tokyo-area-box').val('');
      $('.tokyo-area-box option').css('display', 'block');
      $('#post_area_id').css('display', 'block');


      
  switch (TokyoStateId){
     case '0':
        $('.tokyo-area-box option[value ]').css('display', 'none');
     break;
           
      

     case '1':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 40) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '3':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '4':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '6':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '7':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '8':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '9':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '10':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '11':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '12':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '13':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '14':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '15':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '16':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '17':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '18':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;









          }
          })
        });









