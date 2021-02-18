
/*
WHEN I click the start button

THEN a timer starts and I am presented with a question

WHEN I answer a question

THEN I am presented with another question

WHEN I answer a question incorrectly

THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0

THEN the game is over

WHEN the game is over

THEN I can save my initials and score
*/


var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var questions = document.getElementById('questionEl');


var myQuestions = [
  {
  question: "Inside which HTML element do we put the JavaScript",
  answers: {
    a: "<script>",
    b: "<scripting>",
    c: "<js>",
    d: "<javascript>"
  },
  correctAnswer: "a"

  },
  {
    question: "How do you create a function in JavaScript?",
    answers: {
      a: "function = myFunction()",
      b: "function myFunction()",
      c: "function:myFunction()",
      d: "myFunction = function" 
    },
    correctAnswer: "b"
  },
  {
    question: "How does a FOR loop start?",
    answers: {
      a: "for (i = 0; i <= 5; i++)",
      b: "for (i <= 5; i++)",
      c: "for (i = 0; i <= 5)",
      c: "for i = 1 to 5"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    answers: {
      a: 'var colors = ["red", "green", "blue"]',
      b: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
      c: 'var colors = "red", "green", "blue',
      d: 'var colors = (1:"red", 2:"green", 3:"blue")'
    },
    correctAnswer: 'a'
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: {
      a: "=",
      b: "x",
      c: "-",
      d: "*"
    },
    correctAnswer: "a"
  }

];


// Timer that counts down from 60
function countdown() {
  var timeLeft = 60;
  console.log(myQuestions[0].question);
  var questions = document.getElementById("questionEl");
  document.getElementById("questionEl");
  questions.innerText = myQuestions[0].question;


  var answer1 = document.getElementById("ans1");
  
  var firstAnswer = myQuestions[0].answers.a;
  console.log(firstAnswer);
  answer1.innerText = firstAnswer;


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
};



startBtn.onclick = countdown;

