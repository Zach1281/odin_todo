import todo from './todo';

export default class Project {
    constructor(title = "", description = ""){
        this.title = title;
        this.description = description
        this.todoList = [];
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

    addTodo = (todoTitle) => {
        this.todoList.push(todo(todoTitle));
    }
}