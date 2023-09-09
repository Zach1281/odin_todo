import { getProject } from './controller';


export default function todoPanelInit() {
    addContentToTodoPanel();
    addTodoButton();
}

// we want to populate the panel with the correct project todos when we click the
// corresponding project button on the project panel
function addContentToTodoPanel() {
    const todoPanel = document.querySelector('.todo-panel');  
    const project = getProject();

    let todoList = project.getList();
    addProjectTitleDesc(project);
    const todosContainer = document.createElement('div');
    for(let i = 0; i < todoList.length; i++){
        const todoContainer = document.createElement('div');
        const title = document.createElement('div');
        title.classList.add('todo-title');
        const desc = document.createElement('div');
        desc.classList.add('todo-desc');
        const isDone = document.createElement('input');
        isDone.id = 'isDone-' + i;
        isDone.type = "checkbox";
        isDone.classList.add('todo-isdone');
        const isDoneLabel = document.createElement('label');
        isDoneLabel.setAttribute('for', 'idDone-' + i);

        title.textContent = todoList.getTitle();
        desc.textContent = todoList.getDescription();
        isDoneLabel.textContent = "Complete?";

        todoContainer.appendChild(title);
        todoContainer.appendChild(desc);
        todoContainer.appendChild(isDone);
        todoContainer.appendChild(isDoneLabel);
        todosContainer.appendChild(todoContainer);
    }
    todoPanel.appendChild(todosContainer);
}

function addProjectTitleDesc(project){
    const projectInfoContainer = document.querySelector('.title-desc');
    const projTitle = document.querySelector('.project-title');
    const projDesc = document.querySelector('.project-desc');

    projTitle.textContent = project.getTitle();
    projDesc.textContent = project.getDescription();

    projectInfoContainer.appendChild(projTitle);
    projectInfoContainer.appendChild(projDesc);
}

function addTodoButton() {
    const addTodo = document.querySelector('.add-todo-button');
    const btn = document.createElement('div');
    btn.classList.add('add-todo-button', 'btn');
    btn.innerHTML = "<p><span id='plus-icon'>+</span>Add To-Do</p>";
    btn.addEventListener('click', () => {
        addTodo(btn);
        btn.id = "input-active";
    });
    addTodo.appendChild(btn);
}


export { addContentToTodoPanel, addTodoButton }