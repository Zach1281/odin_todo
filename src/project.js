import Todo from './todo';

export default class Project {
    constructor(title = "", description = ""){
        this.title = title;
        this.description = description
        this.todoList = new Array();
    }
    
    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getList() {
        return this.todoList;
    }

    setTitle(title = "") {
        this.title = title;
    }

    setDescription(description = ""){
        this.description = description;
    }

    addTodo = (todoTitle, todoDesc, todoIsDone, todoPriority) => {
        this.todoList.push(new Todo(todoTitle, todoDesc, todoIsDone, todoPriority));
    }
}