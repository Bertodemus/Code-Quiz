// Variable Assignments
var startButt = document.querySelector("#startButt");
var timeLeft = 45;
var timerText = document.querySelector("#timerText");
var score = 0;
var scoreBoard = document.querySelector("#scoreText");
var questionNext = 0;
var quizTheme = "js";
var QText = document.querySelector("#QTypeText");
var QTmenu1 = document.querySelector("#QTmenu1");
var QTmenu2 = document.querySelector("#QTmenu2");
var QTmenu3 = document.querySelector("#QTmenu3");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var buttonA = document.querySelector("#buttonA");
var buttonB = document.querySelector("#buttonB");
var buttonC = document.querySelector("#buttonC");
var buttonD = document.querySelector("#buttonD");
var questionCard = document.querySelector("#questionCard");
    // Variables for the card transitions
var MCardSlide = document.querySelector("#menuCard");
var QCardSlide = document.querySelector("#questions");
var AACardSlide = document.querySelector("#cardA");
var ABCardSlide = document.querySelector("#cardB");
var ACCardSlide = document.querySelector("#cardC");
var ADCardSlide = document.querySelector("#cardD");
    // Variable for the Score keeping and modals
var players = [];
var scoreName = document.querySelector("#scoreName");
var clearScore = document.querySelector("#clearScoreButt");
var scoreEntryText = document.querySelector("#scoreEntryText");
var scoreNameSaveButt = document.querySelector("#scoreNameSaveButt");
var scoreModalList = document.querySelector("#scoreModalList");

// Score presentation and data management
    // Function for initializing the "scores" data
initScores();

    // EventListener for clearing the locally stored scores
clearScore.addEventListener("click", function(){
    localStorage.clear();
    scoreModalList.innerHTML = "";
});

    // Initialization function
function initScores() {
    var storedPlayers = JSON.parse(localStorage.getItem("players"));
    
    if (storedPlayers !== null) {
      players = storedPlayers;
    }

    renderPlayers();
}

  // Function for rendering the data to the scoreboard
function renderPlayers() {
    scoreModalList.innerHTML = "";
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        var dom = new DOMParser()
        .parseFromString(player,'text/html');
        scoreModalList.append(dom.body.firstElementChild);
    }
}

    // Name entry at Game Over
scoreNameSaveButt.addEventListener("click", function() {
    var item = document.createElement("p");
    var badge = document.createElement("img");

    if (quizTheme === "donuts") {
    item.textContent = " - " + scoreName.value.trim() + " - " + score.toString() + " Points";
    item.prepend(badge);
    badge.setAttribute("src", "images/donutbadge.png")
    scoreModalList.append(item);
    players.push(item.outerHTML);
    localStorage.setItem("players",JSON.stringify(players));
    } else if (quizTheme === "css") {
        item.textContent = " - " + scoreName.value.trim() + " - " + score.toString() + " Points";
        item.prepend(badge);
        badge.setAttribute("src", "images/cssbadge.png")
        scoreModalList.append(item);
        players.push(item.outerHTML);
        localStorage.setItem("players",JSON.stringify(players));
    } else if (quizTheme === "js") {
        item.textContent = " - " + scoreName.value.trim() + " - " + score.toString() + " Points";
        item.prepend(badge);
        badge.setAttribute("src", "images/jsbadge.png")
        scoreModalList.append(item);
        players.push(item.outerHTML);
        localStorage.setItem("players",JSON.stringify(players));
    }

});

// Quiz presentation and data management
    // Sets the JavaSCript quiz as the default quiz
QuizQuestions = JSQuizQuestions;
QuizAnswerA = JSQuizAnswerA;
QuizAnswerB = JSQuizAnswerB;
QuizAnswerC = JSQuizAnswerC;
QuizAnswerD = JSQuizAnswerD;
QuizAnswerKey = JSQuizAnswerKey;

    // Quiz Options for determining which set of questions to ask
