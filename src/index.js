import './styles.css';


//project object modules
let createProject =  (projectName) => {
    let title = projectName;
    let todoItems = [];
    let createItem = (title, description, status) => {
        //let editItem = (property, content) => {this[property] = content};
        let item = {title, description, status/*, editItem*/};
        todoItems.push(item);
    }
    let editItem = (itemTitle, property, content) => {
        todoItems.map((item) => {
            if (item.title === itemTitle){
                item[property] = content;
            }
        });
    }
    let deleteItem = (itemTitle) => {
        let itemTitles = todoItems.map((item) => item.title);
        if (itemTitles.includes(itemTitle)){
            let index = itemTitles.indexOf(itemTitle);
            todoItems.splice(index, 1);
            }
    }
    return {title, todoItems, createItem, editItem, deleteItem}
}




// testing creation of a project, creation of a todo item, editing a to do item, and deleting a todo item
let Projects = [];

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
});

// DOMcontroller object module