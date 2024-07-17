const projectList = () => {
    let ProjectArray = [];
    const addProject = (projectObject) => ProjectArray.push(projectObject);

    const editProject = (projectTitle, property, content) => {
        ProjectArray.map((project) => {
            if (project.title === projectTitle){
                project[property] = content;
            }
        });
    }

    const deleteProject = (projectTitle) => {
        let projectTitles = ProjectArray.map((project) => project.title);
        if (projectTitles.includes(projectTitle)){
            let index = projectTitles.indexOf(projectTitle);
            ProjectArray.splice(index, 1);
        }
    }

    const activeProject = () => {
        let activeProjectObject;
        let activeIndex;
        ProjectArray.forEach((project, index) => {
            if (project.status === true){
                activeProjectObject = project;
                activeIndex = index;
            };
        });
        return {activeIndex, activeProjectObject};
    }
    return {ProjectArray, addProject, editProject, deleteProject, activeProject}
}


export { projectList };