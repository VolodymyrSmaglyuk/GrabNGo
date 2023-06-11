function updateSlider() {
  let width = $(window).width();
  let slideAmount;

  if (width >= 769) {
    slideAmount = 3;
  } else if (width <= 421) {
    slideAmount = 1;
  } else {
    slideAmount = 2;
  }

  $(".slider").slick("slickSetOption", "slidesToShow", slideAmount, true);
}

$(window).on("resize", function () {
  updateSlider();
});

$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/prev-black.png" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/next-black.png" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 1500,
  });

  updateSlider();
});
