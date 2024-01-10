/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    // loading screen
    $(window).on('load', function() {
        $("body").css("overflow","auto")
		$(".loading-overlay").fadeOut("1");
	});
    
    // the bitton to top
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 700){
            scrollButton.show();
        }
        else{
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){  
        $("html, body").animate({ scrollTop: 0}, 2000);
    });
    
    
    // language dropdown box
//    $("header .fastspare-dropdown button").click(function(){
//       
//        $("header .fastspare-dropdown ul").slideToggle(300)
//                
//    });
    
    
    // the links of navbar for home page = landing page
    $('.link1').click(function() {
        $('html, body').animate({
            scrollTop: $('#HowItWorks').offset().top
        },500);
    });
    
    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: $('#AboutUs').offset().top
        },800);
    });
    
    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: $('#Categories').offset().top
        },1000);
    });
    
    $('.link4').click(function() {
        $('html, body').animate({
            scrollTop: $('#Industries').offset().top
        },1200);
    });
    
    $('.link5').click(function() {
        $('html, body').animate({
            scrollTop: $('#ContactUs').offset().top
        },1500);
    });
    
    
    
    // mobile menu screen     
    $('header .container .row > div i').click(function() {
        $("header .container .row > div:nth-of-type(1)").slideToggle(500);
    });

//    $('section').click(function() {
//        if ($('header .container .row > div:nth-of-type(1)').is(':visible')) {
//            $('header .container .row > div:nth-of-type(1)').slideUp(500);
//        }
//     });
    
    
    function checkPosition() {
        if (window.matchMedia('(max-width: 992px)').matches) {
            $('section').click(function() {
                if ($('header .container .row > div:nth-of-type(1)').is(':visible')) {
                    $('header .container .row > div:nth-of-type(1)').slideUp(500);
                }
             });
        } else {
            $('header .container .row > div i').click(function() {
                $("header .container .row > div:nth-of-type(1)").slideToggle(500);
            });
        }
    }
    
    checkPosition();
    
    
    
    // language menu sliding up and down 
    
    // mobile menu screen     
    $('header .container .row > div:nth-of-type(2) .fastspare-dropdown button').click(function() {
        $("header .container .row > div:nth-of-type(2) .fastspare-dropdown ul").slideToggle(500);
    });

    $('section').click(function() {
        if ($('header .container .row > div:nth-of-type(2) .fastspare-dropdown ul').is(':visible')) {
            $('header .container .row > div:nth-of-type(2) .fastspare-dropdown ul').slideUp(500);
        }
     });
    
    
//    $('header .container .row > div i').click(function() {
//        if ($('header .container .row > div:nth-of-type(1)').is(':hidden')) {
//            $('header .container .row > div:nth-of-type(1)').slideToggle(500);
//        }
//    });
//
//    $('section').click(function() {
//        if ($('header .container .row > div:nth-of-type(1)').is(':visible')) {
//            $('header .container .row > div:nth-of-type(1)').slideUp(500);
//        }
//     });

    
    
    
    // owl Carousel
    
    $('.five-items').owlCarousel({
        items:5,
        slideBy:5,
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2,
                slideBy:2
            },
            576:{
                items:3,
                slideBy:3
            },
            768:{
                items:4,
                slideBy:4
            },
            992:{
                items:5,
            },
            1199:{
                items:5
            }
        }
    });
    
});