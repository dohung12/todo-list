function getLocalStorage(listName) {
  return localStorage.getItem(listName)
    ? JSON.parse(localStorage.getItem(listName))
    : [];
}

function addToLocalStorage(id, item, listName) {
  const val = { id, item };
  const list = getLocalStorage(listName);
  list.push(val);
  localStorage.setItem(listName, JSON.stringify(list));
}

function removeFromLocalStorage(id, listName) {
  let list = getLocalStorage(listName);
  list = list.filter((item) => item.id !== id);
  localStorage.setItem(listName, JSON.stringify(list));
}

function editLocalStorage(id, todo, listName) {
  let list = getLocalStorage(listName);
  list = list.map((item) => {
    if (item.id === id) {
      // eslint-disable-next-line no-param-reassign
      item.item = todo;
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
