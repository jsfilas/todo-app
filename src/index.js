console.log("hello");

let myProjects = [];

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
}

class Todo {
    constructor(name, notes, priority, dueDate) {
        this.name = name;
        this.notes = notes;
        this.priority = priority;
        this.dueDate = dueDate;

    }
}

let todo = (function(){
    //dom
    let newProjectBtn = document.querySelector('#newProject');
    let addProjectBtn = document.querySelector('#projectSubmit');
    let cancelProjectBtn = document.querySelector('#projectCancel');
    let projectCreator = document.querySelector('#PI');
    let projectsContainer = document.querySelector("#projectsContainer");

    let todoCreator = document.querySelector('#TI');
    let todoContainer = document.querySelector('#todoContainer');
    let newTodoBtn = document.querySelector('#newTodo');
    let cancelTodoBtn = document.querySelector('#todoCancel');
    let addTodoBtn = document.querySelector('#todoSubmit');

    
  
    
    newProjectBtn.addEventListener('click', showProjectCreator);
    addProjectBtn.addEventListener('click', newProject);
    cancelProjectBtn.addEventListener('click', cancelProject);

    newTodoBtn.addEventListener('click', showTodoCreator);
    addTodoBtn.addEventListener('click', newTodo);
    cancelTodoBtn.addEventListener('click', cancelTodo);


    let highlightedProject = '';
    let highlightedTodo = '';
    let currentProject = '';
    let currentTodo = '';
  
    function showProjectCreator() {
      projectCreator.classList.remove('hidden');
    }

    function newProject(value) {
        const name = (typeof value === "string") ? value : document.querySelector('#projectInput').value;
        myProjects.push(new Project(name));
        console.log(myProjects);
        cancelProject();
        resetProjectView();
        displayProjects();
    }

    newProject("Example Project");

    function displayProjects() {

        myProjects.forEach(element => {
            let div = document.createElement('div');
            let btn = document.createElement('button');
            btn.classList.add("deleteProjectButton");
            div.classList.add("projectFormatter");
            let name = element.name
            btn.innerHTML = 'DELETE';
            div.innerHTML = name;
            div.addEventListener('click', highlightProject);
            projectsContainer.appendChild(div);
            div.appendChild(btn);
            btn.addEventListener('click', deleteProject);
            console.log(myProjects);
        });
        
    } 

   
    function resetProjectView() {
        projectsContainer.innerHTML = '';
    
    }

    function deleteProject(e) {
        let deleteBtn = $(e.target).closest('button');
        let closestDiv = deleteBtn.closest('div');
        let project = closestDiv.html();
        console.log(closestDiv);
        console.log(project);

        for(var i =0; i < myProjects.length; i++) {
            if (project.includes(myProjects[i].name)) {
                myProjects.splice(i, 1);
                console.log(myProjects);
                deleteBtn = '';
                project = '';
                
            }
        }
        resetProjectView();
        displayProjects();
    }
  
    function cancelProject() {
      let projectInput = document.querySelector('#projectInput').value = '';
      projectCreator.classList.add('hidden');
  
    }

    function highlightProject(e) {
        if (highlightedProject !== '') {
            removeProjectHighlight();
        }
        let currentDiv = $(e.target).closest('div');
        let currentDivHTML = currentDiv.html();
        highlightedProject = currentDiv;
        currentDiv.css("background-color", "white");
        currentDiv.css("color", "#3b6978");

        for(var i =0; i < myProjects.length; i++) {
            if (currentDivHTML.includes(myProjects[i].name)) {
                currentProject = myProjects[i];
                resetTodoView();
                displayTodos();
                console.log(currentProject);
                
            }
        }

    }

    function removeProjectHighlight() {
        highlightedProject.css("background-color", "#84a9ac");
        highlightedProject.css("color", "#e4e3e3");
        highlightedProject = ''
        currentProject = ''

    }
    
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
                let detail2 = document.createElement('div');
                let detail3 = document.createElement('div');
                detail1.textContent = "PRIORITY LEVEL:  " + priority;
                detail2.textContent = "NOTES:  " + notes;
                detail3.textContent = "DUE DATE:  " + dueDate;
                detail1.classList.add("detail1");
                detail3.classList.add("detail1");
                detail2.classList.add("detail2");
                box.appendChild(detail1);
                box.appendChild(detail3);
                box.appendChild(detail2);

            

            btn.innerHTML = 'DELETE';
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

   
  })();


 let todoView = {

    showForm: function() {
        document.getElementById('todoView').style.marginTop = "-670px";
        let view = document.getElementById('view');
        view.classList.remove("hidden");
        console.log("test");
  }
  
      
      
  };