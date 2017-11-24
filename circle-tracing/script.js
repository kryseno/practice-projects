$(document).ready(initializeApp);

// var squares = $(".square");
// var div = $("div");

function initializeApp(){
    $(".square").click(handleSquareCLick);
}

function handleSquareCLick(){
    console.log('square has been clicked', this);
    if($(this).find("#target").length > 0){
        var randomSquare = $(".square").eq(Math.floor(Math.random()*3) + 1);
        $("#target").prependTo(randomSquare);
    } else {
        return
    }
}