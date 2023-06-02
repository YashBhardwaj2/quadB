console.log('JS |||||| LOADED')
let timer;
let seconds=60;
$('#tick').click(function (e) { 
    if(!$(this).is(':checked')){
        $(document).ready(function() {
            $(':root').css('--dark', '#828486');
            $(':root').css('--light','black');
            $(':root').css('--body','white');
          });
    }
    else{
        $(document).ready(function() {
            $(':root').css('--dark', '#2e3241');
            $(':root').css('--body', '#191d28');
            $(':root').css('--light', '#fff');
        });
    }
});
function startTimer(){
    console.log('hehehehe');
    // console.log(req);
    timer = setInterval(updateTimer,1000);
}

function updateTimer(){
    seconds--;
    $('#timer').text(seconds);
    if(seconds==0){
        seconds=60
        location.reload();

    }
}
function checkValues(){
    
    const valueElements = document.getElementsByClassName('difference');
    for(i=0; i<valueElements.length;i++){
        const value = parseFloat(valueElements[i].textContent);
        if(value<0){
            valueElements[i].classList.add('red');
        }
        else{
            valueElements[i].classList.add('green');
        }
    }
}
startTimer();
checkValues();