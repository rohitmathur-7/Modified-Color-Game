var link=document.getElementById("gameLink");
var uName=document.getElementById("name");
var uNum=document.getElementById("num");
var mode;

function sendUserInfo(){
    localStorage["username"]=uName.value;
    localStorage["chances"]=uNum.value;
}

function difficulty(event,index){
    event.preventDefault();
    mode=index;
    if(index===0){
        localStorage["difficulty"]="easy";
        console.log(localStorage["difficulty"]);
    }
    else{
        localStorage["difficulty"]="hard";
        console.log(localStorage["difficulty"]);
    }
}

