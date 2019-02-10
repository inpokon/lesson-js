// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var arrVal = val.split(', ');

});
function currentYPosition() {   // определяет текущее положение скрола
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {   // определяет положение элемента
    var elm = document.getElementById(eID);   // сам элемент
    var y = elm.offsetTop;  // опредяем верхнюю точку положения на экране элемента
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) { // если у нас позиционирование не статик то выполняем цикл на котором опредяем место положение элемента
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();  // определяет текущее положение скрола
    var stopY = elmYPosition(eID);  // определяет положение элемента
    var distance = stopY > startY ? stopY - startY : startY - stopY; // условие значение 1 значение 2
    if (distance < 100) {  // Если растояние от прокрутки до элемента меньше 100 то выполнить быстрый скролл так как оне не будет заметен
        scrollTo(0, stopY); return;  // это ради скорости которая будет ниже
    }
    var speed = Math.round(distance / 100);  // вот собственно сама скорость прокрутки
    if (speed >= 20) speed = 20; // Скрость прокрутки не может быть больше 20
    var step = Math.round(distance / 25);  // Шаг прокрутки
    var leapY = stopY > startY ? startY + step : startY - step;  // условие значение1 значение 2
    var timer = 0; // Таймер нужен что бы сделать планую прокрутку
    if (stopY > startY) {  // если скролл выше элемента
        for ( var i = startY; i < stopY; i += step ) {  //
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);  // спускаем окно с помощью цикла и задержки
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;  // Каждый раз прибавляем шаг, условие нуэно что бы не уйди за пределы,
        } return;
    } // если скролл ниже элемента
    for ( var i = startY; i > stopY; i -= step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}