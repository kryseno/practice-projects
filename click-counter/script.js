$(document).ready(initializeApp);

var count = 0;

function initializeApp () {
    $("#counter").click(handleCounterClick);
}

function handleCounterClick () {
    console.log('counter has been clicked', this);
    count++;
    $(this).find(".centered").text(count);
}