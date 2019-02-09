// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var arrVal = val.split(', ');

});


var arr = [10, 12, 15, 21];
var timeout = 0;
for (var i = 0; i < arr.length; i++) {
    setTimeout(
        (function (N) {
            return function () {
                console.log(N)
            }
        }) (i)
        ,
        timeout
    );
    timeout += 3000;
}

