let storageHandling = () => {
    // SET UP LOCALSTORAGE
    // check if localStorage is compatible and set up localStorage on window

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
    // get data already stored in local storage if there is data already saved there
    let getStoragePairs = (projectArray) => {
        projectArray.forEach((project) => {
            // get project from storage
            let storageProjectValue = localStorage.getItem(`project${projectArray.indexOf(project)}`);
            if (storageProjectValue !== "none"){
                let projectObject = JSON.parse(storageProjectValue);
                // create items with the data from storage
                projectObject.forEach((object) => {
                    if (object.title !== "+"){
                        project.createItem(object.title, object.description);
                    };
                });
            };
        }); 
    }

    // UPDATE LOCALSTORAGE
    // function to update the values in localStorage each time the DOM is updated

    return {setStoragePairs, getStoragePairs}
}

export { storageHandling };




// need to save the todoItems of each project