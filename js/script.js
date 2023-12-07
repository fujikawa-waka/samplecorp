//nav
$(function () {
  var $header = $('#js-header');
  $('a[href*="#"]').click(function () {
    var href = $(this).attr('href');
    var target = $(href === '#' || href === '' ? 'html' : href);
    var position = target.offset().top - $header.outerHeight();
    $('body,html').animate({ scrollTop: position }, 500);
  });
});

//ハンバーガーメニュー
$(function () {
  $(document).ready(function () {
    $('.drawer').drawer();
    $('.drawer-nav').on('click', function () {
      $('.drawer').drawer('close');
    });
  });
});
//スライダー//
$(function () {
  const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 24,
    loop: true,
    width: 274,
    loopedSlides: 6,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        width: 400,
        spaceBetween: 40,
      }
    }
  });
});

//QA//
$('.qa__box-q').on('click', function () {
  $(this).next().slideToggle();
  $(this).children('.qa__box-icon').toggleClass('is-open');
});

$(document).ready(function () {
  $('.drawer').drawer();
});

//contact
$(function () {

  $('.contact__btn').prop("disabled", true);

  $('form input:required').change(function () {

    let flag = true;
    $('form input:required').each(function (e) {
      if ($('form input:required').eq(e).val() === "") {
        flag = false;
      }
    });
    if (flag) {
      $('.contact__btn').prop("disabled", false);
    }
    else {
      $('.contact__btn').prop("disabled", true);
    }
  });
});

//page-top
$(function () {
  var pageTop = $('#js-page_top');
  pageTop.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  }
  );

  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});