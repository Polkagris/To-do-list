  const text = document.getElementById('input-text-field');
  const addToDo = document.getElementById('add-todo');
  const parent = document.querySelector('#list');
  const appContainer = document.querySelector('#grid-container-app');


  createNewToDo = () => {
    if(text.value!==""){
      var newLi = document.createElement('li');
      var rmvButton = document.createElement('button');
      rmvButton.setAttribute("id", "remove");
      newLi.textContent = text.value;
      rmvButton.innerHTML = "Done";

      parent.insertBefore(newLi, parent.firstChild);
      newLi.appendChild(rmvButton);


    }
    text.value = "";

    // removing todo
    rmvButton.addEventListener('click', function(event){
      const li = this.parentNode;
      parent.removeChild(li);
    });

  }

  addToDo.addEventListener('click', createNewToDo);



  //where the new list-item will go in the DOM


  // var insertedNode = parentNode.insertBefore(newNode, referenceNode);
  // insertedNode The node being inserted, that is newNode
  // parentNode The parent of the newly inserted node.
  // newNode The node to be inserted.
  // referenceNode The node before which newNode is inserted.
