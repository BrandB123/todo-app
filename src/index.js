import './styles.css';
import { projectList } from './projectList.js';
import { createProject } from './projectCreator.js';
import { DOMController } from './DOMController.js';



// //project object module
// let createProject =  (projectName) => {
//     let title = projectName;
//     let todoItems = [];
//     let createItem = (title, description, status) => {
//         //let editItem = (property, content) => {this[property] = content};
//         let item = {title, description, status/*, editItem*/};
//         todoItems.push(item);
//     }
//     let editItem = (itemTitle, property, content) => {
//         todoItems.map((item) => {
//             if (item.title === itemTitle){
//                 item[property] = content;
//             }
//         });
//     }
//     let deleteItem = (itemTitle) => {
//         let itemTitles = todoItems.map((item) => item.title);
//         if (itemTitles.includes(itemTitle)){
//             let index = itemTitles.indexOf(itemTitle);
//             todoItems.splice(index, 1);
//             }
//     }
//     return {title, todoItems, createItem, editItem, deleteItem}
// }




// Projects Object module
// let ProjectsList = () => {
//     let ProjectArray = [];
//     let addProject = (projectObject) => ProjectArray.push(projectObject);
//     let deleteProject = (projectTitle) => {
//         let projectTitles = ProjectArray.map((project) => project.title);
//         if (projectTitles.includes(projectTitle)){
//             let index = projectTitles.indexOf(projectTitle);
//             ProjectArray.splice(index, 1);
//         }
//     }
//     return {ProjectArray, addProject, deleteProject}
// }












// create an array for projects to be stored in
let Projects = projectList();

// add projects to the empty array
let firstProject = createProject("Today");
Projects.addProject(firstProject);
let secondProject = createProject("This Week");
Projects.addProject(secondProject);
let thirdProject = createProject("This Month");
Projects.addProject(thirdProject);

// cause them to be displayed in the app
// let projectListDiv = document.querySelector(".project-list");
// Projects.ProjectArray.forEach((project) => {
//     let projectListItem = document.createElement("div");
//     projectListItem.classList.add("project-list-item");
//     projectListItem.textContent = project.title;
//     projectListDiv.appendChild(projectListItem);
// })


document.addEventListener("DOMContentLoaded", DOMController(Projects));







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