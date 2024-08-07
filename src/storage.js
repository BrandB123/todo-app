let storageHandling = () => {
    // SET UP LOCALSTORAGE
    let setStoragePairs = (projectArray) => {
        projectArray.forEach((project) => {
            let storageKey = `project${projectArray.indexOf(project)}`;
            let storageValue;
            if (project.todoItems.length < 2){
                storageValue = ['none']
            } else {
                let todoItems = project.todoItems.reduce(function(accumulator, currentTodoObject,) {
                    let title = currentTodoObject.title
                    let description  = currentTodoObject.description
                    accumulator.push({title, description});
                    return accumulator
                }, []);
                storageValue = JSON.stringify(todoItems)
            }
            localStorage.setItem(storageKey, storageValue)
        });
    }

    // GET DATA FROM LOCALSTORAGE
    let getStoragePairs = (projectArray) => {
        projectArray.forEach((project) => {
            let storageProjectValue = localStorage.getItem(`project${projectArray.indexOf(project)}`);
            if (storageProjectValue !== "none"){
                let projectObject = JSON.parse(storageProjectValue);
                projectObject.forEach((object) => {
                    if (object.title !== "+"){
                        project.createItem(object.title, object.description);
                    };
                });
            };
        }); 
    }

    return {setStoragePairs, getStoragePairs}
}

export { storageHandling };
