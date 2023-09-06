import todo from './todo';

export default class Project {
    constructor(title = "", description = ""){
        this.title = title;
        this.description = description;
        this.todos = [];
    }
    
    get title() {
        return this.title;
    }

    get description() {
        return this.description;
    }

    set title(title = "") {
        this.title = title;
    }

    set description(description = ""){
        this.description = description;
    }

    addTodo = (todo) => {
        this.todos.push(todo);
    }
}