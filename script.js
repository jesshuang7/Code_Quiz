//TIME activity 09/11 timer speeder clearinternal in global scope
// A. Initiate/Start Button
// I. event listener with an actual HTML button 'on click'
// II. define clear interval at time = 0;
// III. 
// B. The quiz itself
// I.
// II.
// III.
// C. End of quiz/record Highscore
// I. show your final score
// II. enter initials and submit
// III. submit button links to high scores page
// D. Highscores
// I. go back button
// II. Clear Highscores. 


// timer countdown 
var timeEl = document.getElementById("timer");
var secondsLeft = 75;
var timeInterval;

function setTime() {
  timeEl.textContent = secondsLeft;
  timeInterval =setInterval(function(){

    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(timeInterval);
      secondsLeft = 0;
      quizEnd();
    }
    timeEl.textContent = secondsLeft;

  }, 1000);
}



// Start quiz
var startEl = document.getElementById("start");

startEl.addEventListener("click", function(){
  setTime();
  // hide welcome page
  document.getElementById("welcome").style.display = "none";
  // unhide quiz page
  document.getElementById("quiz").style.display = "block";

  getQuestion();
});


//Quiz questions array
var myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: [
       "Douglas Crockford",
       "Sheryl Sandberg",
       "Brendan Eich",
       "Elon Musk"
    ],
    correctAnswer: "Brendan Eich"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: [
       "Node.js",
       "TypeScript",
       "npm",
       "json"
    ],
    correctAnswer: "npm"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: [
       "Angular",
       "jQuery",
       "RequireJS",
       "ESLint"
    ],
    correctAnswer: "ESLint"
  },
  {
    question: "What is the HTML tag under which one can write the JavaScript code?",
    answers: [
      "<javascript>",
      "<scripted>",
      "<script>",
      "<js>"
    ],
    correctAnswer: "<script>"
  },
  {
    question: "How to write an ‘if’ statement for executing some code. If “i” is NOT equal to 5?",
    answers: [
      "if(i<>5)", 
      "if i<>5",
      "if(i!=5)", 
      "if i!=5"
    ],
    correctAnswer: "if(i!=5)"
  },

];


var options = document.getElementsByClassName("choices");
var currentQuestionIndex = 0;

function getQuestion(){
    // get current question object from array 
    var currentQuestion = myQuestions[currentQuestionIndex];
    // update current question title
    var quizTitle = document.querySelector(".quiz");
    quizTitle.textContent = currentQuestion.question;
    
    // clear out old button text 
    options.innerHTML = "";

    // create variables for buttons
    var buttonChoices = document.querySelectorAll(".btn-success");
    console.log(buttonChoices)

    // loop over choices
    currentQuestion.answers.forEach(function(answers, i){
        var buttonChoice = buttonChoices[i];
        buttonChoice.classList.add("answers");
        buttonChoice.setAttribute("value", answers);
        buttonChoice.textContent = answers;

        // create click function
        buttonChoice.addEventListener("click", (questionsClick));
        
    });

    // myQuestions.forEach(function(answers){
    //   console.log(answers.answers)
    //   console.log(answers.correctAnswer)

    // }

}


var commentEl = document.getElementById("comment");

function questionsClick(){
  // if the user is wrong
  if (this.value !== myQuestions[currentQuestionIndex].correctAnswer){
    // time decrease 10 seconds
    secondsLeft -= 10;

    if (secondsLeft <= 0){
      secondsLeft = 0;
      quizEnd();
    }
    
    // // display new time on page
     timeEl.textContent = secondsLeft;

    // // display underline on the page
    // document.getElementById("underline").style.display = "block";

    // display "wrong!" on the page
    commentEl.textContent = "Wrong!";
    
  } else {
    // display "Correct!" on the page
    // score++;
    commentEl.textContent = "Correct!";

  }

  // check if the questions ran out
    currentQuestionIndex++; 

    if (currentQuestionIndex === myQuestions.length) {
        quizEnd();
    } else {
        getQuestion();
    }

}


function quizEnd(){

  // stop Timer
  clearInterval(timeInterval);

  // show end screen 
  var endScreenEl = document.getElementById("end");
  document.getElementById("end").style.display = "block";

  // hide quiz section
  document.getElementById("quiz").style.display = "none";

  // hide comment section
  document.getElementById("comment").style.display = "none";


  // show final score
  var finalScoreEl = document.getElementById("finalscore");
  finalScoreEl.textContent = secondsLeft;
}


// submit & high scores

var submitEl = document.getElementById("submit");
var initialsEl = document.getElementById("initials");

submitEl.onclick = highscore 