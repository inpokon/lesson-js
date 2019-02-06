$(document).ready(function () {
    closeStart();
    mySlider();
    $('.code').on('click', function (e) {
        e.preventDefault();
       $('.popup').addClass('popup--active');
    });
    $('.popup__close').on('click', function (e) {
        e.preventDefault();
        $('.popup').removeClass('popup--active');
    });
});

function closeStart() {
    var $start = $('.start'),
        $startBtn = $('.start a');
    $startBtn.on('click', function () {
       $start.addClass('start-hidden');
       $('body, html').removeClass('overflow-hidden');
    });
}
function mySlider() {
    $('.slider').slick();
}