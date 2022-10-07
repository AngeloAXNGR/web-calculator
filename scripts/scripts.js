const numberButtons = document.querySelectorAll('.num-buttons');
const operations = document.querySelector('#operations');
const result = document.querySelector('#final-result')




// Get the TEXT value of num-buttons and display on output
numberButtons.forEach(button =>{
  button.addEventListener('click', (e) =>{
    result.textContent += e.target.value;
  })
})

// Get the TEXT value of opr-buttons and display on output
operatorButtons = document.querySelectorAll('.opr-buttons');
operatorButtons.forEach(button =>{
  button.addEventListener('click', (e)=>{
    result.textContent += e.target.value;
  });
});


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