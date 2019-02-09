// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var arrVal = val.split(', ');


    myTxt.text(reversered(val));
});


// сам код

function reversered(arg) {
    var val = arg, arr = [], res, answer;
    for (var i = 0; i < val.length; i++) {
        arr.unshift(val[i]);
    }
    res = arr.join('');
    if (val == res) {
        answer = 'является палиндромом';
    }  else {
        answer = 'не является палиндромом'
    }
    return answer
}
