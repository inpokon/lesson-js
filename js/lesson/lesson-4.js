// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    myTxt.text(dobleNum(val));
});


// сам код

function dobleNum(num) {
    var half = num.slice(num.length / 2);  // делем строку попалам
    var numb = Number(num);  // из строки число
    return half + half === num ? numb : numb * 2;  // условие
}