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

          if (i < 59 || i >= 96) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 港区
      case '3':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 96 || i >= 126) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 新宿区
      case '4':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 126 || i >= 222) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 文京区
      case '5':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 222 || i >= 241) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 台東区
      case '6':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 241 || i >= 275) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 墨田区
      case '7':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 275 || i >= 301) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 江東区
      case '8':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 301 || i >= 348) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 品川区
      case '9':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 348 || i >= 375) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      

      // 目黒区
      case '10':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 375 || i >= 402) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 大田区
      case '11':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 402 || i >= 461) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 世田谷区
      case '12':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 461 || i >= 522) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 渋谷区
      case '13':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 522 || i >= 554) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 中野区
      case '14':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 554 || i >= 572) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 杉並区
     case '15':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 573 || i >= 609) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      

      // 豊島区
      case '16':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 609 || i >= 629) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 北区
      case '17':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 629 || i >= 659) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 荒川区
     case '18':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 659 || i >= 666) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 板橋区
      case '19':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 666 || i >= 724) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 練馬区
      case '20':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 724 || i >= 770) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 足立区
      case '21':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 770 || i >= 858) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 葛飾区
      case '22':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 858 || i >= 888) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 江戸川区
      case '23':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 888 || i >= 936) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 八王子
      case '24':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 936 || i >= 1055) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 立川
      case '25':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1055 || i >= 1071) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 武蔵野市
      case '26':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1071 || i >= 1084) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 三鷹市
      case '27':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1084 || i >= 1097) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 青梅市
      case '28':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1097 || i >= 1141) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 府中市
      case '29':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1141 || i >= 1179) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 昭島市
      case '30':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1179 || i >= 1198) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 調布市
      case '31':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1198 || i >= 1225) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 町田市
      case '32':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1225 || i >= 1279) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 小金井市
      case '33':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1179 || i >= 1289) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 小平市
      case '34':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1289 || i >= 1311) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 日野市
      case '35':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1311 || i >= 1340) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 東村山市
      case '36':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1340 || i >= 1353) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 国分寺市
      case '37':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1353 || i >= 1372) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 国立市
      case '38':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1372 || i >= 1382) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 福生市
      case '39':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1832 || i >= 1394) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 狛江市
      case '40':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1395 || i >= 1406) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 東大和市
      case '41':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1406 || i >= 1419) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 清瀬市
      case '42':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1419 || i >= 1430) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 東久留米市
      case '43':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1430 || i >= 1453) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 武蔵村山市
      case '44':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1453 || i >= 1467) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 多摩市
      case '45':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1467 || i >= 1489) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 稲城市
      case '46':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1489 || i >= 1499) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 羽村市
      case '47':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1499 || i >= 1514) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // あきる野市
      case '48':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1514 || i >= 1555) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 西東京市
      case '49':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1555 || i >= 1577) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 瑞穂町
      case '50':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1577 || i >= 1593) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;


      // 日の出村
      case '51':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1593 || i >= 1595) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      
      // 檜原村
      case '52':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1595 || i >= 1607) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;

      // 奥多摩村
      case '53':
        $('.tokyo-area-box option[value]').each(function (i) {
          if (i < 1607 || i > 1621) {
              $('.tokyo-area-box option[value = ' + (i) + ']').css('display', 'none');
          }
          i++;
          })
      break;
      

          }
          })
        });






