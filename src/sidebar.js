import control from './controller';
import { addProject, getProjects } from './controller';

export default function sidebarInit() {
    const projects = document.querySelector('.projects');

    projects.firstElementChild.classList.add('active');

    addProjectButton();
}

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

    return newProjBtn;
}

function addTextBox(button) {
    const textBox = document.createElement('input');
    textBox.type = "text";
    textBox.classList.add('new-project-title');
    textBox.addEventListener('keydown', (event) => {
        if(event.key === 'Enter'){
            addProject(textBox.value);
            textBox.remove();
            button.id = "";
        }
        if(event.key === 'Escape'){
            console.log('hi');
            textBox.remove();
            button.id = "";
        }
    });
    return textBox;
}