// $('body').addClass('lock-oveflow');

$(window).load(function() {
  // setTimeout(function() {
    // $('.loader').addClass('fade');

    setTimeout(function() {
    $('.loader img').fadeOut(500);
    },200);

    setTimeout(function() {
      $('body').removeClass('lock-oveflow');
      $('main').addClass('dom-loaded');
      $('#header-wrap').addClass('dom-loaded');
    }, 500);
});



$(document).ready(function(){


 
    

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

 

   

    $(function() {
      $('.faq-section-wrap .faq-block').on('click', toggleAccordion);
    
      function toggleAccordion(event) {
        var target = $(event.target).closest('.faq-block');
        target.toggleClass('expanded');
      }
    });


    // const slider = document.querySelectorAll('.team-wrap');
    // let mouseDown = false;
    // let startX, scrollLeft;

    // let startDragging = function (e) {
    //   mouseDown = true;
    //   startX = e.pageX - slider.offsetLeft;
    //   scrollLeft = slider.scrollLeft;
    // };
    // let stopDragging = function (event) {
    //   mouseDown = false;
    // };

    // slider.addEventListener('mousemove', (e) => {
    //   e.preventDefault();
    //   if(!mouseDown) { return; }
    //   const x = e.pageX - slider.offsetLeft;
    //   const scroll = x - startX;
    //   slider.scrollLeft = scrollLeft - scroll;
    // });

    // slider.addEventListener('mousedown', startDragging, false);
    // slider.addEventListener('mouseup', stopDragging, false);
    // slider.addEventListener('mouseleave', stopDragging, false);

    

      $('.recipe_trigger').on('dblclick', showRecipe);
    
      function showRecipe(event) {
        var target = $(this).next().next();
        target.toggleClass('recipe_show');
      }
    



})
