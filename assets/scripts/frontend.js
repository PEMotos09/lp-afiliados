$(document).ready(function () {


  /*$('.main-slider').slick({
    autoplay: true,
    infinite: true,
    lazyLoad: 'ondemand',
  });*/




  var $slider = $('.main-slider')
    .on('init', function (slick) {
      setTimeout(() => {
        $('.main-slider').find('.content').css('display', 'flex');
      }, "500");

    })
    .slick({
      arrows: true,
      dots: false,
      focusOnSelect: true,
      lazyLoad: 'ondemand',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3500,
    });

  $slider.find(".slick-slide").on("click", function () {
    $slider.slick("slickNext");
  });







  $('.list-others').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  $('.list-plans').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  //$('.phone_with_ddd').mask('(00) 0000-0000');
  $('.cpf').mask('000.000.000-00', { reverse: true });
  $('.cnpj').mask('00.000.000/0000-00', { reverse: true });


  var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
    spOptions = {
      onKeyPress: function (val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
      }
    };

  $('.phone_with_ddd').mask(SPMaskBehavior, spOptions);

});
