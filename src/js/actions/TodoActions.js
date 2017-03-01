import dispatcher from "../dispatcher";

export function createTodo(text) {
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}

export function reloadTodos(id) {
//what you would do with axios
//axios("http://someourl.com/someapiendpoint").then((data) => {
//DO SOMETHING AWESOME WITH RETURNED DATA})
//setting timeout on dispatch to mimic axios async call
dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        text: "Learn axios",
        complete: false
      },
      {
        id: 6262627272,
        text: "Learn More",
        complete: true
      },
    ]});
  }, 1000);
}