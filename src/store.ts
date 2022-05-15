const todolist: TodoItem[] = [];

// todo 더하기
function addTodo(todolist: TodoItem[], title: string, contents: string, createdAt: Date) {
  const item = {id: todolist.length + 1, title: title, contents: contents, createdAt: createdAt, updatedAt: createdAt }

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

// 수정 버튼
const updateTodo = (todolist: TodoItem[], id: number, title: string, contents: string, updatedAt: Date) => {
    let index = -1;
    
    
    for (let i = 0; i < todolist.length; i++) {
        if(todolist[i].id === id) {
            index = i
        }
    }

    if (index > -1) {
        todolist[index].title = title
        todolist[index].contents = contents
        todolist[index].updatedAt = updatedAt
    }

    return todolist[index]
}


