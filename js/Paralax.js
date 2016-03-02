$(window).scroll(function () {

    var pxScrolled = $(this).scrollTop();

    $('.passPhoto').css({
        'transform' : 'translate(0px, '+ pxScrolled / 5 + '%)'
    });

    $('.backGround').css({
        'transform' : 'translate(0px, '+ pxScrolled / 4 + '%)'
    });

    $('.foreGround').css({
        'transform' : 'translate(0px, -'+ pxScrolled / 40 + '%)'
    });

    if(pxScrolled >= 600){
        $('.fab').addClass('fabScale');
    }else if(pxScrolled < 400){
        $('.fab').removeClass('fabScale');
    }

});

$('.btnDown').on('click', function(e){
    e.preventDefault();
    $('body').animate({scrollTop: 600}, 3500, 'easeInOutQuad');
});
$('.fab').on('click', function(e){
    e.preventDefault();
    $('body').animate({scrollTop: 0}, 1000);
});