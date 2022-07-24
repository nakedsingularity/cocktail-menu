// $('body').addClass('lock-oveflow');

$(window).load(function() {
  // setTimeout(function() {
    // $('.loader').addClass('fade');
    $('.loader').fadeOut(200);
    $('body').removeClass('lock-oveflow');
    $('main').addClass('dom-loaded');
    $('#header-wrap').addClass('dom-loaded');

  // }, 3000);
});



$(document).ready(function(){

    // parallaxImgScroll();

    // $('.mint').click(function(){
    //   $(this).find('.btn').text('Date TBA');
    // });


    gsap.registerPlugin(ScrollTrigger);
    
    const isTouch = 'ontouchstart' in document.documentElement
    
    if (isTouch) {

    } else {

      const asscroll = new ASScroll({
        disableRaf: true
    });
    
    gsap.ticker.add(asscroll.update)
    
    ScrollTrigger.defaults({
        scroller: asscroll.containerElement
    })
    
    ScrollTrigger.scrollerProxy(asscroll.containerElement, {
        scrollTop(value) {
            return arguments.length ? asscroll.currentPos = value : asscroll.currentPos;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        }
    });
    
    asscroll.on("update", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", asscroll.resize);

    asscroll.enable();


  } 
    

    $('#menu-trigger').click(function(){
        $(this).find('div').toggleClass('active');

        $('#header-wrap').toggleClass('header-wrap-expand');
        $('.mobile-menu').toggleClass('menu-open');

        $('html').toggleClass('lock-overflow');
    });

    $('.mobile-menu .menu-item').click(function(){
      $('#menu-trigger').find('div').toggleClass('active');

        $('#header-wrap').toggleClass('header-wrap-expand');
        $('.mobile-menu').toggleClass('menu-open');

        $('html').toggleClass('lock-overflow');
    });



    $('.rarity-breakdown p').click(function(){
      $(this).toggleClass('filter-active');
    });

    var $btns = $('.btn').click(function() {
      if (this.id == 'all') {
        $('#parent > div').fadeIn(450);
      } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('#parent > div').not($el).hide();
      }
      $btns.removeClass('active');
      $(this).addClass('active');
    }) 
    
})
