import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

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
	createTodo(text) {
		const id = Date.now();
		this.todos.push({
			id,
			text,
			complete: false,
		});

		this.emit("change");
	}

	getAll() {
		return this.todos;
	}

	handleActions(action) {
		console.log("TodoStore received action", action);
		switch(action.type) {
			case "CREATE_TODO": {
				this.createTodo(action.text);
			};

			case "RECIEVE_TODOS": {
				this.todos = action.todos;
				this.emit("change");	
			};
		}
	}
}

const todoStore = new TodoStore;
window.dispatcher = dispatcher;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;