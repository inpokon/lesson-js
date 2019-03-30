// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var arrVal = val.split(', ');

});

function partial(fn) {
    var context = this, //Сохраняем текущий контекс
    params = Array.prototype.slice.call(arguments); //Преобразуем аргументы в нормальный массив с помощью такого хака
    params.shift(); //Убираем первый аргумент, так как он у нас уже есть в качестве "fn" и дальше не нужен
    return function() { //Возвращаем новую ф-цию
        var params2 = Array.prototype.slice.call(arguments); //Дополнительные параметры также преобразуем в массив
        var newParams = params.concat(params2); //Склеиваем забинденные параметры + дополнительные (текущие);
        return fn.apply(context, newParams); //Вызываем "fn" с сохранённым контекстом и с склеенными параметрами
    }
}


function add(a, b) { return a + b; }
function mult(a, b, c, d) { return a * b * c * d; }

var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6

function f1(a, b, c, d) { return a + b + c + d;}

var f2 = partial(f1, 1, 2);

console.log(f2(3, 4));
console.log(f2(32, 41));

