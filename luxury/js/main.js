'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  var _TodaySpecialCarousel;

  var mobileBreakpoint = 1000; // Menu open

  $('.hamburger').on('click', function () {
    $('body').addClass('Body-MenuOpened');
    $(this).addClass('is-active');
    blockScroll(true);
  });
  $(document).on('mouseup', function (e) {
    if ($(e.target).is('.page-wrapper') && $('body').hasClass('Body-MenuOpened')) {
      $('.hamburger').removeClass('is-active');
      $('body').removeClass('Body-MenuOpened');
      blockScroll(false);
    }
  });
  $(window).resize(function () {
    if ($(this).outerWidth() > mobileBreakpoint) {
      $('.hamburger').removeClass('is-active');
      $('body').removeClass('Body-MenuOpened');
      blockScroll(false);
    }
  });
  $('.Navigate').on('click', function (e) {
    e.preventDefault();
    var el, to;

    try {
      el = $(this).attr('href');
      to = $(el).offset().top;
      $('body').removeClass('Body-MenuOpened');
      $('.hamburger').removeClass('is-active');
      blockScroll(false);
      $('html, body').animate({
        scrollTop: to + 'px'
      }, 1000);
    } catch (e) {}
  }); // Scroll block function

  var windowOffsetTop = 0;

  function blockScroll(state) {
    var b = $('body');

    if (state === true) {
      windowOffsetTop = $(window).scrollTop();
      b.css({
        position: 'fixed',
        top: -windowOffsetTop + 'px',
        right: 0,
        bottom: 0,
        left: 0,
        overflowY: 'scroll'
      });
    } else {
      b.removeAttr('style');
      window.scrollTo(0, windowOffsetTop);
    }
  } // Home Banners 


  var HomeBanners = $('.HomeBanners');
  HomeBanners.owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000, 
    items: 1,
    nav: true,
    loop: true,
    smartSpeed: 700,
    dots: false,
    navContainer: '.HomeBanners-Control',
    navText: ['<img src="img/icons/arrow.svg" alt="" />', '<img src="img/icons/arrow.svg" alt="" />']
  }); // Today Special

  var TodaySpecialCarousel = $('.TodaySpecial-Content');
  TodaySpecialCarousel.owlCarousel((_TodaySpecialCarousel = {
    items: 2,
    dots: false,
    nav: false,
    pullDrag: false
  }, _defineProperty(_TodaySpecialCarousel, "dots", true), _defineProperty(_TodaySpecialCarousel, "nav", false), _defineProperty(_TodaySpecialCarousel, "responsive", {
    0: {
      items: 1,
      margin: 15
    },
    576: {
      items: 2,
      margin: 15
    },
    768: {
      items: 1
    },
    900: {
      items: 2,
      margin: -50
    }
  }), _TodaySpecialCarousel));
  $('.TodaySpecial-Content .owl-item').hover(function () {
    $('.TodaySpecial-Content .owl-item .FoodSpecial').removeClass('FoodSpecial_Active');
    $(this).find('.FoodSpecial').addClass('FoodSpecial_Active');
    $(this).css({
      'z-index': '2'
    });
  }, function () {
    $(this).find('.FoodSpecial').removeClass('FoodSpecial_Active');
    $(this).css({
      'z-index': '0'
    });
    $('.TodaySpecial-Content .owl-item:first-child').css({
      'z-index': '2'
    });
    $('.TodaySpecial-Content .owl-item:first-child .FoodSpecial').addClass('FoodSpecial_Active');
  }); // Mini Cart slide toggle 

  $('.Cart-PopupToggle').on('click', function () {
    $(this).toggleClass('Cart-PopupToggle_active');
    $('.MiniCart').slideToggle();
  });
  $('body').on('mouseup', function (e) {
    if ($('.MiniCart').is(':visible') && $(e.target).closest('.MiniCart').length === 0 && $(e.target).closest('.Cart-PopupToggle').length === 0) {
      $('.Cart-PopupToggle').toggleClass('Cart-PopupToggle_active');
      $('.MiniCart').slideUp();
    }
  }); // Client Reviews

  var ClientReviewsCarousel = $('.HappyClients-Carousel');
  ClientReviewsCarousel.owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    margin: 30,
    smartSpeed: 700,
    autoHeight: true // responsive: {
    // 	0: {
    // 		margin: 0
    // 	},
    // 	768: {
    // 		margin: 30
    // 	}
    // }

  }); // Our Gallery 

  var OurGalleryCarousel = $('.OurGallery-Carousel');
  OurGalleryCarousel.owlCarousel({
    items: 3,
    startPosition: 1,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }); // Set year

  $('.FoodType').on('click', function () {
  $(this).addClass('it-active');
});
  $('.FoodType').on('click', function () {
    if ($('.FoodType').hasClass('it-active')) {
      $('.FoodType').removeClass('it-active');
      $(this).addClass('it-active');
      $('.FoodType-Name').css({
        'color': '#000'
      });
    }
  });
    $('.zero').on('click', function () {
      if ($(this).hasClass('it-active')) {
        $('.salad, .breakfast, .lunch, .snacks, .pizza, .dinner').css({
          'display': 'flex'
        });
  }
  });
    $('.first').on('click', function () {
      if ($(this).hasClass('it-active')) {
        $('.breakfast').css({
          'display': 'flex'
        });
        $('.all, .lunch, .snacks, .pizza, .dinner, .salad').css({
          'display': 'none'
        });
      }
    });
    $('.second').on('click', function () {
      if ($(this).hasClass('it-active')) {
        $('.lunch').css({
          'display': 'flex'
        });
        $('.all, .breakfast, .snacks, .pizza, .dinner, .salad').css({
          'display': 'none'
        });
      }
    });
    $('.third').on('click', function () {
      if ($(this).hasClass('it-active')) {
        $('.snacks').css({
          'display': 'flex'
        });
        $('.all, .lunch, .breakfast, .pizza, .dinner, .salad').css({
          'display': 'none'
        });
      }
    });
    $('.fourth').on('click', function () {
      if ($(this).hasClass('it-active')) {
        $('.pizza').css({
          'display': 'flex'
        });
        $('.all, .lunch, .snacks, .breakfast, .dinner, .salad').css({
          'display': 'none'
        });
      }
    });
    $('.fifth').on('click', function () {
      if ($(this).hasClass('it-active')) {
        $('.dinner').css({
          'display': 'flex'
        });
        $('.all, .lunch, .snacks, .pizza, .breakfast, .salad').css({
          'display': 'none'
        });
      }
    });
    $('.sixth').on('click', function () {
      if ($(this).hasClass('it-active')) {
        $('.salad').css({
          'display': 'flex'
        });
        $('.all, .lunch, .snacks, .pizza, .breakfast, .dinner').css({
          'display': 'none'
        });
      }
    });


  var date = new Date();
  var year = date.getFullYear();
  $('.year').text(year); // Menu List

  $('#List').on('click', function () {
    $('.MenuRow').removeClass('MenuRow-Grid');
    $('.MenuRow').addClass('MenuRow-List');
    $('#Grid').removeClass('active');
    $('#List').addClass('active');
    localStorage.setItem('display', 'list');
  }); // Menu Grid

  $('#Grid').on('click', function () {
    $('.MenuRow').removeClass('MenuRow-List');
    $('.MenuRow').addClass('MenuRow-Grid');
    $('#List').removeClass('active');
    $('#Grid').addClass('active');
    localStorage.setItem('display', 'grid');
  });

  if (localStorage.getItem('display') == 'grid') {
    $('#Grid').trigger('click');
    $('#Grid').addClass('active');
  } else {
    $('#List').trigger('click');
    $('#List').addClass('active');
  } // Our Cooks Carousel


  var ourCooksCarousel = $('.OurCooks-Carousel');
  ourCooksCarousel.owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    margin: 30,
    responsive: {
      550: {
        items: 2
      },
      768: {
        items: 3
      },
      1050: {
        items: 4
      }
    }
  });
});