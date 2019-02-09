// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var arrVal = val.split(', ');

    myTxt.text('Так как результат нужно записывать через аргументы, я пока что хер знает как это сделать но задачка решена, ответ в консоли');
});

console.log(getStr('-', '1', 'b', '1c'));
// сам код
function getStr() {
    return []  // создается пустой массив
        .slice  // возращает в него массив из аргументов
        .call(arguments, 1) // Начинаем массив с первого элемента не с нулевого а с первого
        .join(arguments[0]) // делаем разделитель нулевым элементом
}