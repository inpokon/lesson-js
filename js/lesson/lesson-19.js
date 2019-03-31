var timeWrap = document.getElementById('js-time'),
    btn = document.getElementById('timeOut'),
    flag = true;

function times () {
    var newTimes = new Date(),
        curTimes = newTimes.getHours() + ' : ' + newTimes.getMinutes() + ' : ' + newTimes.getSeconds();
    timeWrap.innerText = curTimes;
}

btn.addEventListener('click',  timeStart);

function timeStart() {
    if (flag) {
        times();
        flag = false;
    } else {
        setInterval('times()', 1000);
        flag = true;
    }
}



