// $(document).ready(function(){}); 과 같다.
// 안 쓰려면 body태그 안에 script 넣으면 된다!
$(function(){
  /* Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });
  // 중복내용 없애기 위해서 , 쓴다
  $('section, .menu a').click(function(){
    $('.trigger').removeClass('active');
    $('.gnb').removeClass('active');
  });

  /* Smooth Scrolling */
  // e를 넣는 이유?? 제작자가 그렇게 넣어서 그렇게 한다.
  $('.menu a, .gototop').click(function(e){
    e.preventDefault();
     // e.preventDefault()는 a태그가 가지고 있는 href속성 내부의 # 내용을 주소표시줄에 안 보이게 한다.(a태그의 기본 이벤트 전달을 막음);
    $.scrollTo(this.hash || 0, 900);
  });

  /* Change header CSS with Scroll */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) { // Scroll이 조금이라도 되었다
      $('header').addClass('active');
      $('.gototop').addClass('active');
    }else { // Top부분에 도착했다
      $('header').removeClass('active');
      $('.gototop').removeClass('active');
    }
  });

  /* slick.js : history */
  $('.history-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  /* slick.js : project photo */
  $('.project-photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'Linear',
  });
});