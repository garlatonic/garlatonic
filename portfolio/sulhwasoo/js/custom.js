$(function(){
  // 현재 기기 너비 측정
  var windowWidth = window.innerWidth;

  // PC Version Header
  /* Header */
  $('.mainmenu > li').hover(function(){
    if($(this).children('ul').attr('class')=="submenu"){
      $('.nav-bg.pc').toggleClass('active');
      $('.nav-inner.pc').toggleClass('active');
    }
  });
  /* Header : select language */
  $('.select-language').click(function(){
    $(this).toggleClass('active');
  });

  // Mobile Version Header
  /* Header : Nav Menu */
  $('.mb-mainmenu li').click(function(){
    if($(this).attr('class')=="active"){
      $(this).removeClass('active');
      $(this).children('.mb-submenu').slideUp();
    }else {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(this).siblings().children('.mb-submenu').slideUp();
      $(this).children('.mb-submenu').slideDown();
    }
  });
  $('.nav-open').click(function(){
    $('nav').addClass('active');
  });
  $('.nav-inner.mb > .btn-close').click(function(){
    $('nav').removeClass('active');
  });
  /* language menu */
  $('.mb-select-language').click(function(){
    $('.mb-language-menu').addClass('active');
  });
  $('.mb-language-menu .btn-close').click(function(){
    $('.mb-language-menu').removeClass('active');
  });
  $('.language li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
  
  /* GotoTop button with Scroll */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('.gototop').addClass('active');
      if(windowWidth<=1020){
        $('header').addClass('active');
      }
    }else {
      $('.gototop').removeClass('active');
      if(windowWidth<=1020){
        $('header').removeClass('active');
      }
    }
  });

  /* Smooth Scroll */
  $('.gototop').click(function(e){
    e.preventDefault();
    $.scrollTo(this.hash || 0, 900);
  });

  /* Slick Slider - btn-playpause */
  $('.btn-playpause').click(function(){
    $(this).children('.xi-pause').toggleClass('active');
    $(this).children('.xi-play').toggleClass('active');
  });

  /* Slick Slider : mainbn */
  $('.mainbn-slider').slick({
    arrow: true,
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $(".mainbn-slider").on('afterChange',function(){
    var curIdx = $(".mainbn-slider .slick-active").attr("data-slick-index");
    curIdx = parseInt(curIdx);
    $('.mainbn.slider-progress span').css('width',100/6*(curIdx+1)+'%');
    if(curIdx==2){
      $('.mainbn.slider-progress.pc').css('background','#ddd')
      $('.mainbn.slider-progress.pc span').css('background','#000');
    }else{
      $('.mainbn.slider-progress.pc').css('background','#aaa')
      $('.mainbn.slider-progress.pc span').css('background','#fff');
    }
  });
  $('.mainbn .xi-pause').click(function(){
    $('.mainbn-slider').slick('slickPause');
  });
  $('.mainbn .xi-play').click(function(){
    $('.mainbn-slider').slick('slickPlay');
  });

  /* Slick Slider : recommend */
  $('.recommend-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1019,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".recommend-slider").on('afterChange',function(){
    var curIdx = $(".recommend-slider .slick-active").attr("data-slick-index");
    curIdx = parseInt(curIdx);
    if(windowWidth>1020){
      $('.rc.slider-progress span').css('width',100/2*(curIdx-2)+'%');
    }else if(windowWidth<=768 && windowWidth>=590){
      $('.rc.slider-progress span').css('width',100/4*(curIdx/2+1)+'%');
    }else {
      $('.rc.slider-progress span').css('width',100/8*(curIdx+1)+'%');
    }
  });

  /* Slick Slider : with */
  $('.with-slider').slick({
    dots: false,
    infinite: false,
    variableWidth: true,
    slidesToShow: 4,
  });

  /* Slick Slider : banner */
  $('.banner-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  /* Slick Slider : mainbn */
  $('.season-slider').slick({
    arrow: true,
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
  $(".season-slider").on('afterChange',function(){
    var curIdx = $(".season-slider .slick-active").attr("data-slick-index");
    curIdx = parseInt(curIdx);
    $('.season.slider-progress span').css('width',100/3*(curIdx+1)+'%');
  });
  $('.season .xi-pause').click(function(){
    $('.season-slider').slick('slickPause');
  });
  $('.season .xi-play').click(function(){
    $('.season-slider').slick('slickPlay');
  });

  /* Slick Slider : review */
  $('.review-slider').slick({
    infinite: true,
  });

  /* Slick Slider : flagship */
  $('.flagship-slider').slick({
    dots: true,
    infinite: true,
  });
  $(".flagship-slider").on('afterChange',function(){
    var curIdx = $(".flagship-slider .slick-active").attr("data-slick-index");
    curIdx = parseInt(curIdx);
    $('.fl.slider-progress span').css('width',100/3*(curIdx+1)+'%');
  });

  /* Slick Slider : with */
  $('.official-slider').slick({
    dots: false,
    infinite: false,
    variableWidth: true,
  });

  /* Footer Copyright */
  var ftcnt=0;
  $('.copyright').click(function(){
    $('.footer-content').toggleClass('active');
    ftcnt++;
    if(ftcnt>1){
      ftcnt=0;
      $('.ft-service').slideUp(400);
      $('.links').delay(200).slideUp(400);
    }else{
      $('.links').slideDown(400);
      $('.ft-service').delay(200).slideDown(400);
    }
  });

  /* Scroll Event */
/*   const scrollTrigger = new ScrollTrigger.default();
  scrollTrigger.add('[data-scroll]', {
    offset: {
      x: 0,
      y: 250
    },
    toggle: {
      class: {
        in: 'animateIn',
        out: 'animateOut'
      }
    }
  }); */
});