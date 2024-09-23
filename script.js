/*
  Program Examples from Lesson 2: Functions that Return a Value
*/

// EX. 1

// console.log(minOfTwo(3, 9));
// console.log(minOfTwo(10, 1));
// function minOfTwo(num1, num2) {
//   var minimum;

//   if (num1 < num2) {
//     minimum = num1;
//   } else {
//     minimum = num2;
//   }

//   return minimum;
// }

// EX. 2
// randInt(0, 10); // RETURN a number from 0 - 10 (excl)
// randInt(20, 25); // RETURN a number from 20 - 25 (excl)

// alert(`A random Value from -5 to 0 is ${randInt(-5, 0)}`);

// function randInt(start, end) {
//   var rand = Math.floor(Math.random() * (end - start));
//   rand += start;
//   return rand;
// }

// EX. 3
// hasVowel("cat"); // return true
// hasVowel("xyz"); // return true

// if (hasVowel("dog")) {
//   alert(`${word} has a vowel.`);
// }

// function hasVowel(word) {
//   for (let i = 0; i < word.length; i++) {
//     let currentLetter = word.charAt(i).toLowerCase;
//     if (
//       currentLetter == "a" ||
//       currentLetter == "e" ||
//       currentLetter == "i" ||
//       currentLetter == "o" ||
//       currentLetter == "u" ||
//       currentLetter == "y"
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// EX. 4
// acronym("away from keyboard"); // should return AFK
// acronym("if i recall correctly"); // should return IIRC

// function acronym(phrase) {
//   var output = phrase.charAt(0);
//   for (let i = 0; i < phrase.length; i++) {
//     var current = phrase.charAt(i);
//     if (current == " ") {
//       output += phrase.charAt(i + 1);
//     }
//   }
//   return output.toUpperCase();
// }

// EX. 5

function showRules() {
  alert(
    "Welcome to Rock-Paper-Scissors (RPS)\n\nYou will try to beat the computer by choosing rock, paper or scissors. Best out of 3 wins!\n\nRock beats scissors\nScissors beats paper\nPaper beats rock"
  );
}
function getPlayerChoice() {
  var choice = +prompt(
    "Make your choice: Type 0 for Rock, 1 for Paper, and 2 for Scissors."
  );
  if (choice > 2) {
    alert("That's not one of the options.");
  } else {
    if (choice == 0) {
      choice = "rock";
    } else if (choice == 1) {
      choice = "paper";
    } else {
      choice = "scissors";
    }
    return choice;
  }
}
function getCompChoice() {
  var rand = Math.random();
  if (rand < 0.333) {
    return "rock"; // rock
  } else if (rand < 0.666) {
    return "paper"; // paper
  } else {
    return "scissors"; // scissors
  }
}
// updates the score
// pre: only player or computer will affect the score. global variables playerScore and compScore must exist.
function updateScore(winner) {
  if (winner == 1) compScore++;
  if (winner == 0) playerScore++;
}

function showScore(pScore, cScore) {
  alert(`Scores:\nPlayer : ${pScore}\nComputer: ${cScore}`);
  console.log(`Player: ${pScore}\nComputer: ${cScore}`);
}

// take the player and computer choices and decide the winner.
// Pre: Arguments must be 0, 1, or 2
// Post: Return "0" (player) or "1" (computer) or "2" (tie) as the winner.
function decideWinner(pChoice, cChoice) {
  alert(`Player chose ${pChoice}\nComputer chose ${cChoice}`);
  if (pChoice == cChoice) {
    alert("It's a tie!");
    return 2;
  } else if (
    (pChoice == "rock" && cChoice == "scissors") ||
    (pChoice == "paper" && cChoice == "rock") ||
    (pChoice == "scissors" && cChoice == "paper")
  ) {
    alert("Player wins!");
    return 0;
  } else {
    alert("Computer wins...");
    return 1;
  }
}

// program
var playerScore = 0;
var compScore = 0;
showRules();
while (playerScore < 2 && compScore < 2) {
  var playerChoice = getPlayerChoice();
  var compChoice = getCompChoice();
  var w = decideWinner(playerChoice, compChoice);
  updateScore(w);
  console.log(`${playerChoice} ${compChoice}`);
  showScore(playerScore, compScore);
}
