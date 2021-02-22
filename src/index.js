
import {dom} from "./dom";


//project DOM
const newProjectBtn = document.querySelector('#newProject');
const addProjectBtn = document.querySelector('#projectSubmit');
const cancelProjectBtn = document.querySelector('#projectCancel');
   
newProjectBtn.addEventListener('click', dom.showProjectCreator);
addProjectBtn.addEventListener('click', dom.newProject);
cancelProjectBtn.addEventListener('click', dom.cancelProject);

//Task DOM
const newTaskBtn = document.querySelector('#newTask');
const cancelTaskBtn = document.querySelector('#taskCancel');
const addTaskBtn = document.querySelector('#taskSubmit');

newTaskBtn.addEventListener('click', dom.showTaskCreator);
addTaskBtn.addEventListener('click', dom.newTask);
cancelTaskBtn.addEventListener('click', dom.cancelTask); 

dom.newProject("Example Project");
