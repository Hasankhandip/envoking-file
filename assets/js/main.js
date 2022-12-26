"use strict";
// scroll-top btn start
$(".top-btn").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// scroll-top btn end
// slick slider start
$(document).ready(function(){
  $('.testimonial-area').slick({
    autoplay:true,
    prevArrow: ".left-arrow-testimonial",
    nextArrow:  ".right-arrow-testimonial",
    slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots:true,
      }
    }
  ]
  });});