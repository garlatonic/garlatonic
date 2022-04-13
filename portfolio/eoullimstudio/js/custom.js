$(function(){
  /* Scroll Event : Header, btn-gototop */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .btn-top').addClass('active');
    }
    else {
      $('header, .btn-top').removeClass('active');
    }
  });
  
  /* Trigger Function */
  $('#trigger').click(function(){
    $(this).toggleClass('active');
    $('.overlay-top, .overlay-bottom, nav').toggleClass('active');
  });
  $('.overlay-top, .overlay-bottom, .menu a, footer').click(function(){
    $('#trigger, .overlay-top, .overlay-bottom, nav, .menu').removeClass('active');
  });
  // nav login join
  $('.etc-menu a').mouseover(function(){
    $(this).siblings('.message.pc').stop().fadeIn();
  });
  $('.etc-menu a').mouseout(function(){
    $(this).siblings('.message.pc').stop().fadeOut();
  });

  /* Smooth Sliding */
  $('.logo a, .menu a, .btn-top').click(function(e){
    e.preventDefault();
    $.scrollTo(this.hash || 0, 900);
  });
  
  /* AOS Scroll Reveal Animation */
  AOS.init();

  /* TypeIt */
  new TypeIt('#typing', {
    loop: true
  }).go();

  /* Slick Slider */
  $('.welcome-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
  });
});

$(function(){
  /* FAQ - Accordion */
  $('.faq-answer').eq(0).show();
  $('.faq-question').click(function(){
    $(this).next().stop().slideDown();
    $(this).parent().siblings().children('.faq-answer').stop().slideUp();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  });
});