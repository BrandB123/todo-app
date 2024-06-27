import './styles.css';
import { projectList } from './projectList.js';
import { createProject } from './projectCreator.js';
import { DOMController } from './DOMController.js';

// create an array for projects to be stored in
const Projects = projectList();

// add projects to the empty array
let firstProject = createProject("Today");
Projects.addProject(firstProject);
let secondProject = createProject("This Week");
Projects.addProject(secondProject);
let thirdProject = createProject("This Month");
Projects.addProject(thirdProject);

// add todo items to projects
firstProject.createItem("1-1", "first project, first todo item")
firstProject.createItem("1-2", "first project, second todo item")
firstProject.createItem("1-3", "first project, third todo item")
secondProject.createItem("2-1", "second project, first todo item")
secondProject.createItem("2-2", "second project, second todo item")
secondProject.createItem("2-3", "second project, third todo item")
thirdProject.createItem("3-1", "third project, first todo item")
thirdProject.createItem("3-2", "third project, second todo item")
thirdProject.createItem("3-3", "third project, third todo item")

// DISPLAY CONTENT ON LOAD
document.addEventListener("DOMContentLoaded", () => {
    Projects.ProjectArray[0].status = true;
    Projects.ProjectArray[0].todoItems[0].status = true;
    DOMController(Projects)
});

// DISPLAY ON CLICKING A PROJECT
const ProjectsListDiv = document.querySelector(".project-list");
ProjectsListDiv.addEventListener("click", (event) => {
    let target = event.target.textContent;
    Projects.ProjectArray.forEach((project) => {
        project.title === target ? project.status = true : project.status = false;
        project.todoItems.forEach((item) => {item.status = false});
        project.todoItems[0].status = true;
    });
    DOMController(Projects);
});


// DISPLAY ON CLICKING A TODO ITEM
const todoListDiv = document.querySelector(".todo-list");
todoListDiv.addEventListener("click", (event) => {
    let target = event.target.textContent; //obtains project title
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
/*
function editProjects(){
    ProjectsListDiv.addEventListener("mouseover", (event) => {
        event.target.children[1].style.visibility = "visible";
    });
    ProjectsListDiv.addEventListener("mouseout", (event) => {
        event.target.children[1].style.visibility = "hidden";
    });
}
*/



// DISPLAY ON DELETE TODO ITEM
const deleteButton = document.querySelector(".delete-button");

deleteButton.addEventListener("click", () => {
    // find active project
    Projects.ProjectArray.forEach((project) => {
        if (project.status === true){
            //find active item
            project.todoItems.forEach((item) => {
                if (item.status === true){
                    // call deleteitem on active item in active project
                    project.deleteItem(item.title)
                }
            })
        } 
    });
    DOMController(Projects);
})


// DISPLAY ON EDIT TODO ITEM
const editButton = document.querySelector(".edit-button");
const editForm = document.querySelector(".todo-edit");
editButton.addEventListener("click", () => {
    
    // display form for editing request
    editForm.style.visibility = "visible";
    editSubmit.addEventListener("click", editFormSubmit);
});

const editSubmit = document.querySelector(".edit-submit");

function editFormSubmit(event){
    event.preventDefault();
    // get select value
	let editSelect = document.querySelector(".edit-select");
	// get textarea value
	let editTextArea = document.querySelector(".edit-textarea");
	
    // find active project
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
    editSubmit.removeEventListener("click", editFormSubmit);
};

const closeEditForm = document.querySelector(".edit-close");
closeEditForm.addEventListener("click", (event) => {
    event.preventDefault();
    editForm.style.visibility = "HIDDEN";
});
