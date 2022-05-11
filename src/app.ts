const todoForm: HTMLFormElement = document.querySelector("#todoForm")!
const addBtn: HTMLButtonElement = document.querySelector("#addBtn")!
const todoInput: HTMLInputElement = document.querySelector("#todoInput")!
const todoListBox: HTMLUListElement = document.querySelector("#todo__list")!
const titleInput: HTMLInputElement = document.querySelector("#titleInput")!
const allDelBtn: HTMLButtonElement = document.querySelector("#allDelBtn")!

// 전체삭제 버튼 
// 데이터 수정
// + 정렬 가능하면 해보기 <정렬버튼을 title 기준 오름차순 내림차순, id별로 오름차순 내림차순

addBtn.addEventListener('click', function(e) {
  const todo = addTodo(todolist, titleInput.value, todoInput.value, new Date())
  const todoElem = document.createElement('li')
  const titleDiv = document.createElement('div')
  const contentsDiv = document.createElement('div')
  const deleteBtn = document.createElement('button')
  const convertBtn = document.createElement('button')
  
  deleteBtn.innerText = '삭제'
  convertBtn.innerText = '수정'

  deleteBtn.addEventListener('click', function() {
    deleteTodo(todolist, todo.id)

    todoElem.remove()
  })

  convertBtn.addEventListener('click', function() {
    const convertInputTitle = document.createElement('input')
    const convertInputContents = document.createElement('input')
    const changeBtn = document.createElement('button')
    
    convertInputTitle.placeholder = '제목을 수정해주세요'
    convertInputContents.placeholder = '내용을 수정해주세요'
    changeBtn.innerText = '수정완료'

    todoElem.appendChild(convertInputTitle)
    todoElem.appendChild(convertInputContents)
    todoElem.appendChild(changeBtn)

    // changeBtn.addEventListener('click', function() {
    //   chanageTodo(todolist, )
    // })
  })
  
  todoListBox.appendChild(todoElem)
  todoElem.appendChild(titleDiv)
  todoElem.appendChild(contentsDiv)
  todoElem.appendChild(deleteBtn)
  todoElem.appendChild(convertBtn)

  titleDiv.style.borderBottom = '1px solid black'

  titleDiv.innerHTML = '제목:' + titleInput.value
  contentsDiv.innerHTML = '내용:' + todoInput.value

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
