var startButton = document.getElementById("start-button");
var questionContainerEl = document.getElementById("question-container");

startButton.addEventListener("click", startGame);


function startGame() {
console.log("started");
startButton.classList.add("hide");
questionContainerEl.classList.remove("hide");
}

function setNextQuestion() {

}
function selectAnswer() {

}