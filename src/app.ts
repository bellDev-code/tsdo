console.log("hello world~!")

const addBtn: HTMLButtonElement | null = document.querySelector("#addBtn")

console.log(addBtn)

if (addBtn) {
  // addBtn.addEventListener('click', function(this, ev) {
  //   addTodo(todolist, "oneTitle", "boxing", new Date())
  // })

  addBtn.addEventListener('click', function() {
    console.log("Check")
    addTodo(todolist, "oneTitle", "boxing", new Date())
  })
}


// addTodo(todolist, "oneTitle", "boxing", new Date()