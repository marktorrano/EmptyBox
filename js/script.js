$(document).ready(function(){    
    
    
  /* $('.parallax').parallax();*/
    
    vpw = $(window).width();
    vph = $(window).height();

    $('.section-1').height(vph);
    
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
        
        $('.menu-container').css('right','-50%');
        trans('.menu-container', .5);
    });
    
    $('.link-1').click(function(){
        scrollToElement('#section-1', 600);
    });
    
    $('.link-2').click(function(){
        scrollToElement('#section-2', 600);
    });
    
    $('.link-3').click(function(){
        scrollToElement('#section-3', 600);
    });
    
    $('.link-4').click(function(){
        scrollToElement('#section-4', 600);
    });
    
    $('.link-5').click(function(){
        scrollToElement('#foot', 600);
    });
    
    
    
    $("body").vegas({
    slides: [
        { src: "./images/bg.jpg" },
        { src: "./images/bg2.png" },
        { src: "./images/bg3.png" },
        { src: "./images/bg4.png" }
        ],
        transition: [ 'zoomOut', 'fade', 'blur2'],
        animation: 'random',
        delay: 4000,
    });

 
    $('.parallax-window').parallax({imageSrc: '../images/sp-mockup.png'});
    
    
    var options = [
        {selector: '#online-portfolio', offset: 200, callback: 'Materialize.fadeInImage("#online-portfolio")' },
        {selector: '#bbj', offset: 200, callback: 'Materialize.fadeInImage("#bbj")' },
        {selector: '#globe1', offset: 200, callback: 'Materialize.fadeInImage("#globe1")' },
        {selector: '#globe2', offset: 200, callback: 'Materialize.fadeInImage("#globe2")' },
        
    ];
  
    Materialize.scrollFire(options);
    
});








function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.readyState === "complete") {
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

function trans(elem, sec) {
    $(elem).css('-webkit-transition' , 'all ' +sec+ 's ease');
    $(elem).css('-moz-transition' , 'all ' +sec+ 's ease');
    $(elem).css('-ms-transition' , 'all ' +sec+ 's ease');
    $(elem).css('-o-transition' , 'all ' +sec+ 's ease');
    $(elem).css('transition' , 'all ' +sec+ 's ease');
}