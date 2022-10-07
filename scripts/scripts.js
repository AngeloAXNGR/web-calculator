const numberButtons = document.querySelectorAll('.num-buttons');
const operations = document.querySelector('#operations');
const displayValue = document.querySelector('#final-result')
let result = displayValue;
let values = [];


// Clear and Delete Functionalities
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear);

function clear(){
  operations.textContent = '';
  result.textContent = '';
}


const deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener('click', deleteText);
function deleteText(){
  result.textContent = result.textContent.slice(0, -1);
}



// Get the TEXT value of num-buttons and display on screen
numberButtons.forEach(button =>{
  button.addEventListener('click', (e) =>{

    displayValue.textContent += e.target.value;
  })
})

// Get the TEXT value of opr-buttons and display on screen
operatorButtons = document.querySelectorAll('.opr-buttons');
operatorButtons.forEach(button =>{
  button.addEventListener('click', (e)=>{
    values.push(displayValue.textContent);
    operations.textContent += ' ' + displayValue.textContent + ' ' + e.target.value;
    displayValue.textContent = '';
    values.push(e.target.value);
    console.log(values);

    if(e.target.value === '='){
      operate();
    }
  });
});




function operate(){
  let num1 = Number(values[0]);
  let num2 = Number(values[2]);
  let operator = values[1];
  if(operator === '+'){
    let operation = add(num1, num2);
    displayValue.textContent = operation;
  }else if(operator === '-'){
    let operation = subtract(num1, num2);
    displayValue.textContent = operation;
  }else if(operator === 'x'){
    let operation = multiply(num1, num2);
    displayValue.textContent = operation;
  }else if(operator === '/'){
    let operation = divide(num1, num2);
    displayValue.textContent = operation;
  }
  console.log(values);
}

function add(a, b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  return a / b
}




