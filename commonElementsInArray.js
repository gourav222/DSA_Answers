// Q.3 Common elements in two arrays.

//Time Complexity of these solution is O(number of elements in first array + number of elements in second array).

//And the space complexity for these solution is O(1).

//Pre-requisite to run this file :- "npm install prompt-sync" to take the input from the user.

//The input provided by the user should be separated by a line break.

const prompt = require("prompt-sync")({ sigint: true });

function commonElementsInBothTheArrays(
  numOfElementsInFirstArray,
  numOfElementsInSecondArray,
  inputArrayFirst,
  inputArraySecond
) {
  const frequencyOfElementsInfirstArray = {};
  const commonElements = [];

  for (let i = 0; i < numOfElementsInFirstArray; i++) {
    frequencyOfElementsInfirstArray[inputArrayFirst[i]]
      ? ++frequencyOfElementsInfirstArray[inputArrayFirst[i]]
      : (frequencyOfElementsInfirstArray[inputArrayFirst[i]] = 1);
  }

  for (let i = 0; i < numOfElementsInSecondArray; i++) {
    if (frequencyOfElementsInfirstArray[inputArraySecond[i]]) {
      commonElements.push(inputArraySecond[i]);
    }
  }

  return commonElements;
}

function inputFromUser() {
  const numOfElementsInFirstArray = Number(
    prompt("Enter the number of elements in first array :- ")
  );

  const numOfElementsInSecondArray = Number(
    prompt("Enter the number of elements in second array :- ")
  );

  const inputArrayFirst = [],
    inputArraySecond = [];

  console.log("Enter elements of first array...  ");

  for (let i = 0; i < numOfElementsInFirstArray; i++) {
    inputArrayFirst.push(Number(prompt()));
  }

  console.log("Enter Elements of second array...  ");
  for (let i = 0; i < numOfElementsInSecondArray; i++) {
    inputArraySecond.push(Number(prompt()));
  }

  console.log(
    commonElementsInBothTheArrays(
      numOfElementsInFirstArray,
      numOfElementsInSecondArray,
      inputArrayFirst,
      inputArraySecond
    )
  );
}

inputFromUser();
