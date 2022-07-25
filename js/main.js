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

    $('.logo-list .org1').click(function(){
      $('.org1').toggleClass('org-open');

      $('.org2, .org3').removeClass('org-open');
    });

    $('.logo-list .org2').click(function(){
      $('.org2').toggleClass('org-open');

      $('.org1, .org3').removeClass('org-open');
    });

    $('.logo-list .org3').click(function(){
      $('.org3').toggleClass('org-open');

      $('.org1, .org2').removeClass('org-open');
    });
    

    gsap.registerPlugin(ScrollTrigger);
    
    const isTouch = 'ontouchstart' in document.documentElement
    
    if (isTouch) {

      gsap.to(".pContent", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: "#intro",
          start: "top top", // the default values
          end: "bottom top",
          scrub: true
        }, 
      });

      gsap.to(".pContent2", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: "#intro",
          start: "top top", // the default values
          end: "bottom top",
          scrub: true
        }, 
      });

      gsap.to(".pContent3", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: "#intro",
          start: "top top", // the default values
          end: "bottom top",
          scrub: true
        }, 
      });

      gsap.to(".pContentDown", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: "#intro",
          start: "top top", // the default values
          end: "bottom top",
          scrub: true
        }, 
      });

      gsap.to(".pContentDown2", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: "#intro",
          start: "top top", // the default values
          end: "bottom top",
          scrub: true
        }, 
      });

      gsap.to(".pContentTextDown", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".pSection",
          trigger: "#intro",
          start: "top top", // the default values
          end: "bottom top",
          scrub: true
        }, 
      });


      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.slide-in',
          start: "bottom bottom",
        }
      });
      tl.from(".slide-in", {y:20, opacity: 0, duration: 0.3});

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.slide-in2',
          start: "bottom bottom",
        }
      });
      tl2.from(".slide-in2", {y:20, opacity: 0, duration: 0.3});

      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.slide-in3',
          start: "bottom bottom",
        }
      });
      tl3.from(".slide-in3", {y:20, opacity: 0, duration: 0.3});

      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: '.slide-in4',
          start: "bottom bottom",
        }
      });
      tl4.from(".slide-in4", {y:20, opacity: 0, duration: 0.3})

      let tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: '.slide-in5',
          start: "bottom bottom",
        }
      });
      tl4.from(".slide-in5", {y:20, opacity: 0, duration: 0.3})

      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: '.slide-in6',
          start: "bottom bottom",
        }
      });
      tl4.from(".slide-in6", {y:20, opacity: 0, duration: 0.3})


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
    
    window.addEventListener("load", () => {
        const totalScroll = asscroll.containerElement.scrollHeight - innerHeight;
    
        gsap.to(".pContent", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: "#intro",
            start: "top top", // the default values
            end: "bottom top",
            scrub: true
          }, 
        });
  
        gsap.to(".pContent2", {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: "#intro",
            start: "top top", // the default values
            end: "bottom top",
            scrub: true
          }, 
        });
  
        gsap.to(".pContent3", {
          yPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: "#intro",
            start: "top top", // the default values
            end: "bottom top",
            scrub: true
          }, 
        });
  
        gsap.to(".pContentDown", {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: "#intro",
            start: "top top", // the default values
            end: "bottom top",
            scrub: true
          }, 
        });
  
        gsap.to(".pContentDown2", {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: "#intro",
            start: "top top", // the default values
            end: "bottom top",
            scrub: true
          }, 
        });
  
        gsap.to(".pContentTextDown", {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".pSection",
            trigger: "#intro",
            start: "top top", // the default values
            end: "bottom top",
            scrub: true
          }, 
        });
  

        gsap.to(".pGallery", {
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-wrap",
            start: "top bottom", // the default values
            end: "bottom top",
            scrub: true
          }, 
        });
  
        gsap.to(".pGalleryReverse", {
          xPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-wrap",
            start: "top bottom", // the default values
            end: "bottom top",
            scrub: true
          }, 
        });

        
        
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.slide-in',
            start: "bottom bottom",
          }
        });
        tl.from(".slide-in", {y:20, opacity: 0, duration: 0.3});
  
        let tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: '.slide-in2',
            start: "bottom bottom",
          }
        });
        tl2.from(".slide-in2", {y:20, opacity: 0, duration: 0.3});
  
        let tl3 = gsap.timeline({
          scrollTrigger: {
            trigger: '#charity .transparent',
            start: "bottom bottom",
          }
        });
        tl3.from(".slide-in3", {y:20, opacity: 0, duration: 0.3});
  
        let tl4 = gsap.timeline({
          scrollTrigger: {
            trigger: '#team .transparent',
            start: "bottom bottom",
          }
        });
        tl4.from(".slide-in4", {y:20, opacity: 0, duration: 0.3});
        
        asscroll.enable();

        $('.logo-list, .faq-block').click(function(){
          setTimeout(function(){
            asscroll.resize();
          },500)
        })
    });
    
  }










         
     


   
    // const asscroll = new ASScroll();

    // window.addEventListener('load', () => {
    //     asscroll.enable()
    // })

          
    

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

 

  
    // function getNumber(min, max) {
    //     var min = Math.ceil(min);
    //     var max = Math.floor(max);
    //     var random = "";

    //     do {
    //         random = Math.floor(Math.random() * (max - min)) + min;
    //     } while (random === getNumber.last);
    //     getNumber.last = random;
    //     return random;
    // }  

    // let randomx = getNumber(1,2);  
    // let bearimg = "img/bear" + randomx + ".png";

    // $('.clicker img').attr('src', bearimg);

    // $('.clicker img').click(function() {   
    //     let randomx = getNumber(1,2);
    //     let bearimg = "img/bear" + randomx + ".png";

    //     $(this).attr('src', bearimg);
    // });




   

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
