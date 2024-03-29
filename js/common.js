$(function() {

    //************** MNU ********************

    $('form.az-search-clicked>input[type="text"]').blur(function() { 
        setTimeout(function(){
            $('.az-search-clicked').removeClass('active');
        }, 500);
    });
    $('form.az-search-clicked>input[type="text"]').focus(function() { 
        $('.az-search-clicked').addClass('active');
    });
    $('.az-search-click').click(function(){
        if(!window.matchMedia( "(min-width: 1200px)" ).matches){
            $(this).next('form').addClass('active').children('input[type="text"]').focus();
        }
        return false;
    });
    $('.az-co').click(function(){
        $(this).toggleClass('az-close').next('.az-menu').slideToggle(300);
    });
    $('.az-menu>li>a').click(function(){
        if(window.matchMedia( "(max-width: 768px)" ).matches){
            if($(this).next('ul').length>0&&$(this).next('ul').css('display')=='none'){
                $('.az-menu>li>a').removeClass('active')
                $('.az-menu>li>a+ul').removeClass('active').slideUp(300);
                $(this).toggleClass('active').next('ul').slideToggle(300);
                return false;
            }else if($(this).next('ul').length>0&&$(this).next('ul').css('display')=='block'){
                $(this).toggleClass('active').next('ul').slideToggle(300);
                return false;
            }
        } else if (window.matchMedia( "(min-width: 768px)" ).matches && window.matchMedia( "(max-width: 1200px)" ).matches){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                return false;
            } else {
                $('.az-menu>li>a').removeClass('active');
                $(this).addClass('active');
                return false;
            }
        }
        return false;
    });
    // $(".sf-menu").superfish({
    //     cssArrows: false
    // });
	
    //************* MagnificPopup ***********

	$('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    //***************************************
    
     $('.ah-block').owlCarousel({
        loop: true,
        margin:0,
        animateIn: 'fadeIn',
        items: 1,
        nav: true,
        dots: true,
        navText:['<span class="arrow-right"></span>','<span class="arrow-left"></span>']
        
    });

    //***************************************
    
     $('.ah-block2').owlCarousel({
        loop: true,
        margin:0,
        nav: true,
        dots: true,
        navText:['<span class="arrow-left2"></span>','<span class="arrow-right2"></span>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
        
    });

    //***************************************
    
     $('.ah-cardproduct-slider').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        dots: true,
        navText:['<span class="arrow-left22"></span>','<span class="arrow-right22"></span>'],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
        
    });

    //***************************************
    
     $('.ah-cardproduct-slider2').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        dots: true,
        navText:['<span class="arrow-left22"></span>','<span class="arrow-right22"></span>'],
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
        
    });

    //***************************************

    $(".az-carousel-wrap .az-carousel").each(function(){
        $(this).jCarouselLite({
            btnNext: ".az-carousel-wrap .next",
            btnPrev: ".az-carousel-wrap .prev",
            vertical: true,
            visible: 4
        });
    });
    $(".az-carousel-wrap .az-carousel img").click(function() {
        $(this).parents(".az-carousel-wrap").prev(".ah-hits-imgbox").find('img').attr("src", $(this).attr("src"));
    });
    $('.az-slideToggle').click(function(){
        $($(this).attr('href')).slideToggle(300);
        return false;
    });
    $('.ah-cardproduct-imgbox1').click(function(){
        $(this).parents('.ah-cardproduct-slider').prev('.ah-cardproduct-imgbox').find('img').attr('src', $(this).find('img').attr('src'));
    })

    /*tabs*/
        $('#az-tab-basket').click(function(){
            $(this).parent().removeClass('az-tab-cond2 az-tab-cond3').addClass('az-tab-cond1')
            .next().removeClass('az-tab-cond1 az-tab-cond3').addClass('az-tab-cond2')
            .next().removeClass('az-tab-cond1 az-tab-cond2').addClass('az-tab-cond3');
        });
        $('#az-tab-contact').click(function(){
            $(this).parent().removeClass('az-tab-cond2 az-tab-cond3').addClass('az-tab-cond1')
            .prev().removeClass('az-tab-cond1 az-tab-cond3').addClass('az-tab-cond2')
            .next().next().removeClass('az-tab-cond1 az-tab-cond2').addClass('az-tab-cond3');
        });
        $('#az-tab-confirm').click(function(){
            $(this).parent().removeClass('az-tab-cond2 az-tab-cond3').addClass('az-tab-cond1')
            .prev().removeClass('az-tab-cond1 az-tab-cond3').addClass('az-tab-cond2')
            .prev().removeClass('az-tab-cond1 az-tab-cond2').addClass('az-tab-cond3');
        });
        $('.az-tabs>li>a').click(function(){
            $('.az-tab-cont>li').fadeOut(0);
            $($(this).attr('href')).fadeIn(0);
            return false;
        });
    /*tabs*/
});
