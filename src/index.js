import { Project, myProjects, highlightedProject, currentProject, renderProjects } from "./project";


const newProjectBtn = document.querySelector('#newProject');
const addProjectBtn = document.querySelector('#projectSubmit');
const cancelProjectBtn = document.querySelector('#projectCancel');
const projectCreator = document.querySelector('#PI');

    
newProjectBtn.addEventListener('click', showProjectCreator);
addProjectBtn.addEventListener('click', newProject);
cancelProjectBtn.addEventListener('click', cancelProject);



function showProjectCreator() {
    projectCreator.classList.remove('hidden');
  }

  function newProject(value) {
      const name = (typeof value === "string") ? value : document.querySelector('#projectInput').value;
      myProjects.push(new Project(name));
      console.log(myProjects);
      cancelProject();
      renderProjects();
  }

  newProject("Example Project");



  
  function cancelProject() {
    let projectInput = document.querySelector('#projectInput').value = '';
    projectCreator.classList.add('hidden');

  }