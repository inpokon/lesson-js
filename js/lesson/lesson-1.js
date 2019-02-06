// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    if(correctBrackets(val) != null) {
        myTxt.text(correctBrackets(val))
    } else {
        myTxt.text('Хренушки, значение введено не коректно!!!');
    }

});


// сам код
let brackets = {  // объект в котором храняться скобки
    "[": "]",
    "{": "}",
    "(": ")",
    "<": ">"
};
function correctBrackets (str) {
    const vals = Object.keys(brackets).map(key => brackets[key]);  // возращаем значение ключей в массив
    const keys = Object.keys(brackets); // возращаем в массив ключи
    if (vals.indexOf(str[0]) + 1) {  // проверяем что бы первое значение не было значением ключа в объекте
        console.log('первое значение ключа в объекте, так дело не пойдет');
        return null;
    }
    let mass = str.split(''); // разбиваем строку на массив
    let stack = []; // создаем пустой массив
    for (let i = 0; i < mass.length; i++) {  // запускаем цыкл по массиву из нашей строки
        const l = mass[i];  // записываем в переменую значение массива
        if (keys.indexOf(l) + 1) { // записываем в новый массив только открывающие скобки
            stack.push(l);
        } else {
            if (stack.length) {
                mass[i] = brackets[stack.shift()]; // заменяем на нужное значение
            } else {
                console.log('ну вообще. Нужно вводить скобки');
                return null;
            }
        }
    }
    if (stack.length) {
        console.log('не хватает скобок');
        return null;
    }
    return mass.join('');
}
