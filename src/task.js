class Todo {
    constructor(name, notes, priority, dueDate) {
        this.name = name;
        this.notes = notes;
        this.priority = priority;
        this.dueDate = dueDate;

    }
}

    //dom
  
    let todoCreator = document.querySelector('#TI');
    let todoContainer = document.querySelector('#todoContainer');
    let newTodoBtn = document.querySelector('#newTodo');
    let cancelTodoBtn = document.querySelector('#todoCancel');
    let addTodoBtn = document.querySelector('#todoSubmit');

    
  
  

    newTodoBtn.addEventListener('click', showTodoCreator);
    addTodoBtn.addEventListener('click', newTodo);
    cancelTodoBtn.addEventListener('click', cancelTodo);


    let highlightedProject = '';
    let currentProject = '';
  

    
    function newTodo() {
        const name = document.querySelector('#todoInput').value;
        const notes = document.querySelector('#notesInput').value;
        const priority = document.querySelector('#priorityLevel').value;
        const dueDate = document.querySelector('.todoDate').value;
        currentProject.todos.push(new Todo(name, notes, priority, dueDate));
        console.log(currentProject);
        cancelTodo();
        resetTodoView();
        displayTodos();
    }

    function showTodoCreator() {
        if (currentProject == '') {
            alert("Select a project before creating Todos");
            return;
        }
        todoCreator.classList.remove('hidden');
      }

    function resetTodoView() {
        todoContainer.innerHTML = '';
    
    }

    function cancelTodo() {
        let todoInput = document.querySelector('#todoInput').value = '';
        todoCreator.classList.add('hidden');
    
      }

    function displayTodos() {
        currentProject.todos.forEach(element => {
            let div = document.createElement('div');
            let btn = document.createElement('button');
            btn.classList.add("deleteTodoButton");
            div.classList.add("todoFormatter");
            let name = element.name;
            let notes = element.notes;
            let priority = element.priority;
            let dueDate = element.dueDate;

            let box = document.createElement('div');
            box.setAttribute('id', name);
                let detail1 = document.createElement('div');
                //let detail2 = document.createElement('div');
                let detail3 = document.createElement('div');
                detail1.textContent = "PRIORITY LEVEL:  " + priority;
                //detail2.textContent = "NOTES:  " + notes;
                detail3.textContent = "DUE DATE:  " + dueDate;
                detail1.classList.add("detail1");
                detail3.classList.add("detail1");
               // detail2.classList.add("detail2");
                box.appendChild(detail1);
                box.appendChild(detail3);
                //box.appendChild(detail2);

            

            btn.innerHTML = 'X';
            div.innerHTML = name;
         
            todoContainer.appendChild(div);
            div.appendChild(btn);
            btn.addEventListener('click', deleteTodo);
            div.appendChild(box);
            console.log(currentProject.todos);
        });
    }

    


    function deleteTodo(e) {
        let deleteBtn = $(e.target).closest('button');
        let closestDiv = deleteBtn.closest('div');
        let todo = closestDiv.html();
        console.log(closestDiv);
        console.log(todo);

        for(var i =0; i < currentProject.todos.length; i++) {
            if (todo.includes(currentProject.todos[i].name)) {
                currentProject.todos.splice(i, 1);
                console.log(currentProject.todos);
                deleteBtn = '';
                todo = '';
                
            }
        }
        resetTodoView();
        displayTodos();
    }


