export default class Todo {
    constructor(title = "", description = "", priority = "", isDone = false) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.isDone = isDone;
    }

    title() {
        return this.title;
    }

    description() {
        return this.description;
    }

    priority() {
        return this.priority;
    }

    isDone() {
        return this.isDone;
    }

    isDone(isDone = true) {
        this.isDone = isDone;
    }
}