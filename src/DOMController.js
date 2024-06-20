// import { projectList } from './projectList.js';
// import { createProject } from './projectCreator.js';
let DOMController = (projectArrayObject) => {

// create function to display current Projects object info
    // function to display projects
    function displayProjects(listOfProjects) {    
        let projectListDiv = document.querySelector(".project-list");
        listOfProjects.ProjectArray.forEach((project) => {
            let listOfProjectsItem = document.createElement("div");
            listOfProjectsItem.classList.add("project-list-item");
            listOfProjectsItem.textContent = project.title;
            projectListDiv.appendChild(listOfProjectsItem);
        })
    }

    displayProjects(projectArrayObject);

    // function to display todo items(titles and add button) for active project
    function displayProjectItems(listOfProjects){    
        let projectListItemsDiv = document.querySelector(".todo-list");
        listOfProjects.ProjectArray.forEach((project) => {                          // iterate through projects
            // let projectListItemsDiv = document.querySelector(".todo-list");
            //project.todoItems.forEach((project) => {
                if (project.status === true){
                    project.todoItems.forEach((item) => {
                        let ProjectTodoItem = document.createElement("div");
                        ProjectTodoItem.classList.add("todo-list-item");
                        ProjectTodoItem.textContent = item.title;
                        projectListItemsDiv.appendChild(ProjectTodoItem);
                    })
                }
            //})
        });
    }
    displayProjectItems(projectArrayObject);


    // function to display todo descriptions
    function displayTodoItemDescription(listOfProjects){
        listOfProjects.ProjectArray.forEach((project) => {
            if (project.status === true){
                project.todoItems.forEach((item) => {
                    if (item.status === true){
                        let activeDescription = document.querySelector(".description-text");
                        activeDescription.textContent = item.description
                    }
                });
            }
        });
    }

    displayTodoItemDescription(projectArrayObject);


//  create eventListener and function for adding projects to the project list

// create eventListener and function for deleting projects from the project list

// create eventListener and function for adding todo items to a project

// create eventListener and function for deleting todo items from a project

// create eventListener and function for editing the status of a todo item

// create eventListener and function for editing the description of a todo item



    return {DOMController}
}

export { DOMController };




// // add projects to the empty array
// let firstProject = createProject("Today");
// Projects.addProject(firstProject);
// let secondProject = createProject("This Week");
// Projects.addProject(secondProject);
// let thirdProject = createProject("This Month");
// Projects.addProject(thirdProject);

// // cause them to be displayed in the app
// let projectList = document.querySelector(".project-list");
// Projects.ProjectArray.forEach((project) => {
//     let projectListItem = document.createElement("div");
//     projectListItem.classList.add("project-list-item");
//     projectListItem.textContent = project.title;
//     projectList.appendChild(projectListItem);
// })