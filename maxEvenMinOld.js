// Q.4 difference between the maximum among all even numbers of array and the minimum among all odd numbers in array.

//Time Complexity of these solution is O(n);

//And the space complexity for these solution is O(1)

//Pre-requisite to run this file :- "npm install prompt-sync" to take the input from the user.

//The input provided by the user should be separated by a line break.

const prompt = require("prompt-sync")({ sigint: true });

function maxEvenMinOld(numOfElements, inputArray) {
  let maxEven = Number.MIN_VALUE,
    minOld = Number.MAX_VALUE;

  for (let i = 0; i < numOfElements; i++) {
    if (inputArray[i] % 2 == 0) {
      if (inputArray[i] > maxEven) maxEven = inputArray[i];
    } else {
      if (inputArray[i] < minOld) minOld = inputArray[i];
    }
  }
  return maxEven - minOld;
}

function inputFromUser() {
  const numOfElements = Number(prompt("Enter the number of elements :- "));

  const inputArray = [];

  console.log("Enter Array Elements... ");
  for (let i = 0; i < numOfElements; i++) {
    inputArray.push(Number(prompt()));
  }

  console.log(maxEvenMinOld(numOfElements, inputArray));
}

inputFromUser();
