const DOMController = () => {

    const displayProjects = (projectArray) => {    
        const projectListDiv = document.querySelector(".project-list");
        projectListDiv.textContent = "";
        projectArray.forEach((project) => {
            const projectItem = document.createElement("button");
            project.status === true ? projectItem.classList.add("project-list-item", "active") : projectItem.classList.add("project-list-item");
            projectItem.textContent = project.title;
            projectListDiv.appendChild(projectItem);

            projectItem.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "#333";
            });
            projectItem.addEventListener("mouseout", (event) => {
                project.status === true ? event.target.style.backgroundColor = "#333" : event.target.style.backgroundColor = "#000";
            });
        });
    }


    const displayTodoItems = (projectObject) => {    
        const todoItemsDiv = document.querySelector(".todo-list");
        todoItemsDiv.textContent = "";

        projectObject.todoItems.forEach((item) => {
            if (item.title !== "+"){
                const TodoItem = document.createElement("button");
                item.status === true ? TodoItem.classList.add("todo-list-item", "active") : TodoItem.classList.add("todo-list-item");
                TodoItem.textContent = item.title;
                todoItemsDiv.appendChild(TodoItem); 

                TodoItem.addEventListener("mouseover", (event) => {
                    event.target.style.backgroundColor = "#333";
                }); 

                TodoItem.addEventListener("mouseout", (event) => {
                    item.status === true ? event.target.style.backgroundColor = "#333" : event.target.style.backgroundColor = "#000";
                });
            };
        });

        const addFormTodoItem = document.createElement("button");
        projectObject.todoItems[0].status === true ? addFormTodoItem.classList.add("todo-list-item", "active", "add-button") : addFormTodoItem.classList.add("todo-list-item", "add-button");
        addFormTodoItem.textContent = projectObject.todoItems[0].title;
        todoItemsDiv.appendChild(addFormTodoItem);

        addFormTodoItem.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "#222";
        });

        addFormTodoItem.addEventListener("mouseout", (event) => {
            event.target.style.backgroundColor = "#000";
        });

        const addButton = document.querySelector(".add-button");
        const addForm = document.querySelector(".todo-add");    
        addButton.addEventListener("click", () => {
            addForm.style.visibility = "visible";
        });
    }


    const displayDescription = (todoObject) => {

        const editButton = document.querySelector(".edit-button");
        const deleteButton = document.querySelector(".delete-button");
        const description = document.querySelector(".description-text");
        description.innerHTML = todoObject.description;
        editButton.style.visibility = "visible";
        deleteButton.style.visibility = "visible";
        if (todoObject.title === "+"){
            editButton.style.visibility = "hidden";
            deleteButton.style.visibility = "hidden";
        };
    }


    return {displayProjects, displayTodoItems, displayDescription}
}

export { DOMController };
