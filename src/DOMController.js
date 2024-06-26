let DOMController = (projectArrayObject) => {

    // function to display projects
    function displayProjects(listOfProjects) {    
        let projectListDiv = document.querySelector(".project-list");
        projectListDiv.textContent = "";
        listOfProjects.ProjectArray.forEach((project) => {
            let listOfProjectsItem = document.createElement("button");
            project.status === true ? listOfProjectsItem.classList.add("project-list-item", "active") : listOfProjectsItem.classList.add("project-list-item");
            /*let projectNameDiv = document.createElement("div");
            let projectEditDiv = document.createElement("button");
            projectNameDiv.classList.add("project-name");
            projectEditDiv.classList.add("project-edit-button");
            projectNameDiv.textContent = project.title;
            projectEditDiv.textContent = "..."
            listOfProjectsItem.appendChild(projectNameDiv);
            listOfProjectsItem.appendChild(projectEditDiv);*/
            listOfProjectsItem.textContent = project.title;
            projectListDiv.appendChild(listOfProjectsItem);
        })
    }

    displayProjects(projectArrayObject);

    // function to display todo items for active project
    function displayProjectItems(listOfProjects){    
        let projectListItemsDiv = document.querySelector(".todo-list");
        projectListItemsDiv.textContent = "";
        listOfProjects.ProjectArray.forEach((project) => {
                if (project.status === true){
                    project.todoItems.forEach((item) => {
                        let ProjectTodoItem = document.createElement("button");
                        item.status === true ? ProjectTodoItem.classList.add("todo-list-item", "active") : ProjectTodoItem.classList.add("todo-list-item");
                        ProjectTodoItem.textContent = item.title;
                        projectListItemsDiv.appendChild(ProjectTodoItem);
                    })
                }
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

    return {DOMController}
}

export { DOMController };
