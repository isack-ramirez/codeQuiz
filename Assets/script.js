
var q1=document.getElementById('q1');
var q2=document.getElementById('q2');
var q3=document.getElementById('q3');
var q4=document.getElementById('q4');

var started=false;

q1.innerHTML="Start";

q1.addEventListener("click",buttonClicked());


function buttonClicked(){
   
    console.log("click");
    if(started===false){

        q2.style.visibility="visible";

    }
}