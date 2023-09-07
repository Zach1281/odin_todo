import Project from './project.js';

// we will store all projects here and the projects will store the todos

// this should be the in-between area for content to be updated

let projects = new Array();

export default function Update() {
    
}

function addProject(projectTitle) {
    console.log('adding project...');
    for(let i = 0; i < projects.length; i++){
        if(projectTitle === projects[i].getTitle()){
            alert('project already exists');
            return;
        }
    }
    projects.push(new Project(projectTitle));
}

function removeProject(projectTitle){
    for(let i = 0; i < projects.length; i++){
        if(projects[i].title() === projectTitle){
            projects[i] === null;
            return;
        }
    }
    alert('Project does not exist');
}

function getProjects() {
    return projects;
}

export { addProject, removeProject, getProjects };