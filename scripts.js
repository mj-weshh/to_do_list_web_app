
     const button = document.getElementById('addTask');
 
     function addTaskFunction(event) {
          event.preventDefault()
         const taskInput = document.getElementById('taskInput');
         const taskText = taskInput.value;
 
         const newTask = document.createElement('p');
         newTask.textContent = taskText;
 
         const taskDisplay = document.getElementById('taskDisplay');
         taskDisplay.appendChild(newTask);

         taskInput.value = '';
     }

     button.addEventListener('click', addTaskFunction);