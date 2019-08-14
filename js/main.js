var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$('.loop').owlCarousel({
  center: true,
  items:2,
  loop:true,
  margin:10,
  responsive:{
      600:{
          items:3
      }
  }
});