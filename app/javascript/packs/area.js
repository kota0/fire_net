$(function () {
  $('#post_state_id').on('change', function () {
      let TokyoStateId = $('.tokyo-state-box ').val();

      $('.tokyo-area-box').val('');
      $('.tokyo-area-box option').css('display', 'block');
      $('#post_area_id').css('display', 'block');


      
  switch (TokyoStateId) {

      // 指定なし
      case '0':
        $('.tokyo-area-box option[value ]').css('display', 'none');
      break;
           

      // 千代田区
      case '1':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 0 || i >= 59) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      //中央区
      case '2':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 60 || i >= 96) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 港区
      case '3':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 10 || i >= 20) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 新宿区
      case '4':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 文京区
      case '5':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 台東区
      case '6':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 墨田区
      case '7':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 品川区
      case '8':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 江東区
      case '9':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      

      // 目黒区
      case '10':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 大田区
      case '11':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 世田谷区
      case '12':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 渋谷区
      case '13':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 中野区
      case '14':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 杉並区
     case '15':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 豊島区
      case '16':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 北区
      case '17':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 荒川区
     case '18':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 板橋区
      case '19':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      

      // 練馬区
      case '20':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 足立区
      case '21':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 葛飾区
      case '22':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 江戸川区
      case '23':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 八王子
      case '24':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 立川
      case '25':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 武蔵野市
      case '26':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 三鷹市
      case '27':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 青梅市
      case '28':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 府中市
      case '29':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 昭島市
      case '30':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 調布市
      case '31':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 町田市
      case '32':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 小金井市
      case '33':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 小平市
      case '34':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 日野市
      case '35':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 東村山市
      case '36':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 国分寺市
      case '37':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 国立市
      case '38':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 福生市
      case '39':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 狛江市
      case '40':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 東大和市
      case '41':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 清瀬市
      case '42':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 東久留米市
      case '43':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 武蔵村山市
      case '44':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 多摩市
      case '45':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 稲城市
      case '46':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 羽村市
      case '47':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // あきる野市
      case '48':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 西東京市
      case '49':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 瑞穂町
      case '50':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 日の出村
      case '51':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 檜原村
      case '52':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 30 || i >= 45) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 奥多摩村
      case '53':
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









