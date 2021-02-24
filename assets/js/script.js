
/*
WHEN I click the start button------(√)

THEN a timer starts and I am presented with a question------(√)

WHEN I answer a question------(√)

THEN I am presented with another question------(√)

WHEN I answer a question incorrectly

THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0

THEN the game is over

WHEN the game is over

THEN I can save my initials and score
*/

var count = 0;
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var questions = document.getElementById('questionEl');
var aButton = document.getElementById('btn-a');
var bButton = document.getElementById('btn-b');
var cButton = document.getElementById('btn-c');
var dButton = document.getElementById('btn-d');
var nextButton = document.getElementById('next');
var reveal =  document.getElementById('rightOrWrong');

var myQuestions = [
  {
  question: "Inside which HTML element do we put the JavaScript?",
  answers: {
    a: "<script>",
    b: "<scripting>",
    c: "<js>",
    d: "<javascript>"
  },
  correctAnswer: "<script>"

  },
  {
    question: "How do you create a function in JavaScript?",
    answers: {
      a: "function = myFunction()",
      b: "function myFunction()",
      c: "function:myFunction()",
      d: "myFunction = function" 
    },
    correctAnswer: "function myFunction()"
  },
  {
    question: "How does a FOR loop start?",
    answers: {
      a: "for (i = 0; i <= 5; i++)",
      b: "for (i <= 5; i++)",
      c: "for (i = 0; i <= 5)",
      c: "for i = 1 to 5"
    },
    correctAnswer: "for (i = 0; i <= 5; i++)"
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: {
      a: 'var colors = ["red", "green", "blue"]',
      b: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
      c: 'var colors = "red", "green", "blue',
      d: 'var colors = (1:"red", 2:"green", 3:"blue")'
    },
    correctAnswer: 'var colors = ["red", "green", "blue"]'
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: {
      a: "=",
      b: "x",
      c: "-",
      d: "*"
    },
    correctAnswer: "="
  }

];

function setQuestions(questionNumber) {
  var questions = document.getElementById("questionEl");
  document.getElementById("questionEl");
  questions.innerText = myQuestions[questionNumber].question;

  var answer1 = document.getElementById("btn-a");
  var firstAnswer = myQuestions[questionNumber].answers.a;
  answer1.innerText = firstAnswer;

  var answer2 = document.getElementById('btn-b');
  var secondAnswer = myQuestions[questionNumber].answers.b;
  answer2.innerText = secondAnswer;

  var answer3 = document.getElementById('btn-c');
  var thirdAnswer = myQuestions[questionNumber].answers.c;
  answer3.innerText = thirdAnswer;

  var answer4 = document.getElementById('btn-d');
  var fourthAnswer = myQuestions[questionNumber].answers.d;
  answer4.innerText = fourthAnswer;
  
}


// Timer that counts down from 60
function countdown() {
  var timeLeft = 60;
  /*
  var questions = document.getElementById("questionEl");
  document.getElementById("questionEl");
  questions.innerText = myQuestions[0].question;
  */
   setQuestions(0);
  
  
  
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'Time: ' + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } 
    
     else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      
    }
  }, 1000);

  
// I don't know why I can't get this to work!!!
/*
  var answerReveal = function() {
 if (firstAnswer) {
   reveal.innerText = "Correct!";

 } else {
   reveal.innerText = "WRONG!";
 }
}
    
  
  
  aButton.onclick = answerReveal;
  bButton.onclick = answerReveal;
  cButton.onclick = answerReveal;
  dButton.onclick = answerReveal; 
  */
  nextButton.onclick = nextQuestion1; 
  

};



var nextQuestion1 = function() {
  
  setQuestions(1);
  
  nextButton.onclick = nextQuestion2;
  
};

var nextQuestion2 = function() {
  
  setQuestions(2);

  nextButton.onclick = nextQuestion3;

};

var nextQuestion3 = function() {
  var questions = document.getElementById("questionEl");
  document.getElementById("questionEl");
  questions.innerText = myQuestions[3].question;
  
  var answer1 = document.getElementById("btn-a");
  var firstAnswer = myQuestions[3].answers.a;
  answer1.innerText = firstAnswer;

  var answer2 = document.getElementById('btn-b');
  var secondAnswer = myQuestions[3].answers.b;
  answer2.innerText = secondAnswer;

  var answer3 = document.getElementById('btn-c');
  var thirdAnswer = myQuestions[3].answers.c;
  answer3.innerText = thirdAnswer;

  var answer4 = document.getElementById('btn-d');
  var fourthAnswer = myQuestions[3].answers.d;
  answer4.innerText = fourthAnswer;

  nextButton.onclick = nextQuestion4;

};

var nextQuestion4 = function() {
  var questions = document.getElementById("questionEl");
  document.getElementById("questionEl");
  questions.innerText = myQuestions[4].question;
  
  var answer1 = document.getElementById("btn-a");
  var firstAnswer = myQuestions[4].answers.a;
  answer1.innerText = firstAnswer;

  var answer2 = document.getElementById('btn-b');
  var secondAnswer = myQuestions[4].answers.b;
  answer2.innerText = secondAnswer;

  var answer3 = document.getElementById('btn-c');
  var thirdAnswer = myQuestions[4].answers.c;
  answer3.innerText = thirdAnswer;

  var answer4 = document.getElementById('btn-d');
  var fourthAnswer = myQuestions[4].answers.d;
  answer4.innerText = fourthAnswer;
  
  


};
var stopTimer = function() {
  clearInterval(countdown);
};

var answerReveal = function(event) {
  console.log(event.target.innerText);
  if (aButton) {
    reveal.innerText = "Correct!";
 
  } else {
    reveal.innerText = "WRONG!";
  }
 }
     
   
   
   aButton.onclick = answerReveal;
   bButton.onclick = answerReveal;
   cButton.onclick = answerReveal;
   dButton.onclick = answerReveal; 
   

startBtn.onclick = countdown;

