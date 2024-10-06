let rs = require('readline-sync');

const opArr = ['/', '*', '-', '+']; 
let startCalc = 0;
let operator = 0;
let firstInput = 0;
let firstNum = 0;
let secondInput = 0;
let secondNum = 0;
let total = 0;

function startOp() { 
  let operation = rs.question('What operation would you like to perform? Choose between "/", "*", "-", and "+": '); 
  if(opArr.includes(operation)) {
    operator = operation;
    selectedMethod();
    firstInput = numberOne();
  } else {
    console.log('That is not a valid operation.')
    startCalc = startOp();
  }
}

function selectedMethod() {
  if(operator === '+') {
    console.log('### ADDITION ###');
  } else if(operator === '-') {
    console.log('### SUBTRACTION ###');
  } else if(operator === '*') {
    console.log('### MULTIPLICATION ###');
  } else {
    console.log('### DIVISION ###');
  }
}

function calculation() {
  if(operator === '+') {
  return Number(firstNum) + Number(secondNum);
} else if(operator === '-') {
  return firstNum - secondNum;
} else if(operator === '*') {
  return firstNum * secondNum;
} else {
  return (firstNum / secondNum).toFixed(2);
}
}

function numberOne() { 
  firstInput = rs.question('Please enter the first number: '); 
  if(isNaN(firstInput)) {
    console.log('This is not a number.')
    firstInput = numberOne();
  } else {
    firstNum = firstInput;
    numberTwo();
  }
}
function numberTwo() { 
  secondInput = rs.question('Please enter the second number: '); 
  if(isNaN(secondInput)) {
    console.log('This is not a number.')
    numberTwo();
  } else {
    secondNum = secondInput;
    total = calculation();
    console.log('The result is: ' + total);
  }
}

console.log('### WELCOME TO THE NODE CALCULATOR ###');
startCalc = startOp();

