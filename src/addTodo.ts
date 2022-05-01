function addTodo(todolist: TodoItem[], title: string, contents: string, createdAt: Date) {
    todolist.push({id: todolist.length + 1, title: title, contents: contents, createdAt: createdAt })
}