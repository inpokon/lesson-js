// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var arrVal = val.split(', ');
    myTxt.text(isAnagram(arrVal[0], arrVal[1]));
});

// сам код
var sort = function(str) {
    return str
        .replace(/\s+/g, '')  // убираем все пробелы
        .toLowerCase()  // Делаем слова с большой буквы
        .split('') // разбиваем на массив
        .sort() // сортируем
        .join(''); // склеиваем массив в строку
};
var isAnagram = function(original, test) {
    var res;
    if (original.trim() === test.trim()) { // тут идет проверка .trim() удаляет пробелы Впринципе типо регулярок  Если слова одинаковые то false
       res = false
    } else if (sort(original) === sort(test)) { // Но если это анаграмма то есть в двух словах полностью одинаковые символы то тогда выводим true
        res =true
    } else {
        res = 'Херушки слова не одинаковые и не Анаграмма, а может вообще ты ввел какую то хрень'
    }
    return res
};