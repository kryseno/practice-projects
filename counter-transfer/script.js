$(document).ready(initializeApp);

function initializeApp(){
    console.log('app initialized');
    $("div").click(handleDivClicks);
}

function handleDivClicks(){
    console.log('div clicks enabled');
    var incrementText = $(this).text();
    var decrementText = null;
    console.log('this is: ',this);
    if($(this).hasClass('counter1')){
        incrementText++;
        $(this).text(incrementText);
        decrementText = $(".counter2").text();
        decrementText--;
        $(".counter2").text(decrementText);
    } else {
        incrementText++;
        $(this).text(incrementText);
        decrementText = $(".counter1").text();        
        decrementText--;       
        $(".counter1").text(decrementText);
    }
}