QTmenu1.addEventListener("click", function () {
    quizTheme = "js";
    document.body.style.backgroundImage = "url('./images/JSclip.png')";
    QText.textContent = "JS Gauntlet!";
    QuizQuestions = JSQuizQuestions;
    QuizAnswerA = JSQuizAnswerA;
    QuizAnswerB = JSQuizAnswerB;
    QuizAnswerC = JSQuizAnswerC;
    QuizAnswerD = JSQuizAnswerD;
    QuizAnswerKey = JSQuizAnswerKey;
});

QTmenu2.addEventListener("click", function () {
    quizTheme = "css";
    document.body.style.backgroundImage = "url('./images/CSSclip.png')";
    QText.textContent = "Let's mess with CSS!";
    QuizQuestions = CSSQuizQuestions;
    QuizAnswerA = CSSQuizAnswerA;
    QuizAnswerB = CSSQuizAnswerB;
    QuizAnswerC = CSSQuizAnswerC;
    QuizAnswerD = CSSQuizAnswerD;
    QuizAnswerKey = CSSQuizAnswerKey;
});

QTmenu3.addEventListener("click", function () {
    quizTheme = "donuts";
    document.body.style.backgroundImage = "url('./images/donutclip.png')";
    QText.textContent = "Go nuts for DONUTS!";
    QuizQuestions = DTQuizQuestions;
    QuizAnswerA = DTQuizAnswerA;
    QuizAnswerB = DTQuizAnswerB;
    QuizAnswerC = DTQuizAnswerC;
    QuizAnswerD = DTQuizAnswerD;
    QuizAnswerKey = DTQuizAnswerKey;
});

    // Start the quiz
startButt.addEventListener("click", function () {
    score = 0;
    MCardSlide.classList.add("startFadeOut");
    QCardSlide.classList.add("fadeIn");
    setTimeout(deckFadeIn,300);
    startTimer();
    loadQuiz();
});

    // EventListeners for the answer button
buttonA.addEventListener("click",answerPick);
buttonB.addEventListener("click",answerPick);
buttonC.addEventListener("click",answerPick);
buttonD.addEventListener("click",answerPick);
    // Function for answer button actions
function answerPick() {
    if (this.textContent === QuizAnswerKey[questionNext]) {
        this.parentElement.classList.remove("bg-light");
        this.parentElement.classList.add("bg-success");
        score = score + 5;
        scoreBoard.textContent = score.toString();
    } else {
        this.parentElement.classList.remove("bg-light");
        this.parentElement.classList.add("bg-danger");
        timeLeft = timeLeft - 5;
    }

    if (timeLeft <= 0) {
        setTimeout(deckFadeOut,300);
    } else if (questionNext === 9) {
        setTimeout(deckFadeOut,300);
        timeLeft = 0;
    } else {
        setTimeout(deckFadeOut,300);
        questionNext++;
        setTimeout(deckFadeIn,800);
        setTimeout(loadQuiz,850);
    }
} 

    // Answer transitions and correct/incorrect color responses
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

    // Quiz load function
function loadQuiz() {
    questionCard.textContent = QuizQuestions[questionNext];
    answerA.textContent = QuizAnswerA[questionNext];
    answerB.textContent = QuizAnswerB[questionNext];
    answerC.textContent = QuizAnswerC[questionNext];
    answerD.textContent = QuizAnswerD[questionNext];
}

// Timing control function
function startTimer() {
    var clock = setInterval( function () {

        if (timeLeft <= 0) {
            clearInterval(clock);
            gameOver();
        } else { 
        timeLeft--;
        timerText.textContent = timeLeft.toString();
        }

    }, 1000);
}

// Game Over functions
function gameOver() {
    scoreName.value = "";
    scoreEntryText.textContent = "You scored " + score.toString() + " points!";
    setTimeout(deckFadeOut,500);
    questionNext = 0;
    timeLeft = 45;
    scoreBoard.textContent = "0";
    timerText.textContent = "0"; 
    setTimeout(loadStartMenu,1000);
    $('#scoreEntryModal').modal('show');
}

// This function is used to reload the main menu, with a timeout delay
function loadStartMenu() {
    MCardSlide.classList.remove("startFadeOut");
}