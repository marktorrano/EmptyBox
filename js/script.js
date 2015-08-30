$(document).ready(function(){


   /*$('.parallax').parallax();*/
    /* ScrollSpy Area */


/*    $('#').scrollspy({

        min: $('#').offset().top,

        onEnter: function(element, position) {

        },

        onLeave: function(element, position) {


        }
    });*/




    /* ScrollSpy Area */



    vpw = $(window).width();
    vph = $(window).height();

    $('.section-1').height(vph);
   /* $('#portfolio-mockup').height(vph);*/

    /* Load arrow after 10 secs */

   setTimeout(loadarrow, 7500);

    function loadarrow(){
        $('.arrow').css('opacity' , '1');
        trans('.arrow' , .5);
    }


   /* Load arrow after 10 secs  end*/



    /*Nav icon*/

    $('#nav-icon2').click(function(){
		$(this).toggleClass('open');
        $('.menu-container').toggleClass('open-menu');
        trans('.menu-container', .5);
	});

    /* */



    $('.line').click(function(){
        $('.menu-logo').css('display','none');
        $('.menu-logo').css('z-index','-1000');
        $('.close-button').css('display','block');
        $('.close-button').css('z-index','1000');

        $('.menu-container').css('right','0');
        trans('.menu-container', .5);
    });

    $('.close-button').click(function(){
        $('.close-button').css('display','none');
        $('.close-button').css('z-index','-1000');
        $('.menu-logo').css('display','block');
        $('.menu-logo').css('z-index','1000');

        $('.menu-container').css('right','-70%');
        trans('.menu-container', .5);
    });

    $('.link-1').click(function(){
        scrollToElement('#section-1', 600);
    });

    $('.link-2').click(function(){
        scrollToElement('#about-anchor', 600);
    });

    $('.link-3').click(function(){
        scrollToElement('#projects-anchor', 600);
    });

    $('.link-4').click(function(){
        scrollToElement('#skills-anchor', 600);
    });

    $('.link-5').click(function(){
        scrollToElement('#foot', 600);
    });

    $('.link').hover(function(){
       $(this).toggleClass('bgcolorfade');
        trans('.bgcolorfade' , .5);
    });
   /* function checkPosition() {
    if (window.matchMedia('(max-width: 40.063em)').matches) {
        $('#skills').removeClass('container');
    } else {
        //...
    }
}*/

    $("#section-1").vegas({
    slides: [
        { src: "./images/bg-min.jpg" },
        { src: "./images/bg2-min.png" },
        { src: "./images/bg3-min.png" },
        { src: "./images/bg4-min.png" }
        ],
        transition: [ 'zoomOut', 'fade', 'blur2'],
        animation: 'random',
        delay: 6000,
        overlay: 'overlays/08.png',

    });




    $('.parallax-window').parallax({imageSrc: '../images/sp-mockup.png'});


    var options = [
        {selector: '.onlineportfolio', offset: 150, callback: 'Materialize.fadeInImage(".onlineportfolio")' },
        {selector: '.bbj', offset: 150, callback: 'Materialize.fadeInImage(".bbj")' },
        {selector: '.globe1', offset: 150, callback: 'Materialize.fadeInImage(".globe1")' },
        {selector: '.globe2', offset: 150, callback: 'Materialize.fadeInImage(".globe2")' },
        {selector: '#wf', offset: 150, callback: 'Materialize.fadeInImage("#wf")' },
        {selector: '#flat', offset: 150, callback: 'Materialize.fadeInImage("#flat")' },
        {selector: '#rwd', offset: 150, callback: 'Materialize.fadeInImage("#rwd")' },
        {selector: '#dev', offset: 150, callback: 'Materialize.fadeInImage("#dev")' },

    ];

    Materialize.scrollFire(options);

    var select = [


        ];

});


/*ebd.animating = function(selector){

    var element = $(selector);

    element.css({opacity:0);
    $(element).velocity({opacity: 1}, {
        duration: 650,
        queue: false,
        easing: 'easeOutSine'
      });

    $(element).velocity({opacity: 1}, {
          duration: 1300,
          queue: false,
          easing: 'swing',
          step: function(now, fx) {
              fx.start = 100;
              var grayscale_setting = now/100;
              var brightness_setting = 150 - (100 - now)/1.75;

              if (brightness_setting < 100) {
                brightness_setting = 100;
              }
              if (now >= 0) {
                $(this).css({
                    "-webkit-filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)",
                    "filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)"
                    this.addClass("fadeInDown");
                });
              }
          }
      });

};*/






function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);


    function checkReady() {
        if (document.readyState === "complete") {
            $('.svg-logo').removeClass('pulse');
            $('.svg-logo').addClass('bounceOutUp');
            $('.svg-logo').removeClass('invinite');
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {

    show('main-container', true);
    $('#preloader').css('opacity','.01');
    trans('#preloader', 1);
});


function scrollToElement(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}

/*
$(function(){
      //Keep track of last scroll
      var lastScroll = 0;
      $(window).scroll(function(event){
          //Sets the current scroll position
          var st = $(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll){
             //Replace this with your function call for downward-scrolling
            $('.menu-logo').css('top', '-200px');
            trans('.menu-logo', .3);

          }
          else {
             //Replace this with your function call for upward-scrolling
            $('.menu-logo').css('top', '20px');
            trans('.menu-logo', .3);
          }
          //Updates scroll position
          lastScroll = st;
    });
});

*/

function trans(elem, sec) {
    $(elem).css('-webkit-transition' , 'all ' +sec+ 's ease');
    $(elem).css('-moz-transition' , 'all ' +sec+ 's ease');
    $(elem).css('-ms-transition' , 'all ' +sec+ 's ease');
    $(elem).css('-o-transition' , 'all ' +sec+ 's ease');
    $(elem).css('transition' , 'all ' +sec+ 's ease');
}



/* smooth mouse scroll */
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 500; // delay time
    var distance = 100; // delta point
    // Dom where it will apply
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}
