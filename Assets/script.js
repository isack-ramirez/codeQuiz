
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var displayedQuestion = document.getElementById("displayedQuestion");
var questionNumber = 0;
var answerKeyNumber = 0;
var userscore=0;



var sec;

var started = false;

q1.innerHTML = "Start";




function buttonClicked() {
    console.log(event.target);

    if (started === false) {
        timer();
        q2.style.visibility = "visible";
        q3.style.visibility = "visible";
        q4.style.visibility = "visible";

    }



    console.log(answerKeyNumber);
    console.log(questionObject.correctAnswer);

    console.log(started);
    if (this.event.target.innerHTML == questionObject.correctAnswer && started == true) {
        console.log("Correct");
        document.getElementById("timerSeconds").style.color = "green"
        document.getElementById("headerText").style.color = "green"
        document.getElementById("headerText").innerHTML = "Correct!"
        userscore+=10;

    }

    else if (this.event.target.innerHTML !== questionObject.correctAnswer && started == true) {
        console.log("Wrong!")
        sec -= 10;
        document.getElementById("timerSeconds").style.color = "red"
        document.getElementById("headerText").style.color = "red"
        document.getElementById("headerText").innerHTML = "Wrong!"
        userscore-=10;

    }

    else {

        started = true;
        sec = 50;
        document.getElementById("headerText").style.color = "black"
        document.getElementById("headerText").innerHTML = "Test Your Knowledge!"

    }
    console.log(userscore)
    changeQuestion();




}





var questionObject = {

    askedQuestion: "Press one",
    correctAnswer: "a",
    choice1: "a",
    choice2: "This 2",
    choice3: "not 3",
    choice4: "not 4"

}


function changeQuestion() {

    questionObject.askedQuestion = questionsArray[questionNumber];
    questionNumber++;
    questionObject.choice1 = questionsArray[questionNumber];
    questionNumber++;
    questionObject.choice2 = questionsArray[questionNumber];
    questionNumber++;
    questionObject.choice3 = questionsArray[questionNumber];
    questionNumber++;
    questionObject.choice4 = questionsArray[questionNumber];
    questionNumber++;

    
    questionObject.correctAnswer = correctAnswerkey[answerKeyNumber];
    answerKeyNumber++;

    displayedQuestion.innerHTML = questionObject.askedQuestion;
    q1.innerHTML = questionObject.choice1;
    q2.innerHTML = questionObject.choice2;
    q3.innerHTML = questionObject.choice3;
    q4.innerHTML = questionObject.choice4;

    if (answerKeyNumber==4){
        sec=0;
    }


}

var questionsArray = [

    //Question 0
    "What kind of loop requires three arguments when declared?",
    "For loop",
    "While loop",
    "if loop",
    "fruit Loops",
    //question 1
    "What data type is always true or false?",
    "Integer",
    "Boolean",
    "String",
    "Binary",
    //question 2
    "What is the commonly used phrase when writing ones first program?",
    "Howdy there!",
    "Im alive",
    "Greetings, from above",
    "Hello, World!"




];

var correctAnswerkey = [
    //question 0
    "For loop",
    //Question 1
    "Boolean",
    //Question 2
    "Hello, World!"
];

function timer() {

    var timer = setInterval(function () {
        document.getElementById('timerSeconds').innerHTML = '  ' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }


        if (sec <= 0) {
            questionNumber=0;
            answerKeyNumber=0;
            q1.innerHTML = "Start";
            q2.style.visibility = "hidden";
            q3.style.visibility = "hidden";
            q4.style.visibility = "hidden";
            started = false;
            document.getElementById("headerText").style.color = "Black"
            document.getElementById("headerText").innerHTML = "Time up! Your score is : "
            displayedQuestion.innerHTML=userscore;
            document.getElementById('timerSeconds').innerHTML = ' 0';
        }
    }, 300);
}

