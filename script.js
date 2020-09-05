//Variable Assignments
var startButt = document.querySelector("#start");
var timerText = document.querySelector("#timerText");
var timeLeft = 30;
var score;
var status;
var question;
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");

//Start the quiz
startButt.addEventListener("click", function () {
    startTimer();
    startQuiz();
},);

//Timing functions
function startTimer() {
    var clock = setInterval( function () {
        timeLeft--;
        timerText.textContent = timeLeft.toString() + " seconds";
        console.log(timeLeft);
        if (timeLeft === 0) {
            clearInterval(clock);
            gameOver(); 
        }
    }, 1000);
}

//Quiz functions


//Game Over functions
function gameOver() {
    console.log("GAME OVER");
}