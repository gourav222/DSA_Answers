// Q.1 Number of pairs in a array with the target sum.

//Time Complexity of these solution is O(n).

//And the space complexity for these solution is O(1).

//Pre-requisite to run this file :- "npm install prompt-sync" to take the input from the user.

//The input provided by the user should be separated by a line break.
               
const prompt = require("prompt-sync")({ sigint: true });

function numberOfPairsWithTargetSum(numOfElements, inputArray, targetSum) {

  let totalNumOfPairsWithTargetSum = 0;
  const frequencyOfElements = {};

  for(let i = 0;i<numOfElements;i++){
    if(frequencyOfElements[targetSum - inputArray[i]]){
        totalNumOfPairsWithTargetSum += frequencyOfElements[targetSum - inputArray[i]];
    }
    frequencyOfElements[inputArray[i]]
      ? ++frequencyOfElements[inputArray[i]]
      : (frequencyOfElements[inputArray[i]] = 1);
  }

  return totalNumOfPairsWithTargetSum;
}

function inputFromUser() {
  const numOfElements = Number(prompt("Enter the number of elements :- "));

  const inputArray = [];

  console.log("Enter Array Elements... ");
  for (let i = 0; i < numOfElements; i++) {
    inputArray.push(Number(prompt()));
  }

  const targetSum = Number(prompt("Enter the target sum...  "));

  console.log(numberOfPairsWithTargetSum(numOfElements, inputArray, targetSum));
}

inputFromUser();
