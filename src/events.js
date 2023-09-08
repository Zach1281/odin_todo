import { addProject, getProjects } from './controller';


export default function sidebarInit() {
    const projects = document.querySelector('.projects');

    const defaultProject = document.createElement('div');
    defaultProject.classList.add('project', 'btn');
    defaultProject.dataset.title = 'New Project';
    defaultProject.textContent = 'New Project';
    defaultProject.id = 'active';
    addProject('New Project');
    defaultProject.addEventListener('click', () => {
        toggleActive(defaultProject);
        addContentToTodoPanel();
    })
    projects.appendChild(defaultProject);
    addContentToTodoPanel();
    addProjectButton();
}

function toggleActive(projectToBeActive) {
    const currentlyActive = document.getElementById('active');
    currentlyActive.id = '';
    projectToBeActive.id = 'active';
}

// when someone enters in a new project, it should be added to the projects tab
// it should also then be the one focused on the todo-panel
function addProjectToSidebar(title) {
    const newProject = document.createElement('div');
    newProject.classList.add('project', 'btn');
    newProject.dataset.title = title;
    newProject.textContent = title;
    toggleActive(newProject);
    // placeholder for now, until we tie this button to rendering the project
    // that the name correlates to
    // it should also be listening for when a user selects it, it will toggle
    // active id and also swap out the todo-panel with the correct project and it's details
    newProject.addEventListener('click', () => {
        toggleActive(newProject);
        addContentToTodoPanel();
    });
    return newProject;
}

// when you press the 'Create New Project' button, it should be disabled and an inputfield should pop up
function addProjectButton() {
    const projects = document.querySelector('.projects');
    const addProject = document.querySelector('.add-project');
    const newProjBtn = document.createElement('div');
    newProjBtn.classList.add('create-new-project', 'btn');
    newProjBtn.innerHTML = "<p><span id='plus-icon'>+</span>Create New Project</p>";
    newProjBtn.addEventListener('click', () => {
        projects.appendChild(addTextBox(newProjBtn));
        newProjBtn.id = "input-active";
    });
    addProject.appendChild(newProjBtn);
}

// when the addProjectButton function is called, it will spawn an inputfield
// the inputfield will listen for if the user presses 'enter' or 'esc'
// both keys will enable the 'Create Project Button' and add the project to the array
function addTextBox(button) {
    const projects = document.querySelector('.projects');
    const textBox = document.createElement('input');
    textBox.type = "text";
    textBox.classList.add('new-project-title');
    textBox.addEventListener('keydown', (event) => {
        if(event.key === 'Enter'){
            textBox.remove();
            addProject(textBox.value);
            projects.appendChild(addProjectToSidebar(textBox.value));
            addContentToTodoPanel();
            button.id = "";
        }
        if(event.key === 'Escape'){
            textBox.remove();
            button.id = "";
        }
    });
    return textBox;
}

// we want to populate the panel with the correct project todos when we click the
// corresponding project button on the project panel
function addContentToTodoPanel() {
    const todoPanel = document.querySelector('.todo-panel');  
    
    
    let projects = getProjects();
    let foundIndex = null;
    const activeProject = document.getElementById('active');

    for(let i = 0; i < projects.length; i++){
        if(projects[i].getTitle() === activeProject.dataset.title){
            foundIndex = i;
        }
    }
    if(foundIndex === null){
        alert('this should not happen');
        return;
    }
    let todoList = projects[foundIndex].getList();
    todoPanel.appendChild(addProjectTitleDesc(projects[foundIndex]));
    for(let i = 0; i < todoList.length; i++){
        
    }
    
}

function addProjectTitleDesc(project){
    const projectInfoContainer = document.querySelector('.title-desc');
    const projTitle = document.querySelector('.project-title');
    const projDesc = document.querySelector('.project-desc');

    projTitle.textContent = project.getTitle();
    projDesc.textContent = project.getDescription();

    projectInfoContainer.appendChild(projTitle);
    projectInfoContainer.appendChild(projDesc);

    return projectInfoContainer;
}
