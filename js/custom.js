$(function(){
  /* Scroll Event : Header, btn-gototop */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header').addClass('active');
    }
    else {
      $('header').removeClass('active');
    }
  });

  /* Navgation Menu */
  $('.toggle').click(function(){ // 네비 펼치기
    $('.toggle, .overlay, nav').toggleClass('active');
    $('body').addClass('active'); // 네비 펼쳤을 때 body에 active 클래스를 주어 스크롤이 생기지않도록 함
  })
  $('nav a').click(function(){
    $('body, .toggle, .overlay, nav').removeClass('active');
  })

  /* Smooth Sliding */
  $('.logo a, nav a, .home-heading a, .btn-top').click(function(e){
    e.preventDefault();
    $.scrollTo(this.hash || 0, 900);
  });

  /* Home Section : TypeIt Plugin */
  new TypeIt("#typing", {
    strings: ["Park Sang-A.", "WEB PUBLISHER."],
    speed: 100,
    loop: true,
    breakLines: false,
  }).go();
});