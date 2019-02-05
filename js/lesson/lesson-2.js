// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var splitVal = val.split(', ');
    var mass = [];
    for (var i = 0; i < splitVal.length; i++) {
        splitVal[i] = Number(splitVal[i]);
        mass.push(splitVal[i]);
    }
    myTxt.text(triangle(mass));
    // if(correctBrackets(mass) != null) {
    //     myTxt.text(triangle(mass))
    // } else {
    //     myTxt.text('Хренушки, значение введено не коректно!!!');
    // }

});


// сам код

function triangle(arg) {
    var sides = arg.slice(0, 3).sort(compareNumbers);  // сортируем наш массив. Так как треугольтик имеет всего лишь три точки то если ввести больше чем нужно аргументов то мы его обрежим как еврея

    if (sides[0] + sides[1] <= sides[2]) {  // ну тут геометрия
        return 'Треугольник не существует';
    }

    var sum = Math.pow(sides[0], 2) + Math.pow(sides[1], 2);  // сумма квадратов двух меньших чисел
    var side = Math.pow(sides[2], 2); // квадрат большего числа

    if (sum === side) { return 'Треугольник прямоугольный'; }
    if (sum < side) { return 'Треугольник тупоугольный'; }
    if (sum > side) { return 'Треугольник остроугольный'; }
}
function compareNumbers(a, b) {  // функция для сортировки
    return a - b;
}