const text = document.getElementById('input-text-field');
const addToDo = document.getElementById('add-todo');
console.log(text);

//add todo.innerHTML to variable
addToDo.addEventListener("click", function(){
  var textValue = document.getElementById('input-text-field').value;
    if(textValue){
      createNewToDo(textValue);
    }
      text.value = "";
});

//creating new todo to the DOM
 function createNewToDo(textValue){
   //creating text from input
   var parentDiv = document.getElementById('todo-container');
   var originalUl = document.getElementById('list');
   var newToDo = document.createElement('ul');
   newToDo.classList.add('list');
   newToDo.innerText = textValue;

  //create remove button
  var rmvButton = document.createElement('button');
  rmvButton.classList.add('remove');
  rmvButton.innerHTML = "Remove";

  //create checked button
  var cheButton = document.createElement('button');
  cheButton.classList.add('checked');
  cheButton.innerHTML = "Checked";
   //where the new list-item will go in the DOM
   parentDiv.insertBefore(newToDo, originalUl);
   newToDo.appendChild(rmvButton);
   newToDo.appendChild(cheButton);


 }
//add todo button linked with eventListener click
//when clicked => save text to variable
//create new #list item with text.innerHTML
