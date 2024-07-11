// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");
let wordToScore = "";
let algorithm;
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   wordToScore = input.question("Let's play some scrabble! Enter a word: ");
};



let newPointStructure;

let simpleScorer = {
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scorerFuncion: function (wordToScore){
      wordToScore = wordToScore.toUpperCase();
      let wordScore = 0;
      for(i = 0; i < wordToScore.length; i++){
         wordScore += 1;
      }
      return wordScore;
   }
};

let vowelBonusScorer = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFuncion: function (wordToScore){
      wordToScore = wordToScore.toUpperCase();
      const vowels = ['A', 'E', 'I', 'O', 'U'];
      let wordScore = 0;
      for(i = 0; i < wordToScore.length; i++){
         if(vowels.includes(wordToScore[i])){
            wordScore += 3
         } else {
            wordScore += 1
         }
      }
      return wordScore;
   }
};

let scrabbleScorer = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFuncion: function (wordToScore){
      wordToScore = wordToScore.toUpperCase();
      let letterPoints = "";
      let letterValue = 0;
      let wordScore = 0; 
    
      for (let i = 0; i < wordToScore.length; i++) {
    
        for (const pointValue in oldPointStructure) {
    
          if (oldPointStructure[pointValue].includes(wordToScore[i])) {
            //letterPoints += `Points for '${wordToScore[i]}': ${pointValue}\n`
            letterValue = Number(pointValue)
            wordScore += letterValue
          }    
        }
      }
      return wordScore;
   }
};

const scoringAlgorithms = [simpleScorer, vowelBonusScorer, scrabbleScorer];

function scorerPrompt() {
   algorithm = input.question("Please select 0, 1, 2: ");
   return scoringAlgorithms[algorithm].scorerFuncion(wordToScore);
};

function transform() {};

function runProgram() {
   initialPrompt();
   //scorerPrompt();
   console.log("Your score is: ",scorerPrompt(algorithm));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
