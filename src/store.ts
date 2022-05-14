const todolist: TodoItem[] = [];

// todo 더하기
function addTodo(todolist: TodoItem[], title: string, contents: string, createdAt: Date) {
  const item = {id: todolist.length + 1, title: title, contents: contents, createdAt: createdAt }

  todolist.push(item)

  return item
}

// todo 삭제
function deleteTodo(todolist: TodoItem[], id: number) {
    let result;
    for (let i = 0; i < todolist.length; i++) {
        if(todolist[i].id === id) {
            result = i
        }
    }
    if (result) todolist.splice(result, 1)
}

const updateTodo = (todolist: TodoItem[], id: number, title: string, contents: string, changedAt: Date) => {
    const newTodo = todolist.map((item) => item.id === id ? ({...item, title: title, contents: contents, changedAt: changedAt}) : item)

}