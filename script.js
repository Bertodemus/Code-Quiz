//Variable Assignments
var startButt = document.querySelector("#startButt");
var timerText = document.querySelector("#timerText");
var questionNext = 0;
var timeLeft = 60;
var score;
var status;
var questionCard = document.querySelector("#questionCard");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var buttonA = document.querySelector("#buttonA");
var buttonB = document.querySelector("#buttonB");
var buttonC = document.querySelector("#buttonC");
var buttonD = document.querySelector("#buttonD");
    //variables for the transitions
var QCardSlide = document.querySelector("#questions");
var AACardSlide = document.querySelector("#cardA");
var ABCardSlide = document.querySelector("#cardB");
var ACCardSlide = document.querySelector("#cardC");
var ADCardSlide = document.querySelector("#cardD");


//Start the quiz
startButt.addEventListener("click", function () {
    startButt.classList.add("startFadeOut");
    QCardSlide.classList.add("fadeIn");
    setTimeout(deckFadeIn,300);
    startTimer();
    loadQuiz();
});

//Take the quiz
buttonA.addEventListener("click", function () {
    if (buttonA.textContent === QuizAnswerKey[questionNext]) {
        AACardSlide.classList.remove("bg-light");
        AACardSlide.classList.add("bg-success");
    } else {
        AACardSlide.classList.remove("bg-light");
        AACardSlide.classList.add("bg-danger");
        timeLeft = timeLeft - 5;
    }
    setTimeout(deckFadeOut,300);
    questionNext++;
    setTimeout(deckFadeIn,800);
    setTimeout(loadQuiz,850);
});

buttonB.addEventListener("click", function () {
    if (buttonB.textContent === QuizAnswerKey[questionNext]) {
        ABCardSlide.classList.remove("bg-light");
        ABCardSlide.classList.add("bg-success");
    } else {
        ABCardSlide.classList.remove("bg-light");
        ABCardSlide.classList.add("bg-danger");
        timeLeft = timeLeft - 5;
    }
    setTimeout(deckFadeOut,300);
    questionNext++;
    setTimeout(deckFadeIn,800);
    setTimeout(loadQuiz,850);
});

buttonC.addEventListener("click", function () {
    if (buttonC.textContent === QuizAnswerKey[questionNext]) {
        ACCardSlide.classList.remove("bg-light");
        ACCardSlide.classList.add("bg-success");
    } else {
        ACCardSlide.classList.remove("bg-light");
        ACCardSlide.classList.add("bg-danger");
        timeLeft = timeLeft - 5;
    }
    setTimeout(deckFadeOut,300);
    questionNext++;
    setTimeout(deckFadeIn,800);
    setTimeout(loadQuiz,850);
});

buttonD.addEventListener("click", function () {
    if (buttonD.textContent === QuizAnswerKey[questionNext]) {
        ADCardSlide.classList.remove("bg-light");
        ADCardSlide.classList.add("bg-success");
    } else {
        ADCardSlide.classList.remove("bg-light");
        ADCardSlide.classList.add("bg-danger");
        timeLeft = timeLeft - 5;
    }
    setTimeout(deckFadeOut,300);
    questionNext++;
    setTimeout(deckFadeIn,800);
    setTimeout(loadQuiz,850);
});

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

//Card Deck control
function deckFadeIn() {
    QCardSlide.classList.add("fadeIn");

    AACardSlide.classList.remove("bg-danger");
    AACardSlide.classList.remove("bg-success");
    AACardSlide.classList.add("bg-light");
    AACardSlide.classList.add("fadeIn");

    ABCardSlide.classList.remove("bg-danger");
    ABCardSlide.classList.remove("bg-success");
    ABCardSlide.classList.add("bg-light");
    ABCardSlide.classList.add("fadeIn");

    ACCardSlide.classList.remove("bg-danger");
    ACCardSlide.classList.remove("bg-success");
    ACCardSlide.classList.add("bg-light");
    ACCardSlide.classList.add("fadeIn");

    ADCardSlide.classList.remove("bg-danger");
    ADCardSlide.classList.remove("bg-success");
    ADCardSlide.classList.add("bg-light");
    ADCardSlide.classList.add("fadeIn");
}

function deckFadeOut() {
    QCardSlide.classList.remove("fadeIn");
    AACardSlide.classList.remove("fadeIn");
    ABCardSlide.classList.remove("fadeIn");
    ACCardSlide.classList.remove("fadeIn");
    ADCardSlide.classList.remove("fadeIn");
}

//Quiz functions
function loadQuiz() {
    questionCard.textContent = QuizQuestions[questionNext];
    answerA.textContent = QuizAnswerA[questionNext];
    answerB.textContent = QuizAnswerB[questionNext];
    answerC.textContent = QuizAnswerC[questionNext];
    answerD.textContent = QuizAnswerD[questionNext];
}


//Game Over functions
function gameOver() {
    console.log("GAME OVER");
}