console.log("hello");

let myProjects = [];

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
}



let todo = (function(){
    //dom
    let newProjectBtn = document.querySelector('#newProject');
    let addProjectBtn = document.querySelector('#projectSubmit');
    let cancelProjectBtn = document.querySelector('#projectCancel');
    let projectCreator = document.querySelector('#PI');
    let projectsContainer = document.querySelector("#projectsContainer");
    
  
    
    newProjectBtn.addEventListener('click', showProjectCreator);
    addProjectBtn.addEventListener('click', newProject);
    cancelProjectBtn.addEventListener('click', cancelProject);


    
  
    function showProjectCreator() {
      projectCreator.classList.remove('hidden');
    }

    function newProject() {
        const name = document.querySelector('#projectInput').value;
        myProjects.push(new Project(name));
        console.log(myProjects);
        cancelProject();
        resetProjectView();
        displayProjects();
    }

    function displayProjects() {

        myProjects.forEach(element => {
            let div = document.createElement('div');
            let btn = document.createElement('button');
            btn.classList.add("deleteProjectButton");
            div.classList.add("projectFormatter");
            let name = element.name
            btn.innerHTML = 'DELETE';
            div.innerHTML = name;
            
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
                closestElement = '';
                project = '';
                
            }
        }
        resetProjectView();
        displayProjects();
    }

    /*function deleteProject() {
        let deleteBtn = document.querySelector('.clicked');
        let closestElement = deleteBtn.parentElement;
        let project = closestElement.textContent;
        console.log(project);

        for(var i =0; i < myProjects.length; i++) {
            if (project.includes(myProjects[i].name)) {
                myProjects.splice(i, 1);
                console.log(myProjects);
                deleteBtn = '';
                closestElement = '';
                project = '';
                
            }
        }
        resetProjectView();
        displayProjects();
    } */
  
    function cancelProject() {
      let projectInput = document.querySelector('#projectInput').value = '';
      projectCreator.classList.add('hidden');
  
    }
  
  })();