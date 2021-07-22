$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    rtl: true,
    nav: true,
    loop: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      400: {
        items: 2,
        nav: true
      },
      600: {
        items: 3,
        nav: true
      },
      1200: {
        items: 4,
        nav: true
      }
    }
  })
});


