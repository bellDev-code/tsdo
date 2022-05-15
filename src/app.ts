const todoForm: HTMLFormElement = document.querySelector("#todoForm")!
const addBtn: HTMLButtonElement = document.querySelector("#addBtn")!
const todoInput: HTMLInputElement = document.querySelector("#todoInput")!
const todoListBox: HTMLUListElement = document.querySelector("#todo__list")!
const titleInput: HTMLInputElement = document.querySelector("#titleInput")!
const allDelBtn: HTMLButtonElement = document.querySelector("#allDelBtn")!
const titleSortBtn: HTMLButtonElement = document.querySelector("#titleSort")!

// 전체삭제 버튼 
// 데이터 수정
// + 정렬 가능하면 해보기 <정렬버튼을 title 기준 오름차순 내림차순, id별로 오름차순 내림차순

// 검색기능, 페이지네이션

function createTodo(item: TodoItem, container: HTMLUListElement) {
  const todoElem = document.createElement('li')
  const titleDiv = document.createElement('div')
  const contentsDiv = document.createElement('div')
  const deleteBtn = document.createElement('button')
  const convertBtn = document.createElement('button')
  
  deleteBtn.innerText = '삭제'
  convertBtn.innerText = '수정'

  deleteBtn.addEventListener('click', function() {
    deleteTodo(todolist, item.id)
    todoElem.remove()
  })

  convertBtn.addEventListener('click', function() {
    const convertInputTitle = document.createElement('input')
    const convertInputContents = document.createElement('input')
    const changeBtn = document.createElement('button')
    
    convertInputTitle.classList.add('bg-gray-500')
    
    convertInputTitle.placeholder = '제목을 수정해주세요'
    convertInputContents.placeholder = '내용을 수정해주세요'
    changeBtn.innerText = '수정완료'

    todoElem.appendChild(convertInputTitle)
    todoElem.appendChild(convertInputContents)
    todoElem.appendChild(changeBtn)

    changeBtn.addEventListener('click', function() {
      onClickChange(item, convertInputTitle.value, convertInputContents.value, (item) => {
        titleDiv.innerText = item.title
        contentsDiv.innerText = item.contents
      })

      // onClickChange2(item, convertInputTitle.value, convertInputContents.value)({key: 'title', element: titleDiv}, {key:'contents', element: contentsDiv},)
    })
  })
  
  container.appendChild(todoElem)
  todoElem.appendChild(titleDiv)
  todoElem.appendChild(contentsDiv)
  todoElem.appendChild(deleteBtn)
  todoElem.appendChild(convertBtn)

  titleDiv.style.borderBottom = '1px solid black'

  titleDiv.innerHTML = '제목:' + item.title
  contentsDiv.innerHTML = '내용:' + item.contents
}



function onClickChange(item: TodoItem, title: string, contents: string, cb: (item: TodoItem) => void) {
  const todoItem = updateTodo(todolist, item.id, title, contents, new Date())

  return cb(todoItem)
}

function onClickChange2(item: TodoItem, title: string, contents: string) {
  const todoItem = updateTodo(todolist, item.id, title, contents, new Date())

  return function(...elems: {
    key: keyof TodoItem
    element:HTMLElement}[]) {
    elems.forEach((elem) => {
      const data = todoItem[elem.key];

      if (typeof data === 'string') {
        elem.element.innerText = data
      }
    })
  }
}

addBtn.addEventListener('click', function(e) {
  const todo = addTodo(todolist, titleInput.value, todoInput.value, new Date())
  createTodo(todo, todoListBox)
})

todoInput.addEventListener('keypress', (e) =>{
  if(e.key === 'Enter'){
    e.preventDefault()

    const todo = addTodo(todolist, titleInput.value, todoInput.value, new Date())
    const todoElem = document.createElement('li')
    const titleDiv = document.createElement('div')
    const contentsDiv = document.createElement('div')
    const deleteBtn = document.createElement('button')

    deleteBtn.innerText = '삭제'

    deleteBtn.addEventListener('click', function() {
    deleteTodo(todolist, todo.id)

    todoElem.remove()
    })

    todoListBox.appendChild(todoElem)
    todoElem.appendChild(titleDiv)
    todoElem.appendChild(contentsDiv)
    todoElem.appendChild(deleteBtn)

    titleDiv.style.borderBottom = '1px solid black'

    titleDiv.innerHTML = '제목:' + titleInput.value
    contentsDiv.innerHTML = '내용:' + todoInput.value
  }
})

allDelBtn.addEventListener('click', function() {
  todoListBox.remove()
})


titleSortBtn.addEventListener('click', function(e) {
  e.preventDefault()

  const sortItems = todolist.sort((a, b) => a.title.localeCompare(b.title))
  const prevItems = todoListBox.querySelectorAll("li")

  for (let i = 0; i < prevItems.length; i++) {
    prevItems.item(i).remove()
  }

  for (let i = 0; i < sortItems.length; i++) {
    createTodo(sortItems[i], todoListBox)
  }
})
