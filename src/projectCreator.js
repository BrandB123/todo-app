const createProject =  (projectName) => {
    const title = projectName;
    const status = false;
    let todoItems = [{title: "+", description: "", status: false}];
    const createItem = (title, description) => {
        let item = {title, description, status : "false"};
        todoItems.push(item);
    }
    const editItem = (itemTitle, property, content) => {
        todoItems.map((item) => {
            if (item.title === itemTitle){
                item[property] = content;
            }
        });
    }
    const deleteItem = (itemTitle) => {
        let itemTitles = todoItems.map((item) => item.title);
        if (itemTitles.includes(itemTitle)){
            let index = itemTitles.indexOf(itemTitle);
            todoItems.splice(index, 1);
            todoItems[1] !== undefined ? todoItems[1].status = true : todoItems[0].status = true;
            }
    }
    const activeItem = () => {
        let activeItem;
        let activeIndex;
        todoItems.forEach((item, index) => {
            if (item.status === true){
                activeItem = item;
                activeIndex = index;
            };
        });
        return {activeIndex, activeItem};
    }

    return {title, status, todoItems, createItem, editItem, deleteItem, activeItem}
}

export { createProject };