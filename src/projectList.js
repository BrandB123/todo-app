let projectList = () => {
    let ProjectArray = [];
    let addProject = (projectObject) => ProjectArray.push(projectObject);
    let deleteProject = (projectTitle) => {
        let projectTitles = ProjectArray.map((project) => project.title);
        if (projectTitles.includes(projectTitle)){
            let index = projectTitles.indexOf(projectTitle);
            ProjectArray.splice(index, 1);
        }
    }
    return {ProjectArray, addProject, deleteProject, status}
}


export { projectList };