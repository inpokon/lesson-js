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

function toHexInt(i){
    return parseInt(i, 16);
}

function mixColors(color1, color2){

    var color = "";

    /*
     * Сначала считаем среднее по красному цвету - xx---- + yy----
     * Затем по зеленому --xx-- + --yy--
     * И по синему ----xx + ----yy
     */
    for(var i = 0; i < color1.length; i += 2){
        var partColor = Math.round((toHexInt(color1.slice(i, i+2)) + toHexInt(color2.slice(i, i+2)))/2).toString(16);

        color += (partColor.length === 1 ? "0" + partColor : partColor);
    }

    return color;
}