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

function addTodoToProject(projectTitle, todoTitle, todoDesc, todoIsDone, todoPriority) {
    for(let i = 0; i < projects.length; i++){
        if(projectTitle === projects[i].getTitle()){
            console.log('gotcha');
            projects[i].addTodo(todoTitle, todoDesc, todoIsDone, todoPriority);
            return;
        }
    }
}

function removeProject(projectTitle) {
    for(let i = 0; i < projects.length; i++){
        if(projects[i].title() === projectTitle){
            projects[i] === null;
            return;
        }
    }
    alert('Project does not exist');
}

function getProject() {
    const activeProject = document.getElementById('active');
    for(let i = 0; i < projects.length; i++){
        if(projects[i].getTitle() === activeProject.dataset.title){
            return projects[i];
        }
    }
    alert('this project does not exist');
}

export { addProject, removeProject, getProject, addTodoToProject };