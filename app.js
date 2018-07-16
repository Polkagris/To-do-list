const text = document.getElementById('input-text-field');
const addToDo = document.getElementById('add-todo');
const remove = document.getElementById('remove-button');



//add todo.innerHTML to variable
addToDo.addEventListener("click", function(){
  var textValue = document.getElementById('input-text-field').value;
    if(textValue){
      createNewToDo(textValue);
    }
    //resets the input field after adding a new todo
      text.value = "";
});
var listItems = document.getElementsByTagName("ul"); // or document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
 listItems[i].onclick = function() {this.parentNode.removeChild(this);}
}



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
   rmvButton.setAttribute("id", "remove-button");
   rmvButton.innerHTML = "Remove";




  //create checked button
  var cheButton = document.createElement('button');
  cheButton.setAttribute("id", "checked-button");
  cheButton.innerHTML = "Checked";

   //where the new list-item will go in the DOM
   parentDiv.insertBefore(newToDo, originalUl);
   newToDo.appendChild(rmvButton);
   newToDo.appendChild(cheButton);
 }
