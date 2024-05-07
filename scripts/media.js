//
//
// slick-slider
$(document).ready(function () {
  $(".achemsScroller").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    arrows: true,
    dots: false,
    nextArrow: document.getElementById('achemsRightArrow'),
    prevArrow: document.getElementById('achemsLeftArrow'),
    autoplay: false,
    autoplaySpeed: 2000
  });

  $(".eurocimScroller").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    arrows: true,
    dots: false,
    nextArrow: document.getElementById('eurocimRightArrow'),
    prevArrow: document.getElementById('eurocimLeftArrow'),
    autoplay: false,
    autoplaySpeed: 2000
  });

});