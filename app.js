const text = document.getElementById('input-text-field');
const addToDo = document.getElementById('add-todo');
console.log(text);

//add todo.innerHTML to variable
addToDo.addEventListener("click", function(){
  var textValue = document.getElementById('input-text-field').value;
    if(textValue){
      createNewToDo(textValue);
         console.log(textValue);
    }
});

 function createNewToDo(textValue){
   var parentDiv = document.getElementById('todo-container');
   var originalUl = document.getElementById('list');
   var newToDo = document.createElement('ul');
   newToDo.classList.add('list');
   newToDo.innerText = textValue;

   //where the new list item will go in the DOM

   parentDiv.insertBefore(newToDo, originalUl);


 }
//add todo button linked with eventListener click
//when clicked => save text to variable
//create new #list item with text.innerHTML
