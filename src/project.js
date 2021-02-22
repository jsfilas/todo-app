

const projectsContainer = document.querySelector("#projectsContainer");

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
        
    }

    

    render() {
            let projectDiv = document.createElement('div');
            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add("deleteProjectButton");
            projectDiv.classList.add("projectFormatter");
            let name = this.name
            deleteBtn.innerHTML = 'X';
            projectDiv.innerHTML = name;
            projectsContainer.appendChild(projectDiv);
            projectDiv.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', this.delete);
            projectDiv.addEventListener('click', this.focus.bind(projectDiv));
            console.log(myProjects);
        };
    

    delete(e) {

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
                renderProjects();
            }
        }
    }

    focus() {
        console.log(this);
        if (highlightedProject !== '') {
            $(highlightedProject).css("background-color", "#8d99ae");
            $(highlightedProject).css("color", "#edf2f4");
            $(highlightedProject).css("border", "3px solid #2b2d42");
            highlightedProject = ''
            currentProject = ''
        }
        highlightedProject = this;
        $(this).css("background-color", "#2b2d42");
        $(this).css("color", "#edf2f4");
        $(this).css("border", "3px solid #d90429");


    }
    
}

function renderProjects() {
    projectsContainer.innerHTML = '';
    myProjects.forEach((project) =>  project.render());
    highlightedProject = '';
}

let myProjects = [];
let highlightedProject = '';
let currentProject = '';

export { Project, myProjects, highlightedProject, currentProject, renderProjects };

    
    
  
    

    

   

    

