var id = document.getElementById('ticker'),
    textId = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + id.innerHTML,
    btn = document.getElementById('js-btn');

console.log(id.innerHTML);

function crawlLine(text, speed) {
    function main () {
        var currentSymbol = text[0],
            currentText = text.slice(1) + currentSymbol;
        text = currentText;
        id.innerHTML = currentText;
    }
    setInterval(main, speed);
}
crawlLine(textId, 90);

btn.addEventListener('click', function () {
    var valInputText = document.getElementById('js-text').value,
        valInputSpeed = document.getElementById('js-speed').value,
        valLeft =  document.getElementById('js-left'),
        valRight = document.getElementById('js-right');

    if (valInputText == '' && valInputSpeed == '') {
        crawlLine(textId, 90);
    } else if (valInputSpeed == '') {
        textId = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + valInputText;
        crawlLine(textId, 90);
    } else if (valInputText == '') {
        crawlLine(textId, valInputSpeed);
    } else {
        textId = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + valInputText;
        crawlLine(textId, valInputSpeed);
    }
});