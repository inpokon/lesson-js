// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var arrVal = val.split(', ');
    myTxt.text(mixColors(arrVal[0], arrVal[1]));
});


// сам код

function toHexInt(i){  //вспомогательная функция которая переводит из шестнадцатеричной строки в десятичное число
    return parseInt(i, 16);
}

function _mixColors(color1, color2){

    var color = "";

    /*
     * Сначала считаем среднее по красному цвету - xx---- + yy----
     * Затем по зеленому --xx-- + --yy--
     * И по синему ----xx + ----yy
     */
    for(var i = 0; i < color1.length; i += 2){
        var partColor1 = color1.slice(i, i+2);  // считаваем красный зеленый и синий у первого цвета
        var partColor2 = color2.slice(i, i+2);  // считаваем красный зеленый и синий у второго цвета
        var toHexOne = toHexInt(partColor1); // вспомогательная функция которая переводит из шестнадцатеричной строки в десятичное число
        var toHexTwo = toHexInt(partColor2); // вспомогательная функция которая переводит из шестнадцатеричной строки в десятичное число
        console.log(toHexOne + ' - ' + toHexTwo);
        var mix = (toHexOne + toHexTwo)/2; // смешываем цвета
        var mathMix =  Math.round(mix); // округляем к наименьшему
        var partColor = mathMix.toString(16); // переводим наш микс обратно в шестнадцетеричную строку
        color += (partColor.length === 1 ? "0" + partColor : partColor);  // склеиваем наш результат
    }

    return color;  // на выходе получаем наш цвет
}

function mixColors(color1, color2){
    var c1 = color1[0] === "#" ? color1.slice(1) : color1;  // если решотка присутстувует вырезаем ее
    var c2 = color2[0] === "#" ? color2.slice(1) : color2;

    return "#" + _mixColors(c1, c2);  // всяко разно добавляем решотку
}