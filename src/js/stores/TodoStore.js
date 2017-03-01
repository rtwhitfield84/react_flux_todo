import { EventEmitter } from "events";

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [
		{
			id: 123234224,
			text: "Learn React",
			complete: false
		},
		{
			id: 3422323242,
			text: "Learn Flux",
			complete: false
		},
		];
	}

	getAll() {
		return this.todos;
	}
}

const todoStore = new TodoStore;

export default todoStore;