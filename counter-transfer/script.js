$(document).ready(initializeApp);

var decrementText;

function initializeApp(){
    console.log('app initialized');
    $("div").click(handleDivClicks);
}