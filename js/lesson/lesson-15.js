// Нужное для страницы
var myInput = $('#form-input'),
    myBtn = $('#form-btn'),
    myTxt = $('.main__otvet li');

myBtn.on('click', function (e) {
    e.preventDefault();
    var val = myInput.val();
    var arrVal = val.split(', ');

});

var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
]; 

function pluck(arr, k) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        for (var key in obj) {
            if (key == k) {
                newArr.push(obj[key]);
            }
        }
    }
    return newArr
}

console.log(pluck(characters, 'name')); // ['barney', 'fred']