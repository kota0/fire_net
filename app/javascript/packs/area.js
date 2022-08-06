$(function () {
  $('#post_state_id').on('change', function () {
      let TokyoStateId = $('.tokyo-state-box ').val();

      $('.tokyo-area-box').val('');
      $('.tokyo-area-box option').css('display', 'block');
      $('#post_area_id').css('display', 'block');

  switch (TokyoStateId){
     case '1':
        $('.tokyo-area-box option[value ]').css('display', 'none');
            i++;
     break;
           
      

     case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '3':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 10 || i >= 20) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      case '2':
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










      // if (TokyoStateId === "1") {
      //   $('.tokyo-area-box option[value ]').css('display', 'none');
      //       i++;
      //  }

      // if (TokyoStateId === "3") {
      //   $('.tokyo-area-box option[value]').each(function (i) {
      //       if (i < 10 || i >= 15) {
      //           $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
      //       }
      //       i++;
      //   })
      // }







      // if (TokyoStateId === "3") {
      //     $('.tokyo-area-box option[value]').each(function (i) {
      //         if (i < 10 || i >= 20) {
      //             $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
      //         }
      //         i++;
      //     })
      //   }
      // } else {
      //     $('.tokyo-area-box option[value]').each(function (i) {
      //         if (i >= 10 && i < 20) {
      //             $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
      //         }
      //         i++;
      //     })
      // }
//    }
//  });