"use strict";
// navbar menu js start 
$('.menu-trigger').on('click', function(){
  $('.navbar-area').addClass('active');
  $('.page-content-wrapper').addClass('active');
});
$('.navbar-closer , .nav-link').on('click', function(){
  $('.navbar-area').removeClass('active');
  $('.page-content-wrapper').removeClass('active');
});
// page-content-left js start
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 50 ) {
    $(".page-content-left").addClass("active");
    $(".page-content-right").addClass("active");
  } else {
    $(".page-content-left").removeClass("active");
    $(".page-content-right").removeClass("active");
  }
});
// scroll-top btn start
$(".up-arrow").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// scroll-top btn end

// btn js start
$( ".button_su_inner" ).mouseenter(function(e) {
  var parentOffset = $(this).offset(); 
 
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
  $(this).prev(".su_button_circle").removeClass("desplode-circle");
  $(this).prev(".su_button_circle").addClass("explode-circle");

});

$( ".button_su_inner" ).mouseleave(function(e) {

    var parentOffset = $(this).offset(); 

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");

});
// btn js end
