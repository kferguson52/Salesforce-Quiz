var containerStart = document.querySelector("#Start-Container-Id");
var containerQuestion = document.querySelector("#Question-Container-Id");
var containerTitle = document.querySelector("#Question-Title");
var containerAnswer = document.querySelector("#Question-Answer");
var containerEnd = document.querySelector("#final-id");
var clock = document.querySelector("#clock");
var score = document.querySelector("#score");
var initials = document.querySelector("#initials");
var buttonStart = document.querySelector("#Start-Quiz");
var buttonFinal = document.querySelector("#user-score");

var time = 75;

var questions = [
    {
        question: "how are you today?",
        choices: ["happy", 'sad', 'hungry', "mad"],
        answer: "happy"
    },
    {
        question: "how are you today 2?",
        choices: ["happy", 'sad', 'hungry', "mad"],
        answer: "sad"
    },
    {
        question: "how are you today3?",
        choices: ["happy", 'sad', 'hungry', "mad"],
        answer: "hungry"
    },
];

function startGame(){
//when the game starts the timer starts. The start container is hidden, and show the question container withthe first question showing. setInterval


    startQuestions()
}

function startQuestions(){
    //dynamically render the question and the choices in the question container.
    
 questionbuttonClick()
}

function questionbuttonClick(){
    // when a user selects the wrong answer they are deducted 10 seconds off the time and the next question shows. if the timer hits 0 or the last question has been answered the game is over. 


}

function gameOver(){
    // when the game is over the question container is hidden and the end screen shows. the final score is the time left over from the clock. the clock is also stopped. clearInterval
}

function saveScore(){
//when a user enters their initials and clicks submit the intials and score are saved in local storage. 

}


// button on clicks for start

//button on click for submit intials







