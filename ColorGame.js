var numSquares=6;
var colors=randomColors(numSquares);
var squares=document.getElementsByClassName("square");
var display=document.getElementById("display");
var goalColor=goalColor1();
var rgb=document.getElementById("rgb");
var h1=document.querySelector("h1");
var h2=document.getElementById("h2");
var score=document.getElementById("score");
var newColor=document.getElementById("newcolor");
var main1=document.getElementById("main");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var a1=document.getElementById("a");
var name1=document.getElementById("username1");
var chance=document.getElementById("chances1");
var userChances=localStorage["chances"];


var stopWatch=setTimeout(Tick,1000);

function userId(){
    name1.innerHTML=localStorage["username"];
    chance.innerHTML=userChances;
    name1.style.color="white";
    chance.style.color="white";
    console.log(userChances);
}
userId();

function playerName(){
    h2.textContent="Player: "+name1.textContent;
    }
 function removeColors(){
    for(var i=0;i<squares.length;i++){
            squares[i].style.display="none";
            newColor.textContent="";
        }
    }
    function removeClassSelected(){
        newColor.classList.remove("selected");
        }

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
            newColor.classList.remove("selected");
            var clickedColor=this.style.backgroundColor;

        if(clickedColor===goalColor){
            changeColors(clickedColor);
            setTimeout(assignColors,1000);
            a1.textContent="";
            display.textContent=""
            h1.style.display="none";
            score.textContent="YOU WIN!";
            main1.style.backgroundColor=clickedColor;
            h2.style.backgroundColor=clickedColor;
            score.style.backgroundColor=clickedColor;
            newColor.style.display="none";
            if(userChances>0){
                userChances--;
                chance.innerHTML=userChances;
            }        
        }                              
            else{
                this.style.backgroundColor= "#232323";
                display.textContent="TRY AGAIN!!";
            }

        if(userChances===0){
            display.textContent="";
            newColor.textContent="";
            h1.textContent="GAME OVER!";
            newColor.style.height="66%";
            newColor.style.marginRight="230px";
            setTimeout(playerName,1000);
            setTimeout(removeColors,1000);  
            clearInterval(watch);
            } 
    });
}




rgb.textContent=goalColor;

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;

    }
}

function goalColor1()
{
    var random=Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function randomColors(num){
//make an array
var arr=[];
//put colors in it
for(var i=0 ;i<num;i++){
    arr.push(generateColors());
}
return arr;

//generate colors
function generateColors(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +  ")";
}
}

newColor.addEventListener("click",function(){
    colors=randomColors(numSquares);
    goalColor=goalColor1();
    rgb.textContent=goalColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    newColor.textContent="New Colors";
    main1.style.backgroundColor="steelblue";
    display.textContent="";
    newColor.classList.add("selected");
    setTimeout(removeClassSelected,100);
});

function assignColors(){
    a1.textContent="New Game!";
    h1.style.display="block";
    colors=randomColors(numSquares);
    goalColor=goalColor1();
    rgb.textContent=goalColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    main1.style.backgroundColor="steelblue";
    score.style.backgroundColor="steelblue";
    h2.style.backgroundColor="steelblue";
    score.textContent="";
    display.textContent="";
    newColor.style.display="inline";
}



if(localStorage["difficulty"]=="easy"){
    numSquares=3;
    colors=randomColors(numSquares);
    goalColor=goalColor1();
    rgb.textContent=goalColor;
    newColor.classList.remove("selected");

    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
}

else if(localStorage["difficulty"]=="hard"){
    var container1=document.querySelector(".container");
    numSquares=6;
    container1.style.height="255px";
    container1.style.margin="23px auto";
     colors=randomColors(numSquares);
     goalColor=goalColor1();
     rgb.textContent=goalColor;
     for(var i=0;i<squares.length;i++){
     squares[i].style.backgroundColor=colors[i];
     squares[i].style.display="block";
    }
    newColor.classList.remove("selected");
    h1.style.backgroundColor="steelblue";
}








//Stopwatch

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
    document.getElementById("timer").innerHTML=displayHours+":"+displayMinutes+":"+displaySeconds;
}

let watch;   

function Tick(){

    watch=  setInterval(stopwatch,1000);
    clockTick=true;
   
    console.log(clockTick);  
}


