let DOMController = (projectArrayObject) => {

    // function to display projects
    function displayProjects(listOfProjects) {    
        let projectListDiv = document.querySelector(".project-list");
        projectListDiv.textContent = "";
        listOfProjects.ProjectArray.forEach((project) => {
            let listOfProjectsItem = document.createElement("button");
            project.status === true ? listOfProjectsItem.classList.add("project-list-item", "active") : listOfProjectsItem.classList.add("project-list-item");
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
                        if (item.title !== "+"){
                            let ProjectTodoItem = document.createElement("button");
                            item.status === true ? ProjectTodoItem.classList.add("todo-list-item", "active") : ProjectTodoItem.classList.add("todo-list-item");
                            ProjectTodoItem.textContent = item.title;
                            projectListItemsDiv.appendChild(ProjectTodoItem);                            
                        }
                    })
                    let AddingTodoItem = document.createElement("button");
                    project.todoItems[0].status === true ? AddingTodoItem.classList.add("todo-list-item", "active", "add-button") : AddingTodoItem.classList.add("todo-list-item", "add-button");
                    AddingTodoItem.textContent = project.todoItems[0].title;
                    projectListItemsDiv.appendChild(AddingTodoItem);
                    const addButton = document.querySelector(".add-button");
                    const addForm = document.querySelector(".todo-add");    
                    addButton.addEventListener("click", () => {
                        addForm.style.visibility = "visible";
                
                    });
                }
        });
    }
    displayProjectItems(projectArrayObject);


    // function to display todo descriptions
    function displayTodoItemDescription(listOfProjects){
        listOfProjects.ProjectArray.forEach((project) => {
            if (project.status === true){
                project.todoItems.forEach((item) => {
                    let editButton = document.querySelector(".edit-button");
                    let deleteButton = document.querySelector(".delete-button");
                    if (item.status === true){
                        let activeDescription = document.querySelector(".description-text");
                        activeDescription.textContent = item.description
                        editButton.style.visibility = "visible";
                        deleteButton.style.visibility = "visible";
                    }
                    if (item.title === "+"){
                        editButton.style.visibility = "hidden";
                        deleteButton.style.visibility = "hidden";
                    }
                });
            }
        });
    }

    displayTodoItemDescription(projectArrayObject);


    return {DOMController}
}

export { DOMController };
