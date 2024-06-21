import './styles.css';
import { projectList } from './projectList.js';
import { createProject } from './projectCreator.js';
import { DOMController } from './DOMController.js';

// create an array for projects to be stored in
let Projects = projectList();

// add projects to the empty array
let firstProject = createProject("Today");
Projects.addProject(firstProject);
let secondProject = createProject("This Week");
Projects.addProject(secondProject);
let thirdProject = createProject("This Month");
Projects.addProject(thirdProject);

// set a project as the active one, simulating it is clicked
firstProject.status = true;

// add todo items to projects
firstProject.createItem("1-1", "first project, first todo item", true)
firstProject.createItem("1-2", "first project, second todo item", false)
firstProject.createItem("1-3", "first project, third todo item", false)
secondProject.createItem("2-1", "second project, first todo item", false)
secondProject.createItem("2-2", "second project, second todo item", true)
secondProject.createItem("2-3", "second project, third todo item", false)
thirdProject.createItem("3-1", "third project, first todo item", false)
thirdProject.createItem("3-2", "third project, second todo item", false)
thirdProject.createItem("3-3", "third project, third todo item", true)

// cause them to be displayed in the app
document.addEventListener("DOMContentLoaded", DOMController(Projects));


let ProjectsListDiv = document.querySelector(".project-list");
function eventLoop(div){
    div.addEventListener("click", (event) => {
        let target = event.target.textContent; //obtains project title
        Projects.ProjectArray.forEach((project) => {
            project.title === target ? project.status = true : project.status = false;
        });
        DOMController(Projects);
        eventLoop(div)
    });
}


let todoListDiv = document.querySelector(".todo-list");
function todoEventLoop(div){
    div.addEventListener("click", (event) => {
        let target = event.target.textContent; //obtains project title
        Projects.ProjectArray.forEach((project) => {
            if (project.status === true){
                project.todoItems.forEach((item) => {
                    item.title === target ? item.status = true : item.status = false;
                })
            }
        });
        DOMController(Projects);
        todoEventLoop(div);
    });
}


eventLoop(ProjectsListDiv);
todoEventLoop(todoListDiv);









// testing creation of a project, creation of a todo item, editing a to do item, and deleting a todo item
/*let Projects = [];

let createProjectList = document.querySelector(".project-list");
createProjectList.addEventListener("click", () => {
    let testProject = createProject("Test Project");
    Projects.push(testProject);
    console.log(testProject);
    console.log(testProject.todoItems);
});

let addItem = document.querySelector(".todo-list");
addItem.addEventListener("click", () => {
    Projects[0].createItem("todo1", "this is my first todo item", false);
    console.log(Projects[0].todoItems);
});

let editItem = document.querySelector(".edit-button");
editItem.addEventListener("click", () => {
    Projects[0].editItem("todo1", "status", true);
    console.log(Projects[0].todoItems);
});

let deleteItem = document.querySelector(".delete-button");
deleteItem.addEventListener("click", () => {
    Projects[0].deleteItem("todo1");
    console.log(Projects[0].todoItems);
});*/

// DOMcontroller object module