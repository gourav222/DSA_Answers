// Q.2 Array contain subarray with the sum zero or not.

//Time Complexity of these solution is O(n).

//And the space complexity for these solution is O(1).

//Pre-requisite to run this file :- "npm install prompt-sync" to take the input from the user.

//The input provided by the user should be separated by a line break.

const prompt = require("prompt-sync")({ sigint: true });

function subArrayWithZeroSum(numOfElements, inputArray) {
  const frequencyOfSum = {};
  let sumOfElements = 0;

  for (let i = 0; i < numOfElements; i++) {
    sumOfElements += inputArray[i];

    if (sumOfElements === 0 || frequencyOfSum[sumOfElements]) {
      return true;
    }

    frequencyOfSum[sumOfElements]
      ? ++frequencyOfSum[sumOfElements]
      : (frequencyOfSum[sumOfElements] = 1);
  }

  return false;
}

function inputFromUser() {
  const numOfElements = Number(prompt("Enter the number of elements :- "));

  const inputArray = [];

  console.log("Enter Array Elements... ");
  for (let i = 0; i < numOfElements; i++) {
    inputArray.push(Number(prompt()));
  }

  console.log(subArrayWithZeroSum(numOfElements, inputArray));
}

inputFromUser();
