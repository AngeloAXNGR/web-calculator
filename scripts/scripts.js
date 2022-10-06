const numberButtons = document.querySelectorAll('.num-buttons');
const operations = document.querySelector('#operations');




// Get the TEXT value of num-buttons and display on output
numberButtons.forEach(button =>{
  button.addEventListener('click', (e) =>{
    operations.textContent += e.target.value;
  })
})

// Get the TEXT value of opr-buttons and display on output
operatorButtons = document.querySelectorAll('.opr-buttons');
operatorButtons.forEach(button =>{
  button.addEventListener('click', (e)=>{
    operations.textContent += e.target.value;
  });
});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clear);

function clear(){
  operations.textContent = '';
}


const deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener('click', deleteText);
function deleteText(){
  operations.textContent = operations.textContent.slice(0, -1);
}