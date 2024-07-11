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
   wordToScore = input.question("Let's play some scrabble!\n\nEnter a word: ");
};

function simpleScoring(wordToScore){
   wordToScore = wordToScore.toUpperCase();
      let wordScore = 0;
      for(i = 0; i < wordToScore.length; i++){
         wordScore += 1;
      }
      return wordScore;
};

let newPointStructure;

let simpleScorer = function (wordToScore){
      wordToScore = wordToScore.toUpperCase();
      let wordScore = 0;
      for(i = 0; i < wordToScore.length; i++){
         wordScore += 1;
      }
      return wordScore;
   };

let vowelBonusScorer = function (wordToScore){
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

let scrabbleScorer = function (wordToScore){
      wordToScore = wordToScore.toUpperCase();
      let letterValue = 0;
      let wordScore = 0; 
    
      for (let i = 0; i < wordToScore.length; i++) {
    
        for (const pointValue in oldPointStructure) {
    
          if (oldPointStructure[pointValue].includes(wordToScore[i])) {
            letterValue = Number(pointValue)
            wordScore += letterValue
          }    
        }
      }
      return wordScore;
   };

const scoringAlgorithms = [simple = {
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scorerFunction: simpleScorer}, 
   vowel = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScorer},
   scrabbleScorer = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: scrabbleScorer
   }];

function scorerPrompt() {
   algorithm = input.question(`Which scoring algorithm would you like to use?\n\n
0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
Enter 0, 1, or 2: `);
   return console.log(`Score for '${wordToScore}': ${scoringAlgorithms[algorithm].scorerFunction(wordToScore)}`);
};

function transform() {};

function runProgram() {
   initialPrompt();
   scorerPrompt();
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
