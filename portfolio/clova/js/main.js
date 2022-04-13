$(function(){
  // Smooth Scrolling Event
  $('.logo').click(function(e){
    e.preventDefault();
    $.scrollTo(this.hash || 0, 900);
  });

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Header ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  // Header Menu Event
  $('.mainmenu.pc li').hover(function(){
    if($(this).children('a').siblings().attr('class')=="submenu-wrap"){
      $('header, .sub-bg').toggleClass('active');
    }
    $(this).children('a').toggleClass('active');
  });
  // Header Reveal Event
  var beforePosition = $(document).scrollTop();
  document.addEventListener('scroll', function(){
    var afterPosition = document.documentElement.scrollTop;
    if (afterPosition > 50) {
      if(beforePosition < afterPosition){ //스크롤 아래로
        $('header').addClass('hide').addClass('white');
      } else { //스크롤 위로
        $('header').removeClass('hide');
      }
    } else { //평상시
      $('header').removeClass('hide').removeClass('white');
    }
    beforePosition = afterPosition;
  });
  // Nav Trigger Event
  $('#trigger').click(function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
  });
  // Nav Menu Event
  $('.mainmenu.mb li').click(function(){
    if($(this).attr('class')=="active"){
      $(this).removeClass('active');
      $(this).children('.submenu-wrap').slideUp();
    }else {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(this).siblings().children('.submenu-wrap').slideUp();
      $(this).children('.submenu-wrap').slideDown();
    }
  });

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Main ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  $('.main-slider').slick({
    dots: true
  });
  var playCnt = 0;
  $('#videoPlay').on('ended', function(){
    if(playCnt=0){
      $(this).attr('src','./images/main/main_01-01.mp4');
      playCnt++;
    }else if(playCnt=1){
      $(this).attr('src','./images/main/main_01-02.mp4');
      playCnt++;
    }else {
      $(this).attr('src','./images/main/main_01-03.mp4');
      playCnt=0;
    }
  });

  /* ━━━━━━━━━━━━━━━━━ Scroll Reveal Animation - AOS ━━━━━━━━━━━━━━━━━ */
  AOS.init();
});