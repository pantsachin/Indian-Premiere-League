//Intro
var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.yellow("Welcome to Sachin's Quiz on the recently concluded Indian Premier League 2020 \n"));

 var userName = readlineSync.question(chalk.yellow("May I have your name please? "));

var manik = {name: "Manik",
points: 10};

var sachin = {name: "Sachin", 
points: 10};

var apoorv = {name: "Apoorv",
points: 9};

var saheba = {name: "Saheba",
points: 8};

var leaderBoard = [manik, sachin, apoorv, saheba];

//Leaderboard
console.log(chalk.yellow("\nThe top scorers are "))
for (var i=0; i<leaderBoard.length; i=i+1){
  var currentName = leaderBoard[i];
  console.log(chalk.yellow(currentName.name +" "+ currentName.points));
}

var que = readlineSync.question(chalk.yellow("\n" + userName + ", are you ready to begin the quiz? "));

//Quiz Main Part-function-engine
var score = 0;

function game(question, answer){
var userAnswer = readlineSync.question(chalk.cyanBright(question));

if (userAnswer == answer){
  score = score + 1;
  console.log(chalk.green("Correct Answer, Your Score is: " + score));
  console.log(chalk.black.bgWhite("__________________________________________________________________\n"));
  }
  else {
    console.log(chalk.redBright("Incorrect Answer, Your Score is: " + score));
    console.log(chalk.black.bgWhite("_________________________________________________________________\n"));
  }
}

//questions in objects
var questionOne = {question: " \n1. Who was the Orange Cap Holder of IPL 2020? \n a - KL Rahul b - Virat Kohli c - Shikhar Dhawan d - Sanju Samson\n ", answer: "a"}

var questionTwo = {question: " 2. Who was the Purple Cap Holder of IPL 2020?\n a - Jasprit Bumrah b - Rashid Khan c - Yuzvendra Chahal d - Kagiso Rabada \n ", answer: "d"};

var questionThree = {question: " 3. Who was the title sponsor of IPL 2020?\n a - Byjus b - Dream11 c - Oppo d - DLF\n", answer: "b"};

var questionFour = {question: " 4. Which country was IPL 2020 held in? a - Srl Lanka b - South Africa c - UAE d - USA \n", answer: "c"};

var questionFive = {question: " 5. Which team won IPL 2020? \n a - Delhi Capitals b - Mumbai Indians c - Royal Challengers Bangalore d - Sunrisers Hyderabad \n", answer: "b"};

var questionSix = {question: " 6. Who became the most successful captain in the history of IPL by winning the cup for the 5th time? \n a - MS Dhoni b - Virat Kohli c - David Warner d - Rohit Sharma \n", answer: "d"};

var questionSeven = {question: " 7. Which new team could be added in the IPL 2021 edition? \n a - Ahemdabad b - Gujarat c - J&K d - Assam\n ", answer: "a"};

var questionEight = {question: " 8. JSW - Jindal Steel Works recently bought the ownership of which team? \n a - RCB b - DC c - MI d - KKR \n", answer: "b"};

var questionNine = {question: " 9. Which team every year changes the color of its jersey to green for one match to support environmental cause?\n a - RCB b - RR c - KXIP d - SRH \n", answer: "a"};

var questionTen = {question: " 10. How many titles has CSK won till now? \n a - 2 b - 3 c - 4 d - 5\n", answer: "b"};

//questions in array
var arrayQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

//quiz gameplay

for(i=0; i<arrayQuestions.length; i=i+1){
  var currentQuestion = arrayQuestions[i];
  game(currentQuestion.question, currentQuestion.answer);
}

if (score >= 7) {
  var nw = {name: userName, points: score}
  leaderBoard.push(nw);
  console.log(chalk.black.bgYellowBright.bold("\nThe top scorers are "));
  leaderBoard.sort(function(a, b){return a.points - b.points});
  leaderBoard.reverse();
  for (var i=0; i<leaderBoard.length; i=i+1) {

    var currentName = leaderBoard[i];
    console.log(chalk.black.bgYellowBright.bold(currentName.name +" "+ currentName.points));
    }
  console.log(chalk.magentaBright("\nYou scored " + score + " points!\n"))
  console.log(chalk.magentaBright("\nCongratulations! You have made it to the leader board! "));}
else {
  console.log(chalk.magentaBright("\nYou scored " + score + " points!\n"))
  console.log(chalk.magentaBright("\nTo get into the Top Scorers List please try again! Have a good day! "));
}



