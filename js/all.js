$(document).ready(function() {
    $('.mobile-btn').on('click',  function(e){
       e.preventDefault();
       $('.header').toggleClass('active');
   });

   $(".back-to-top").on('click', function(e){
    $("html, body").animate({scrollTop:$('.header').offset().top},600)
   })


   $(".feature-scroll").on('click', function(e){
    $("html, body").animate({scrollTop:$('.feature-container').offset().top},600)
   })

   $(".chef-scroll").on('click', function(e){
    $("html, body").animate({scrollTop:$('.chef-area').offset().top},600)
   })

   $(".map-scroll").on('click', function(e){
    $("html, body").animate({scrollTop:$('.map-area').offset().top},600)
   })


   $(".cart-bar").on("click", function(e){
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");

   })

   $(".login-btn").hover( function(e){
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
   })

 });