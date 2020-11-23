


var buttonEl = document.querySelector("#start-quiz");
var buttonEl2 = document.getElementById("save-score");
var card = document.getElementById("#strt");
var timerEl = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var messageEl = document.getElementById("message");
var scoreEl = document.getElementById("score-container");
var myScore = document.getElementById("my-score");
var leaderBoard = document.getElementById("leaderboard");
var highScores = document.querySelector("#leaderboard")
var timeLeft = 60;

//questions

let questions = [{
    question: "What are variables used for in JavaScript programs?",
    choiceA: "1. Storing numbers, dates, or other values",
    choiceB: "2. Varying randomly",
    choiceC: "3. Causing high-school algebra flashbacks",
    choiceD: "4. None of the above",
    correct: "A"
}, {
    question: "Inside which HTML element do we put the JavaScript?",
    choiceA: "1. js",
    choiceB: "2. scripting",
    choiceC: "3. sript",
    choiceD: "4. javascript",
    correct: "C"
}, {
    question: "Using which statement is how you test for a specific condition?",
    choiceA: "1. Select",
    choiceB: "2. If",
    choiceC: "3. Switch",
    choiceD: "4. For",
    correct: "B"
}, {
    question: "How does JavaScript store dates in a date opject?",
    choiceA: "1. the number of milliseconds since January 1, 1970",
    choiceB: "2. The number of days since January 1, 1970",
    choiceC: "3. The number of seconds since January 1, 1970",
    choiceD: "4. None of the above",
    correct: "A"
}, {
    question: "What is the correct syntax for referring to an external script call abc.js?",
    choiceA: "1. script href=",
    choiceB: "2. script name=",
    choiceC: "3. script src=",
    choiceD: "4. none of the above",
    correct: "C"
}];


buttonEl.addEventListener('click',start);

function start(){
    strt.style.display ="none";
    countdown();
    renderQuestion();
    quiz.style.display = "block";
}

function countdown() {
    var timeLeft = 60;
  setInterval(function() {
        
      timeLeft--; 
      if (timeLeft >= 0) {
        span = document.getElementById("timer");
        span.innerHTML = timeLeft;
      }
      if (timeLeft === 0) {
          getScore();
      }
      else if (runningQuestionsIndex >= lastQuestionsIndex) {
          
      }
    }, 1000);
    console.log(timeLeft)
  };


// create some variable
let lastQuestionsIndex = questions.length -1;
let runningQuestionsIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionsIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML =q.choiceA;
    choiceB.innerHTML =q.choiceB;
    choiceC.innerHTML =q.choiceC;
    choiceD.innerHTML =q.choiceD;

}

var score = 0



function checkAnswer(answer){
    if(questions[runningQuestionsIndex].correct === answer) {
        score += 100;
        messageEl.textContent = ("Correct - you got 10 points!");
        console.log(score);
    }
    else {
        messageEl.textContent = ("Incorrect - 10 seconds off the clock!");
        timeLeft -= 10;
        document.getElementById("timer").innerHTML= timeLeft;
    }
    if (runningQuestionsIndex < lastQuestionsIndex){
        runningQuestionsIndex++;
        renderQuestion();
    }
    else{
        timerEl.style.display ="none";
        getScore();
    }
}

function getScore() {
    quiz.style.display = "none";
    scoreEl.style.display = "block";
    myScore.textContent = score;
    
      }

      
      
      var taskFormHandler = function(event) {
        event.preventDefault();
        var taskNameInput = document.getElementById("your-initials").value;
        var showScore= {taskNameInput, score};
            console.log (showScore);

    if (taskNameInput == "") {
        alert("Please enter your initials.");
        
    }
    else {
        updateLeaderboard();
    }

    function updateLeaderboard() {
        
        scoreEl.style.display = "none";
        leaderBoard.style.display = "block";  
            listItemEl.className = "leaderboard-name";
            listItemEl.innerHTML = "<ul class='name'>"+ showScore + "</ul>"; 
            console.log(listItemEl.innerHTML)   
            }

    }



buttonEl2.addEventListener('click',taskFormHandler);








