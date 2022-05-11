const todolist: TodoItem[] = [];

function addTodo(todolist: TodoItem[], title: string, contents: string, createdAt: Date) {
  const item = {id: todolist.length + 1, title: title, contents: contents, createdAt: createdAt }

  todolist.push(item)

  return item
}

function deleteTodo(todolist: TodoItem[], id: number) {
    let result;
    for (let i = 0; i < todolist.length; i++) {
        if(todolist[i].id === id) {
            result = i
        }
    }
    if (result) todolist.splice(result, 1)
}

function chanageTodo(todolist: TodoItem[], title: string, contents: string, changedAt: Date) {
    const changeItem = {id: todolist.length, title: title, contents: contents, changedAt: changedAt}

    todolist.push(changeItem)

    return changeItem
}