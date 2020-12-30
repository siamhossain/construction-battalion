$(document).ready(function(){
    $('.slider').slick({
        draggable: true,
      // autoplay: true, 
      autoplaySpeed: 3000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 1000,
    });
});
