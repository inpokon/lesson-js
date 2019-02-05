// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var splitVal = val.split(', ');
    var mass = [];
    for (var i = 1; i < splitVal.length; i++) {
        splitVal[i] = Number(splitVal[i]);
        mass.push(splitVal[i]);
    }
    if (splitVal[0] === 'numbers') {
        myTxt.text(remove(numbers, mass));
        console.log(remove(numbers, mass));
    } else if (splitVal[0] === 'strings') {
        myTxt.text(remove(strings, mass));
        console.log(remove(strings, mass));
    } else if (splitVal[0] === 'data') {
        myTxt.text(remove(data, mass));
        console.log(remove(data, mass));
    } else if (splitVal[0] === 'random') {
        myTxt.text(remove(random, mass));
        console.log(remove(random, mass));
    } else {
        myTxt.text('Первым значением нужно ввести одно из слов: numbers, strings, data, random');
    }

});


// сам код

var numbers = [2, 7, 1, 5, 7, 2, 5, 6, 3, 4];
var strings = ['JS', 'is', 'not', 'awesome'];
var data = [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 5}];
var random = [undefined, 'str', null, 42, {data: data}];

function remove (arr, indexes) {
    var arrayOfIndexes = indexes;
    return arr.filter(function (item, index) {  // используя метод .filter(), составим массив в который не будут входить элементы, подлежащие к удалению.
        return arrayOfIndexes.indexOf(index) == -1;  // Если индекс текущего элемента входит в массив индексов элементов, которые подлежат удалению, то метод .indexOf() вернёт значение равное или больше нуля. Callback-функция вернёт false и текущий элемент не войдёт в новый массив.
    });
}