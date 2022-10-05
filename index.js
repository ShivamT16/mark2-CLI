readlineSync = require("readline-sync")

var score = 0;
var questions = [{
  question: "Who was eldest among 4 sons of Raja Dashrath? ",
  answer: "Ram"
}, {
  question: "Lord Ram's mother name was? ",
  answer: "Kaushalya"
},
{
  question: "Sita's father name was? ",
  answer: "Janak"
},
{
  question: "How many years was the duration of Vanvaas for Ram? ",
  answer: "14"
},
{
  question: "How many sons does Ram-Sita had? ",
  answer: "2"
},
{
  question: "Is HANUMAN JI still alive? ",
  answer: "Yes"
}
];

var Username = readlineSync.question("May I know your name? ")
console.log("Welcome " + Username)
console.log("-------------")

function plays(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right");
    score = score + 1;

  } else {
    score = score - 1;
    console.log("You are wrong");

  }
  console.log("Your score is " + score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    plays(currentQuestion.question, currentQuestion.answer)
  }
}
game();

console.log("Your final score is: " + score);
