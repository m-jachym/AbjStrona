$(document).ready(function(){
    $('#hamburger').click(function(){
        $('ul').toggleClass('active');
        $('nav').toggleClass('active');
        $('#hamburger').toggleClass('iks');     
    })
})

$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('#logo').addClass('resize');
    }
    else {
        $('#logo').removeClass('resize');
    }
})