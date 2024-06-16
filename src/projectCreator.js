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

export { createProject };