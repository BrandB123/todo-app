let createProject =  (projectName) => {
    let title = projectName;
    let status = false;
    let todoItems = [];
    let createItem = (title, description) => {
        let item = {title, description, status : "false"};
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
            todoItems[0].status = true;
            }
    }
    return {title, status, todoItems, createItem, editItem, deleteItem}
}

export { createProject };