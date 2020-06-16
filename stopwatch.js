//defining avriables to hold time values
let seconds =0;
let minutes =0;
let hours   =0;

let displaySeconds=0;
let displayMinutes=0;
let displayHours=0;

let clockTick=false;


//Stopwatch function(logic)
function stopwatch(){
    seconds++;
    if(seconds/60===1){
        seconds=0;
        minutes++;
        if(minutes/60===1){
            minutes=0;
            hours++;
        }
    }
    if(seconds<10){
        displaySeconds= "0"+seconds;
       }
       else{
        displaySeconds=seconds;
       }
       if(minutes<10){
        displayMinutes= "0"+minutes;
           }
           else{
                displayMinutes=minutes;
           }
       if(hours<10){
                displayHours= "0"+hours;
            }
           else{
                displayHours=hours;
           }
    document.getElementById("display").innerHTML=displayHours+":"+displayMinutes+":"+displaySeconds;
}

let watch;   

function Tick(){
document.getElementById("startStop").addEventListener("click",function(){
    if(!clockTick){
    watch=  setInterval(stopwatch,1000);
    this.innerHTML="Stop";
    clockTick=true;
    console.log(clockTick);
    }
    else{
        clearInterval(watch);
        this.innerHTML="Start";
        clockTick=false;
        console.log(clockTick);
    }
});
}
Tick();

document.getElementById("reset").addEventListener("click",function(){
    seconds=0;
    minutes=0;
    hours=0;
    clearInterval(watch);
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("startStop").innerHTML="Start";
    clockTick=false;
})


