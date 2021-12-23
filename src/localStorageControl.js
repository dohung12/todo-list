function getLocalStorage(listName) {
  return localStorage.getItem(listName)
    ? JSON.parse(localStorage.getItem(listName))
    : [];
}

function addToLocalStorage(id, todo, listName) {
  const item = { id, todo };
  let todoList = getLocalStorage(listName);
  todoList.push(item);
  localStorage.setItem(listName, JSON.stringify(listName));
}

function removeFromLocalStorage(id, listName) {
  let list = getLocalStorage();
  list = list.filter((item) => item.id !== id);
  localStorage.setItem(listName, JSON.stringify(list));
}

function editLocalStorage(id, todo, listName) {
  let list = getLocalStorage();
  list = list.map((item) => {
    if (item.id === id) {
      item.todo = todo;
    }
    return item;
  });
  localStorage.setItem(listName, JSON.stringify(list));
}

export {
  addToLocalStorage,
  removeFromLocalStorage,
  editLocalStorage,
  getLocalStorage,
};
