$(document).ready(function () {
    closeStart();
});

function closeStart() {
    var $start = $('.start'),
        $startBtn = $('.start a');
    $startBtn.on('click', function () {
       $start.addClass('start-hidden');
       $('body, html').removeClass('overflow-hidden');
    });
}