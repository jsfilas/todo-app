import { Project, myProjects, highlightedProject, currentProject, renderProjects } from "./project";
import { Task, renderTasks} from "./task";


const projectCreator = document.querySelector('#PI');
const taskCreator = document.querySelector('#TI');



let dom = {

    showProjectCreator: function() {
        projectCreator.classList.remove('hidden');
      },

    

    newProject: function(value) {
        const name = (typeof value === "string") ? value : document.querySelector('#projectInput').value;
        myProjects.push(new Project(name));
        console.log(myProjects);
        let projectInput = document.querySelector('#projectInput').value = '';
        projectCreator.classList.add('hidden');
        renderProjects();
    },

    cancelProject: function() {
        let projectInput = document.querySelector('#projectInput').value = '';
        projectCreator.classList.add('hidden');
      },
   

    showTaskCreator: function() {
        if (currentProject == '') {
            alert("Select a project before creating Tasks");
            return;
        }
        taskCreator.classList.remove('hidden');
      },

      newTask: function() {
        const name = document.querySelector('#taskInput').value;
        console.log(name);
        const priority = document.querySelector('#priorityLevel').value;
        console.log(priority);
        const dueDate = document.querySelector('.taskDate').value;
        console.log(dueDate);
        console.log(currentProject);
        currentProject.tasks.push(new Task(name, priority, dueDate));
        console.log(currentProject);
        let taskInput = document.querySelector('#taskInput').value = '';
        taskCreator.classList.add('hidden');
        renderTasks();
    },

    cancelTask: function() {
        let taskInput = document.querySelector('#taskInput').value = '';
        taskCreator.classList.add('hidden');
      
      }
      

}


export {dom};