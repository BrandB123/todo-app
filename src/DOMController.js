// import { projectList } from './projectList.js';
// import { createProject } from './projectCreator.js';
let DOMController = (projectArrayObject) => {
// create an array for projects to be stored in
    //let Projects = projectList();

// create function to display current Projects object info
    // function to display projects
    function displayProjects(listOfProjects) {    
        let projectListDiv = document.querySelector(".project-list");
        listOfProjects.ProjectArray.forEach((project) => {
            let projectListItem = document.createElement("div");
            projectListItem.classList.add("project-list-item");
            projectListItem.textContent = project.title;
            projectListDiv.appendChild(projectListItem);
        })
    }

    displayProjects(projectArrayObject);
    // function to display todo items(titles and add button)
    // function to display todo descriptions


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