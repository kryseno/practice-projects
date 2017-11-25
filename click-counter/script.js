$(document).ready(initializeApp);

var count = 0;
var timer = null;

function initializeApp () {
    $("#counter").click(handleCounterClick);
}

function handleCounterClick () {
    console.log('counter has been clicked', this);
    count++;
    if (timer !== null) {
        clearTimeout(timer);
        timer = null;
    }
    timer = setTimeout(setCount, 2000);

    function setCount () {
        $(".centered").text(count);
        count = 0;
        timer = null;
    }
}