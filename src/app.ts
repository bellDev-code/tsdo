const todoForm: HTMLFormElement | null = document.querySelector("#todoForm")
const addBtn: HTMLButtonElement | null = document.querySelector("#addBtn")
const todoInput: HTMLInputElement | null = document.querySelector("#todoInput")


if (addBtn) {
  // addBtn.addEventListener('click', function(this, ev) {
  //   addTodo(todolist, "oneTitle", "boxing", new Date())
  // })

  addBtn.addEventListener('click', function() {
    console.log("Check")
    addTodo(todolist, "oneTitle", "boxing", new Date())
  })
}

if(todoInput) {
  todoInput.addEventListener('keypress', (e) =>{
    if( e.key === 'Enter' ){
      todoInput.value ='';
    }
})
}


// addTodo(todolist, "oneTitle", "boxing", new Date()