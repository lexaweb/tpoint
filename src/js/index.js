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
})

function sliderInit() {
  if ($('.training').length > 0) {
    const swiperSlider = new Swiper('.training-block', {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
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
  if ($('.testimonials').length > 0) {
    var swiperSlider = new Swiper('.testimonials-block', {
      slidesPerView: 3,
      spaceBetween: 0,
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
      }
    })
  }
}
