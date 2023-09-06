export default class Todo {
    constructor(title = "", description = "", priority = "", isDone = false) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.isDone = isDone;
    }

    get title() {
        return this.title;
    }

    get description() {
        return this.description;
    }

    get priority() {
        return this.priority;
    }

    get isDone() {
        return this.isDone;
    }

    set isDone(isDone = true) {
        this.isDone = isDone;
    }
}