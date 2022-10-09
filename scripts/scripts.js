const displayValue = document.querySelector('#final-result');
const operationsDisplay = document.querySelector('#operations');
// let operator = '';
let numbers = '';
let operations = [];

const numberButtons = document.querySelectorAll('.num-buttons');
numberButtons.forEach(button =>{
  button.addEventListener('click', (e) =>{
      numbers+= e.target.value;
      displayValue.textContent = numbers;
  });
});

const operatorButtons = document.querySelectorAll('.opr-buttons');
operatorButtons.forEach(button =>{
  button.addEventListener('click', (e) =>{
    // Perform calculations immediately if the array and displayValue is not empty
    if(operationsDisplay.textContent !== '' && displayValue.textContent !== ''){
      let num1 = operations[0]
      let operator = operations[1];
      let num2 = Number(displayValue.textContent);
      console.log('Num1: ' + num1);
      console.log('Operator: ' + operator);
      operate(operator, num1, num2);
      operationsDisplay.textContent = `${Number(displayValue.textContent)} ${e.target.value}`;
      numbers=''
      displayValue.textContent = numbers;
      operations = operationsDisplay.textContent.split(" ");

      // Convert first number from String to Num after converting operations into an array
      operations[0] = Number(operations[0]);

      // Console log for debugging purposes
      // console.log('Im active');
      // console.log(operations);
      // console.log(num2);

      // Otherwise populate array and displayValue with user input
      // Perform calculations once condition above has been satisfied and after pressing '=' or any operator
    }else{
      let num1 = Number(displayValue.textContent);
      let operator = e.target.value;
      operations.push(num1);
      operations.push(operator);
      numbers = ''
      operationsDisplay.textContent = `${num1} ${operator}`;
      
      // Console log for debugging purposes
      // console.log(operations);
      // console.log(displayValue.textContent);
      // console.log('Im active2');
    }
  });
});

let equalsButton = document.querySelector('#operate-values');
equalsButton.addEventListener('click', (e) =>{
  if(operations.length !== 2){
    console.log('nothing');
    return;
  }else{
    let num1 = operations[0];
    let num2 = displayValue.textContent;
    let operator = operations[1];
    operate(operator, num1, Number(num2));
    operationsDisplay.textContent = `${num1} ${operator} ${num2} =`;
    numbers = '';
  }
})

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear);

function clear(){
  displayValue.textContent = '';
  operationsDisplay.textContent = '';
  operations = [];
  numbers = '';
}

const deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener('click', deleteText);
function deleteText(){
  displayValue.textContent = displayValue.textContent.slice(0, -1);
  numbers = numbers.slice(0, -1);
}



function operate(operator, num1, num2){
  let result = '';
  switch(operator){
    
    case '+':
      result = add(num1, num2);
      displayValue.textContent = result;
      operations = [];
      break;
    case '-':
      result = subtract(num1, num2);
      displayValue.textContent = result;
      operations = [];
      break;
    case 'x':
      result = multiply(num1, num2);
      displayValue.textContent = result;
      operations = [];
      break;
    case '/':
      result = divide(num1, num2);
      displayValue.textContent = result;
      operations = [];
      break;
  }
  if(operator === '+'){

  }
}

function add(num1, num2){
  return num1 + num2;
}

function subtract(num1 ,num2){
  return num1 - num2;
}

function multiply(num1 ,num2){
  return num1 * num2;
}

function divide(num1 ,num2){
  return num1 / num2;
}
