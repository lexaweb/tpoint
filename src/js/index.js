import $ from 'jquery'
import datepicker from 'js-datepicker'
import '@fancyapps/fancybox'
import Inputmask from 'inputmask'
import noUiSlider from 'nouislider'
import 'parsleyjs'
import 'select2'
import Swiper from 'swiper/bundle'
import 'tooltipster'
import './_backend'

$(function () {
  sliderInit()
  anchorInit()
  langInit()
  headermbInit()
})

function sliderInit() {
  if ($('.training').length > 0) {
    const swiperSlider = new Swiper('.training-block', {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1025: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }
    })
  }
  if ($('.testimonials').length > 0) {
    var swiperSlider = new Swiper('.testimonials-block', {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      initialSlide: 1,
      pagination: {
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1025: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }
    })
  }
  if ($('.opportunities').length > 0) {
    const swiperSlider = new Swiper('.opportunities-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
function anchorInit() {
$("a[href^='#']").click(function(){
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});
if($(window).width() > 768) {
  $(window).scroll(function (event) {
    var top = $(window).scrollTop();
     if(top >= 860){
      $(".up").fadeIn()
     } else {
      $(".up").fadeOut()
     }
  });
}
}
function langInit() {
  $('.header-language').on('click', function () {
    $('.header-language-links').toggleClass('active')
  })
}
function headermbInit() {
  $('.header-mb').on('click', function () {
    $('.header-logo').toggleClass('active')
    $('.header-language').toggleClass('active')
    $('.header-menu_mb').toggleClass('active')
  })
}
