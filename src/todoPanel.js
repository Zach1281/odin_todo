import { getProject, addTodoToProject } from './controller';


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
    const addTodoBtn = document.querySelector('.add-todo-button');
    const btn = document.createElement('div');
    btn.classList.add('add-todo-button', 'btn');
    btn.innerHTML = "<p><span id='plus-icon'>+</span>Add To-Do</p>";
    btn.addEventListener('click', () => {
        addTodo();
        btn.id = "input-active";
    });
    addTodoBtn.appendChild(btn);
}

// should function like a form, and send all the info to the projects array in the 
// controller section
function addTodo(){
    const todoContainer = document.querySelector('.todo-container');

    const todo = document.createElement('div');
    

    const formDiv = document.createElement('div');
    formDiv.classList.add('todo-form');

    const title = document.createElement('input');
    title.type = 'text';
    title.id = 'todo-title';

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'todo-title');
    titleLabel.textContent = 'Title: ';

    const desc = document.createElement('input');
    desc.type = 'text';
    desc.id = 'todo-desc';

    const descLabel = document.createElement('label');
    descLabel.setAttribute('for', 'todo-desc');
    descLabel.textContent = 'Description: ';

    const isDone = document.createElement('input');
    isDone.type = 'checkbox';
    isDone.id = 'isdone';

    const isDoneLabel = document.createElement('label');
    isDoneLabel.setAttribute('for', 'isdone');
    isDoneLabel.textContent = 'Complete?';

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'todo-prio');
    priorityLabel.textContent = 'Priority: ';

    const priority = document.createElement('select');
    priority.name = 'priority-list';
    priority.id = 'priority';
    
    const highPrio = document.createElement('option');
    highPrio.value = 'High';
    highPrio.text = 'High';
    const medPrio = document.createElement('option');
    medPrio.value = 'Medium';
    medPrio.text = 'Medium';
    const lowPrio = document.createElement('option');
    lowPrio.value = 'Low';
    lowPrio.text = 'Low';

    priority.append(highPrio, medPrio, lowPrio);

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-todo-btn');
    addBtn.textContent = 'Add';
    addBtn.addEventListener('click', () => {
        const projectTitle = document.querySelector('.project-title');
        console.log(projectTitle);
        addTodoToProject(projectTitle.value, title.value, desc.value, isDone.value, priority.value);
        const btn = document.getElementById('input-active');
        btn.id = '';
        todo.remove();
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        todo.remove();
        const btn = document.getElementById('input-active');
        btn.id = '';
    });

    todo.append(formDiv, titleLabel, title, descLabel, desc, isDoneLabel, isDone, priorityLabel, priority, addBtn, cancelBtn);
    todoContainer.appendChild(todo);
}

export { addContentToTodoPanel, addTodoButton }