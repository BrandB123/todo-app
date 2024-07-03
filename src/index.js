import './styles.css';
import { projectList } from './projectList.js';
import { createProject } from './projectCreator.js';
import { DOMController } from './DOMController.js';
import { storageHandling } from './storage.js';


// create an array for projects to be stored in
const Projects = projectList();
const STORAGE = storageHandling();


// add preset projects to the Projects array
let firstProject = createProject("Today");
Projects.addProject(firstProject);
let secondProject = createProject("This Week");
Projects.addProject(secondProject);
let thirdProject = createProject("This Month");
Projects.addProject(thirdProject);


// add todo items to projects
if (localStorage.length > 0){
    STORAGE.getStoragePairs(Projects.ProjectArray);
}


// DISPLAY CONTENT ON LOAD
document.addEventListener("DOMContentLoaded", () => {
    Projects.ProjectArray[0].status = true;
    if (Projects.ProjectArray[0].todoItems[1]){
        Projects.ProjectArray[0].todoItems[1].status = true;
    } else {
        Projects.ProjectArray[0].todoItems[0].status = true;
    }
    DOMController(Projects)
});


// DISPLAY ON CLICKING A PROJECT
const ProjectsListDiv = document.querySelector(".project-list");
ProjectsListDiv.addEventListener("click", (event) => {
    let target = event.target.textContent;
    Projects.ProjectArray.forEach((project) => {
        project.title === target ? project.status = true : project.status = false;
        project.todoItems.forEach((item) => {item.status = false});
        project.todoItems[1] ? project.todoItems[1].status = true : project.todoItems[0].status = true;
    });
    DOMController(Projects);
});


// DISPLAY ON CLICKING A TODO ITEM
const todoListDiv = document.querySelector(".todo-list");
todoListDiv.addEventListener("click", (event) => {
    let target = event.target.textContent;
    Projects.ProjectArray.forEach((project) => {
        if (project.status === true){
            project.todoItems.forEach((item) => {
                item.title === target ? item.status = true : item.status = false;
            })
        }
    });
    DOMController(Projects);
});


// DISPLAY ON ADD TODO ITEM
const addForm = document.querySelector(".todo-add");
const addSubmit = document.querySelector(".add-submit");
const closeAddForm = document.querySelector(".add-close");

addSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    let addTitle = document.querySelector(".add-title-input");
    let addDescription = document.querySelector(".add-textarea");
    Projects.ProjectArray.forEach((project) => {
        if (project.status === true) {
            project.createItem(addTitle.value, addDescription.value)
            project.todoItems[0].status = false;
            project.todoItems[1].status = true;
        }
    });
    addTitle.value = "";
    addDescription.value = "";
    addForm.style.visibility = "hidden";
    DOMController(Projects);
    STORAGE.setStoragePairs(Projects.ProjectArray);
});

        
closeAddForm.addEventListener("click", (event) => {
    event.preventDefault();
    addForm.style.visibility = "hidden";
});


// DISPLAY ON DELETE TODO ITEM
const deleteButton = document.querySelector(".delete-button");

deleteButton.addEventListener("click", () => {
    Projects.ProjectArray.forEach((project) => {
        if (project.status === true){
            project.todoItems.forEach((item) => {
                if (item.status === true){
                    project.deleteItem(item.title)
                }
            })
        } 
    });
    DOMController(Projects);
    localStorage.clear();
    STORAGE.setStoragePairs(Projects.ProjectArray);
})


// DISPLAY ON EDIT TODO ITEM
const editButton = document.querySelector(".edit-button");
const editForm = document.querySelector(".todo-edit");
editButton.addEventListener("click", () => {
    editForm.style.visibility = "visible";
    editSubmit.addEventListener("click", editFormSubmit);
});

const editSubmit = document.querySelector(".edit-submit");

function editFormSubmit(event){
    event.preventDefault();
	let editSelect = document.querySelector(".edit-select");
	let editTextArea = document.querySelector(".edit-textarea");

	Projects.ProjectArray.forEach((project) => {
	    if (project.status === true){
		    project.todoItems.forEach((item) => {
		        if (item.status === true){
                    let itemProperty = editSelect.value.toLowerCase();
                    project.editItem(item.title, itemProperty, editTextArea.value);
                }
	        });
        };
    });
    editTextArea.value = "";
    editForm.style.visibility = "hidden";
	DOMController(Projects);
    STORAGE.setStoragePairs(Projects.ProjectArray);
    editSubmit.removeEventListener("click", editFormSubmit);
};

const closeEditForm = document.querySelector(".edit-close");
closeEditForm.addEventListener("click", (event) => {
    event.preventDefault();
    editForm.style.visibility = "hidden";
});