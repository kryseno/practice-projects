$(document).ready(initializeApp);

function initializeApp(){
    $(".square").click(handleSquareCLick);
}

function handleSquareCLick(){
    console.log('square has been clicked', this);
}