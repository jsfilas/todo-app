import {currentProject} from './project.js';

const taskContainer = document.querySelector('#taskContainer');


class Task {
    constructor(name, priority, dueDate) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;

    }

    render() {
            let div = document.createElement('div');
            let btn = document.createElement('button');
            btn.classList.add("deleteTaskButton");
            div.classList.add("taskFormatter");
        

            let box = document.createElement('div');
            box.setAttribute('id', this.name);
            box.classList.add("taskDesign");
                let detail1 = document.createElement('div');
                let detail2 = document.createElement('div');
                let detail3 = document.createElement('div');
                detail2.textContent = this.name;
                detail1.textContent = this.priority;
                detail3.textContent = this.dueDate;
                detail2.classList.add("detail2");
                detail1.classList.add("detail1");
                detail3.classList.add("detail1");
                box.appendChild(detail2);
                box.appendChild(detail1);
                box.appendChild(detail3);

            btn.innerHTML = 'X';
            
         
            taskContainer.appendChild(div);
            div.appendChild(btn);
            btn.addEventListener('click', this.delete);
            div.appendChild(box);
        }

        

        delete(e) {

            let deleteBtn = $(e.target).closest('button');
            let closestDiv = deleteBtn.closest('div');
            let task = closestDiv.html();
            console.log(closestDiv);
            console.log(task);
    
            for(var i =0; i < currentProject.tasks.length; i++) {
                if (task.includes(currentProject.tasks[i].name)) {
                    currentProject.tasks.splice(i, 1);
                    console.log(currentProject.tasks);
                    deleteBtn = '';
                    task = '';
                    renderTasks();
                }
            }
        }
    };



function renderTasks() {
    taskContainer.innerHTML = '';
    let currentTasks = currentProject.tasks;
    console.log(currentProject.tasks);
    currentTasks.forEach((task) =>  task.render());

}

export {Task, renderTasks};