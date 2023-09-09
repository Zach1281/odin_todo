export default class Todo {
    constructor(title = "", description = "", priority = "", isDone = false) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.isDone = isDone;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getPriority() {
        return this.priority;
    }

    getIsDone() {
        return this.isDone;
    }

    setIsDone(isDone) {
        this.isDone = isDone;
    }

    setTitle(title){
        this.title = title;
    }

    setDescription(description){
        this.description = description;
    }

    setPriority(priority){
        this.priority = priority;
    }
}