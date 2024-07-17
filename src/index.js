import './styles.css';
import { projectList } from './projectList.js';
import { createProject } from './projectCreator.js';
import { DOMController } from './DOMController.js';
import { storageHandling } from './storage.js';


const Projects = projectList();
const STORAGE = storageHandling();
const updateScreen = DOMController();


const firstProject = createProject("Today");
Projects.addProject(firstProject);
const secondProject = createProject("This Week");
Projects.addProject(secondProject);
const thirdProject = createProject("This Month");
Projects.addProject(thirdProject);


if (localStorage.length > 0){
    STORAGE.getStoragePairs(Projects.ProjectArray);
}


document.addEventListener("DOMContentLoaded", () => {
    Projects.ProjectArray[0].status = true;
    if (Projects.ProjectArray[0].todoItems[1]){
        Projects.ProjectArray[0].todoItems[1].status = true;
    } else {
        Projects.ProjectArray[0].todoItems[0].status = true;
    }
    const activeProject = Projects.activeProject();
    const activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    updateScreen.displayProjects(Projects.ProjectArray);
    updateScreen.displayTodoItems(activeProject.activeProjectObject);
    updateScreen.displayDescription(activeTodoItem.activeItem);
});


// DISPLAY ON CLICKING A PROJECT
const ProjectsListDiv = document.querySelector(".project-list");
ProjectsListDiv.addEventListener("click", (event) => {
    const target = event.target.textContent;
    Projects.activeProject.status = false;
    Projects.ProjectArray.forEach((project) => {
        project.title === target ? project.status = true : project.status = false;
        project.todoItems.forEach((item) => {item.status = false});
        project.todoItems[1] ? project.todoItems[1].status = true : project.todoItems[0].status = true;
    });
    const activeProject = Projects.activeProject();
    const activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    updateScreen.displayProjects(Projects.ProjectArray);
    updateScreen.displayTodoItems(activeProject.activeProjectObject);
    updateScreen.displayDescription(activeTodoItem.activeItem);
});


// DISPLAY ON CLICKING A TODO ITEM
const todoListDiv = document.querySelector(".todo-list");
todoListDiv.addEventListener("click", (event) => {
    const target = event.target.textContent;
    const activeProject = Projects.activeProject();
    activeProject.activeProjectObject.todoItems.forEach((item) => {
        item.title === target ? item.status = true : item.status = false;
    })
    const activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    updateScreen.displayTodoItems(activeProject.activeProjectObject);
    updateScreen.displayDescription(activeTodoItem.activeItem);
});


// DISPLAY ON ADD TODO ITEM
const addForm = document.querySelector(".todo-add");
const addSubmit = document.querySelector(".add-submit");
const closeAddForm = document.querySelector(".add-close");
const titleInput = document.querySelector(".add-title-input");
const descriptionInput = document.querySelector(".add-textarea");

addSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const addTitle = titleInput.value;
    const addDescription = ((descriptionInput) => {
        let processDescription = descriptionInput.value;
        processDescription = processDescription.split("\n");
        processDescription = processDescription.join('</br>');
        return processDescription
    })(descriptionInput)

    const activeProject = Projects.activeProject();
    Projects.ProjectArray[activeProject.activeIndex].createItem(addTitle, addDescription);
    activeProject.activeProjectObject.todoItems[0].status = false;
    activeProject.activeProjectObject.todoItems[1].status = true;
    const activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    titleInput.value = "";
    descriptionInput.value = "";
    addForm.style.visibility = "hidden";
    updateScreen.displayTodoItems(activeProject.activeProjectObject);
    updateScreen.displayDescription(activeTodoItem.activeItem);
    STORAGE.setStoragePairs(Projects.ProjectArray);
});

        
closeAddForm.addEventListener("click", (event) => {
    event.preventDefault();
    addForm.style.visibility = "hidden";
    const activeProject = Projects.activeProject();
    activeProject.activeProjectObject.todoItems[0].status = false;
    activeProject.activeProjectObject.todoItems[1].status = true;
    const activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    updateScreen.displayTodoItems(activeProject.activeProjectObject);
    updateScreen.displayDescription(activeTodoItem.activeItem);
});


// DISPLAY ON DELETE TODO ITEM
const deleteButton = document.querySelector(".delete-button");
deleteButton.addEventListener("click", () => {
    const activeProject = Projects.activeProject();
    let activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    Projects.ProjectArray[activeProject.activeIndex].deleteItem(activeTodoItem.activeItem.title);
    activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    updateScreen.displayTodoItems(activeProject.activeProjectObject);
    updateScreen.displayDescription(activeTodoItem.activeItem);
    localStorage.clear();
    STORAGE.setStoragePairs(Projects.ProjectArray);
})


// DISPLAY ON EDIT TODO ITEM
const editButton = document.querySelector(".edit-button");
const editForm = document.querySelector(".todo-edit");
const editDropDown = document.querySelector(".edit-select");
const textInput = document.querySelector(".edit-textarea");
const editSubmit = document.querySelector(".edit-submit");


editButton.addEventListener("click", () => {
    const activeProject = Projects.activeProject();
    const activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    textInput.value = activeTodoItem.activeItem.title;
    editForm.style.visibility = "visible";
    editSubmit.addEventListener("click", editFormSubmit);
});


editDropDown.addEventListener("change", () => {
    const activeProject = Projects.activeProject();
    const activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    if (editDropDown.value === "Title"){
        textInput.value = activeTodoItem.activeItem.title;
    } else{
        let textAreaDescription = activeTodoItem.activeItem.description;
        textAreaDescription = textAreaDescription.split("</br>");
        textAreaDescription = textAreaDescription.join("\n");
        textInput.value = textAreaDescription;
    };
});


function editFormSubmit(event){
    event.preventDefault();
    const activeProject = Projects.activeProject();
    let activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    const itemProperty = editDropDown.value.toLowerCase();
    const editContent = (() => {
        let processTextArea = textInput.value;
        processTextArea = processTextArea.split("\n");
        processTextArea = processTextArea.join('</br>');
        return processTextArea;
    })()
    Projects.ProjectArray[activeProject.activeIndex].editItem(activeTodoItem.activeItem.title, itemProperty, editContent);
    activeTodoItem = Projects.ProjectArray[activeProject.activeIndex].activeItem();
    textInput.value = "";
    editDropDown.value = "Title";
    editForm.style.visibility = "hidden";
    updateScreen.displayTodoItems(activeProject.activeProjectObject);
    updateScreen.displayDescription(activeTodoItem.activeItem);
    STORAGE.setStoragePairs(Projects.ProjectArray);
    editSubmit.removeEventListener("click", editFormSubmit);
};


const closeEditForm = document.querySelector(".edit-close");
closeEditForm.addEventListener("click", (event) => {
    event.preventDefault();
    editForm.style.visibility = "hidden";
    editDropDown.value = "Title";
});