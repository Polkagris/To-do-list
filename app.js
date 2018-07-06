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

   var newToDo = document.createElement('li');
   newToDo.classList.add('list-item');
   newToDo.innerText = textValue;

   //where the new list item will go in the DOM
   var container = document.getElementById('grid-container-app');
   document.body.insertBefore(newToDo, container);

 }
//add todo button linked with eventListener click
//when clicked => save text to variable
//create new #list item with text.innerHTML
