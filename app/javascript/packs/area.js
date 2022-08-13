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
          if (i < 10 || i >= 20) {
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

      case '5':
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


     case '81':
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


      case '19':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      case '20':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      case '21':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      case '22':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '23':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '24':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '25':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '26':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '27':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '28':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '29':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '30':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '31':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '32':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '33':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '34':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '35':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '36':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '37':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '38':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '39':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '40':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '41':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '42':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '43':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '44':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '45':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '46':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '47':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '48':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '49':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '50':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '51':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


     case '52':
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









