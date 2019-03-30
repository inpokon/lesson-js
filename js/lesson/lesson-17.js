// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var arrVal = val.split(', ');

});


function sequence(start, step) {
    start = start || 0; // Начальное значение по умолчанию равно 0.
    step = step || 1; // Начальный шаг по умолчанию равно 1.
    start -= step;  // отнимаем шаг
    return function() {  // возращаем функцию в которой прибавляем шаг по итогу у нас функция получается то число которое нужно
        return start += step;
    }
}
var generator = sequence(10, 3);
var generator2 = sequence(7, 1);
console.log(generator()); // 10  // тут получается 10 - 3 + 3
console.log(generator()); // 13 // так как у нас функция сохранилась и значение в ней сохранилось то получается 13 - 3 + 3
console.log(generator()); // 16 // 16 - 3 + 3
console.log(generator2()); // 7 // 7 - 1 + 1
console.log(generator()); // 19 // 19 - 3 + 3
console.log(generator2()); // 8 // 8 - 1 + 1

