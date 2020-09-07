//Variable Assignments
var startButt = document.querySelector("#startButt");
var timerText = document.querySelector("#timerText");
var timeLeft = 30;
var scoreBoard = document.querySelector("#scoreText");
var score = 0;
var questionNext = 0;
var QTmenu1 = document.querySelector("#QTmenu1");
var QTmenu2 = document.querySelector("#QTmenu2");
var QTmenu3 = document.querySelector("#QTmenu3");
var QText = document.querySelector("#QTypeText");
var questionCard = document.querySelector("#questionCard");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var buttonA = document.querySelector("#buttonA");
var buttonB = document.querySelector("#buttonB");
var buttonC = document.querySelector("#buttonC");
var buttonD = document.querySelector("#buttonD");
var quizScript = document.querySelector("#quizScript");
    //variables for the transitions
var MCardSlide = document.querySelector("#menuCard");
var QCardSlide = document.querySelector("#questions");
var AACardSlide = document.querySelector("#cardA");
var ABCardSlide = document.querySelector("#cardB");
var ACCardSlide = document.querySelector("#cardC");
var ADCardSlide = document.querySelector("#cardD");
    //Score array
// var scoreEntryModal = document.querySelector("#scoreEntryModal");
var scoreName = document.querySelector("#scoreName");
var scoreEntryText = document.querySelector("#scoreEntryText");
var scoreNameButt = document.querySelector("#scoreNameButt");
var scoreModalList = document.querySelector("#scoreModalList");

QuizQuestions = JSQuizQuestions;
QuizAnswerA = JSQuizAnswerA;
QuizAnswerB = JSQuizAnswerB;
QuizAnswerC = JSQuizAnswerC;
QuizAnswerD = JSQuizAnswerD;
QuizAnswerKey = JSQuizAnswerKey;

//Name entry at Game Over
scoreNameButt.addEventListener("click", function() {
      var item = document.createElement("p");
      item.textContent = scoreName.value + " " + score.toString() + " Points";
      console.log(scoreName.value);
      scoreModalList.append(item);
});

//Quiz Options
QTmenu1.addEventListener("click", function () {
    QText.textContent = "Javascript";
    QuizQuestions = JSQuizQuestions;
    QuizAnswerA = JSQuizAnswerA;
    QuizAnswerB = JSQuizAnswerB;
    QuizAnswerC = JSQuizAnswerC;
    QuizAnswerD = JSQuizAnswerD;
    QuizAnswerKey = JSQuizAnswerKey;
});

QTmenu2.addEventListener("click", function () {
    QText.textContent = "CSS";
    QuizQuestions = CSSQuizQuestions;
    QuizAnswerA = CSSQuizAnswerA;
    QuizAnswerB = CSSQuizAnswerB;
    QuizAnswerC = CSSQuizAnswerC;
    QuizAnswerD = CSSQuizAnswerD;
    QuizAnswerKey = CSSQuizAnswerKey;
});

QTmenu3.addEventListener("click", function () {
    QText.textContent = "DONUTS!";
    QuizQuestions = DTQuizQuestions;
    QuizAnswerA = DTQuizAnswerA;
    QuizAnswerB = DTQuizAnswerB;
    QuizAnswerC = DTQuizAnswerC;
    QuizAnswerD = DTQuizAnswerD;
    QuizAnswerKey = DTQuizAnswerKey;
});

//Start the quiz
startButt.addEventListener("click", function () {
    score = 0;
    MCardSlide.classList.add("startFadeOut");
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
        score = score + 5;
        scoreBoard.textContent = score.toString();
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
        score = score + 5;
        scoreBoard.textContent = score.toString();
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
        score = score + 5;
        scoreBoard.textContent = score.toString();
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
        score = score + 5;
        scoreBoard.textContent = score.toString();
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
    scoreEntryText.textContent = score.toString();
    setTimeout(deckFadeOut,300);
    questionNext = 0;
    timeLeft = 30;
    scoreBoard.textContent = "-----";
    MCardSlide.classList.remove("startFadeOut");
    $('#scoreEntryModal').modal('show');
    console.log("GAME OVER");
}