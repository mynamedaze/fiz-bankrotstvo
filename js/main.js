'use strict';
$(document).ready(function () {

  var callbackInputPhone = document.getElementById('callback-input-phone');
  var inputPhoneFinal = document.getElementById('input-phone-final');

  //progressbar

  var progressStage = document.getElementById('progress-stage');
  var progressBar = document.getElementById('progressbar');

  //stage 1

  var stage1 = document.getElementById('stage1');
  var stageRadiobtn1 = document.getElementsByClassName('stage__radiobtn-1');
  var next1 = document.getElementById('next1');

  var summa;

  $(stageRadiobtn1).click(function () {
    summa = this.value;
    console.log(summa);
  });

  $(next1).click(function () {
    if (summa) {
      $(stage1).fadeOut(300);
      setTimeout(function () {
        $(stage2).fadeIn(300);
      }, 300);
      progressStage.textContent = '2';
      $(progressBar).css('width', '20%');
    }
  });
  /* */

  /* stage 2 */

  var stage2 = document.getElementById('stage2');
  var stageRadiobtn2 = document.getElementsByClassName('stage__radiobtn-2');
  var next2 = document.getElementById('next2');
  var back2 = document.getElementById('back2');

  var last3;

  $(stageRadiobtn2).click(function () {
    last3 = this.value;
    console.log(last3);
  });

  $(next2).click(function () {
    if (last3) {
      $(stage2).fadeOut(300);
      setTimeout(function () {
        $(stage3).fadeIn(300);
      }, 300);
      progressStage.textContent = '3';
      $(progressBar).css('width', '40%');
    }
  });

  $(back2).click(function () {
    $(stage2).fadeOut(300);
    setTimeout(function () {
      $(stage1).fadeIn(300);
    }, 300);
    progressStage.textContent = '1';
    $(progressBar).css('width', '20%');
  });
  /* */

  /* stage 3 */

  var stage3 = document.getElementById('stage3');
  var stageCheckbtn3 = document.getElementsByClassName('stage__checkbtn-3');
  stageCheckbtn3 = Array.prototype.slice.call(stageCheckbtn3);
  var next3 = document.getElementById('next3');
  var who;

  $(next3).click(function () {
    who = [];
    for (var i = 0; i < stageCheckbtn3.length; i++) {
      if (stageCheckbtn3[i].checked) {
        who = who.concat(stageCheckbtn3[i].value);
      }
    }
    who = who.join(', ');
    console.log(who);
    if (who.length > 0) {
      $(stage3).fadeOut(300);
      setTimeout(function () {
        $(stage4).fadeIn(300);
      }, 300);
      progressStage.textContent = '4';
      $(progressBar).css('width', '60%');
    }
  });

  $(back3).click(function () {
    $(stage3).fadeOut(300);
    setTimeout(function () {
      $(stage2).fadeIn(300);
    }, 300);
    progressStage.textContent = '2';
    $(progressBar).css('width', '40%');
  });
  /* */

  /* stage 4 */

  var stage4 = document.getElementById('stage4');
  var stageRadiobtn4 = document.getElementsByClassName('stage__radiobtn-4');
  var next4 = document.getElementById('next4');
  var back4 = document.getElementById('back4');

  var kredit;

  $(stageRadiobtn4).click(function () {
    kredit = this.value;
    console.log(kredit);
  });

  $(next4).click(function () {
    if (kredit) {
      $(stage4).fadeOut(300);
      setTimeout(function () {
        $(stage5).fadeIn(300);
      }, 300);
      progressStage.textContent = '5';
      $(progressBar).css('width', '80%');
    }
  });

  $(back4).click(function () {
    $(stage4).fadeOut(300);
    setTimeout(function () {
      $(stage3).fadeIn(300);
    }, 300);
    progressStage.textContent = '3';
    $(progressBar).css('width', '60%');
  });
  /* */

  /* stage 5 */

  var stage5 = document.getElementById('stage5');
  var stageRadiobtn5 = document.getElementsByClassName('stage__radiobtn-5');
  var next5 = document.getElementById('next5');
  var back5 = document.getElementById('back5');

  var dvig;

  $(stageRadiobtn5).click(function () {
    dvig = this.value;
    console.log(dvig);
  });

  $(next5).click(function () {
    if (dvig) {
      $(stage5).fadeOut(300);
      setTimeout(function () {
        $(stage6).fadeIn(300);
      }, 300);
      progressStage.textContent = '6';
      $(progressBar).css('width', '90%');
    }
  });

  $(back5).click(function () {
    $(stage5).fadeOut(300);
    setTimeout(function () {
      $(stage6).fadeIn(300);
    }, 300);
    progressStage.textContent = '4';
    $(progressBar).css('width', '80%');
  });
  /* */

  /* stage 6 */

  var stage6 = document.getElementById('stage6');
  var stageRadiobtn6 = document.getElementsByClassName('stage__radiobtn-6');
  var next6 = document.getElementById('next6');
  var back6 = document.getElementById('back6');

  var nedvig;

  $(stageRadiobtn6).click(function () {
    nedvig = this.value;
    console.log(nedvig);
  });

  $(next6).click(function () {
    if (nedvig) {
      $(stage6).fadeOut(300);
      setTimeout(function () {
        $(stageFinal).fadeIn(300);
      }, 300);
      allOptions.value = 'Общая сумма долга (кредиты + расписки + налоги + ЖКХ): ' + summa + '\nБыли ли сделки с имуществом за последние 3 года: ' + last3 + '\nПеред кем задолженность: ' + who + '\nЕсть ипотека или автокредит:' + kredit + '\nЕсть ли движимое имущество в собственности: ' + dvig + '\nЕсть ли недвижимое имущество в собственности: ' + nedvig;
      progressStage.textContent = '7';
      $(progressBar).css('width', '100%');
    }
  });

  $(back6).click(function () {
    $(stage6).fadeOut(300);
    setTimeout(function () {
      $(stage5).fadeIn(300);
    }, 300);
    progressStage.textContent = '5';
    $(progressBar).css('width', '80%');
  });
  /* */

  //stage-final

  var stageFinal = document.getElementById('stage-final');
  var allOptions = document.getElementById('alloptions-field');
  
  // stage-success
  var stageSuccess = document.getElementById('stage-success');
  //form-lite
  var popup = document.getElementsByClassName('popup');

  var overlay = document.getElementsByClassName('overlay');
  var pageHeaderButton = document.getElementsByClassName('page-header__button');
  var pageFooterButton = document.getElementsByClassName('page-footer__btn');

  var popupCallback = document.getElementsByClassName('popup-callback');
  var popupCallbackCloseBtn = document.getElementsByClassName('popup-callback__close-btn');

  var popupSuccess = document.getElementsByClassName('popup-success');
  var popupSuccessBtn = document.getElementsByClassName('popup-success__btn');
  var popupSuccessCloseBtn = document.getElementsByClassName('popup-success__close-btn');

  function closePopup(popup) {
    $(popup).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  }

  $(overlay).click(function () {
    $(popup).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  });

  $(pageHeaderButton).click(function () {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCallback).fadeIn(300);
    }, 300);
  });

  $(pageFooterButton).click(function () {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupCallback).fadeIn(300);
    }, 300);
  });

  $(popupCallbackCloseBtn).click(function () {
    closePopup(popupCallback);
  });

  $(popupSuccessBtn).click(function () {
    closePopup(popupSuccess);
  });

  $(popupSuccessCloseBtn).click(function () {
    closePopup(popupSuccess);
  });

  //валидация номеров

  $(callbackInputPhone).inputmask("+X (999) 999-9999", {
    definitions: {
      "X": {
        validator: "[7-9]",
      }
    },
    oncomplete: function () {
      $(this).val('+7' + $(this).val().substring(2));
    }
  }); //specifying options
  $(inputPhoneFinal).inputmask(
    "+X (999) 999-9999", {
    definitions: {
      "X": {
        validator: "[7-9]",
      }
    },
    oncomplete: function () {
      $(this).val('+7' + $(this).val().substring(2));
    }
  }); //specifying options

  /* form-lite */
  var formLite = $('#form-lite');

  formLite.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/mail-lite.php',
      data: formLite.serialize(),
      success: function (data) {
        yaCounter55263280.reachGoal('form-lite');
        $(popupCallback).fadeOut(300);
        setTimeout(function () {
          $(popupSuccess).fadeIn(300);
        }, 300);
      }
    });
    ev.preventDefault();
  });
  /* */

  /* form-final */
  var formFinal = $('#form-final');

  formFinal.submit(function (ev) {
    $.ajax({
      type: 'POST',
      url: '/mail.php',
      data: formFinal.serialize(),
      success: function (data) {
        yaCounter55263280.reachGoal('form-final');
        $(stageFinal).fadeOut(300);
        setTimeout(function () {
          $(stageSuccess).fadeIn(300);
        }, 300);
      }
    });
    ev.preventDefault();
  });
  /* */
  /*парсим utm и определяем с какого Города зашли*/
  function findEnd(url, urlpos) {
    for (var i = urlpos; i <= url.length; i++) {
      if (url[i] == '&') {
        return i;
      } else if (i == (url.length - 1)) {
        return i + 1;
      }
    }
  }

  function findUtmInfo(utmInfoStr) {
    var utmInfoStart = utmUrl.indexOf(utmInfoStr);
    var utmNameLength = utmInfoStr.length + 1;
    var utmInfoStartInt = parseInt(utmInfoStart) + utmNameLength;
    var utmInfoEndInt = findEnd(utmUrl, utmInfoStartInt);
    var utmInfo = utmUrl.slice(utmInfoStartInt, utmInfoEndInt);
    return utmInfo;
  }

  var utmUrl = decodeURI(document.location.search);

  var utmSource = findUtmInfo('utm_source');
  var utmMedium = findUtmInfo('utm_medium');
  var utmCampaign = findUtmInfo('utm_campaign');
  var utmContent = findUtmInfo('utm_content');
  var utmTerm = findUtmInfo('utm_term');
  console.log('utm_source: ' + utmSource + '; utm_medium: ' + utmMedium + '; utm_campaign: ' + utmCampaign + '; utm_content: ' + utmContent + '; utm_term: ' + utmTerm);
  /* */
});