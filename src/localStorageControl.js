function getLocalStorage() {
  return localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];
}

function addToLocalStorage(id, todo) {
  const item = { id, todo };
  let todoList = getLocalStorage();
  todoList.push(item);
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function removeFromLocalStorage(id) {
  let todoList = getLocalStorage();
  todoList = todoList.filter((item) => item.id !== id);
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function editLocalStorage(id, todo) {
  let todoList = getLocalStorage();
  todoList = todoList.map((item) => {
    if (item.id === id) {
      item.todo = todo;
    }
    return item;
  });
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

export {
  addToLocalStorage,
  removeFromLocalStorage,
  editLocalStorage,
  getLocalStorage,
};
