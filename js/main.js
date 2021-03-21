$(document).ready(function(){
    // Slider Height
    // $('.owl-carousel .item').height($(window).height())
    // $(window).resize(function(){
    //     $('.owl-carousel .item').height($(window).height())
    // })
    // Owl Carousel Header
    $('.header .owl-carousel').owlCarousel({
        loop:true,
       items: 1,
       autoplay: true,
       animateOut: 'fadeOut',
       smartSpeed: 500
    })
     // Owl Carousel Brands
     $('.brands .owl-carousel').owlCarousel({
        loop:true,
       items: 1,
       responsive:{
           0:{items:2},
           576:{items:3},
           768:{items:4},
           992:{items:6}
       }
    })
    //Toggle Side-Menu
    $(' .menu').on('click',function(){
      $('.side-menu').toggleClass('open')  
    })
    $('.close').click(function(){
        $('.side-menu').removeClass('open') 
    })
    // Toggle Navbars: left & top
    $(window).scroll(function(){
        if($(this).scrollTop() >= 30){
            $(' .navbar-left').fadeOut(500);
            $('.nav-top').fadeIn(500);
        }else{
            $(' .navbar-left').fadeIn(500);
            $('.nav-top').fadeOut(500);
        }
    })
    // Counter Up
    const counters = document.querySelectorAll('.about .number');
    const delay = 200;
    counters.forEach(counter => {
      const updateCounter = () => {
        const targetAttribute = counter.getAttribute('data-target');
        const targetValue = +counter.innerText;
        const targetSpeed = targetAttribute / delay;
        if(targetValue < targetAttribute){
            counter.innerText = Math.floor(targetValue + targetSpeed);
            setTimeout(updateCounter,1.5);
        }else{
            targetValue.innerText = targetAttribute;
        }
        
      }
      updateCounter();
    })
    // Count Down
    const content = $('.count-down').html()
    $('.count-down').countdown('2021/03/31', function(event) {
        $(this).html(event.strftime(content));
      });
    // Venobox
    $(document).ready(function(){
        $('.venobox').venobox(); 
      });
      // Wowjs
      new WOW().init();
      // button up
      $(window).scroll(function(){
          if($(this).scrollTop() >= 1000){
              $('.up').fadeIn()
          }else{
            $('.up').fadeOut()  
          }
      })
      $('.up').click(function(){
          $('html,body').animate({
           scrollTop: 0
          },1000)
      })
      // loading page
       //loading page
    $(window).on('load', function () {
        $('.loading').fadeOut(2500, function () {
            $('body').css('overflow', 'auto')
        })
    })

      // Light/Dark Mode
      let link = $('link[data-color="switch-color"]'),
           logo_top = $('.nav-top .logo img '),
           logo_left = $('.navbar-left .logo img ');
      $('.fa-sun').click(function(){
          link.attr('href', 'css/style-light.css')
          logo_top.attr('src', 'images/logo-dark-mode1.png')
          logo_left.attr('src', 'images/logo-dark-mode1.png')
      })
      $('.fa-moon').click(function(){
        link.attr('href', 'css/style-dark.css')
        logo_top.attr('src', 'images/logo-white-mode1.png')
        logo_left.attr('src', 'images/logo-white-mode1.png')
    })


})