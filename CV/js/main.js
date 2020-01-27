$(document).ready(function(){ 
    new WOW().init();
$(".navbar-links, .footer-links").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500,'easeInOutExpo');
    });
$(window).scroll(function() { 
if ($(this).scrollTop() > 100) { 
$('.back-to-top').fadeIn('slow'); 
} else { 
$('.back-to-top').fadeOut('slow'); 
} 
}); 
$('.back-to-top').click(function(){ 
$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo'); 
return false; 
});
});


