import { todoList } from "./index";
import {
  getLocalStorage,
  addToLocalStorage,
  removeFromLocalStorage,
  editLocalStorage,
} from "./localStorageControl";
import { Todo } from "./todo-object";
let editFlag = false;
let editID = "";

function createTodoDisplay(todo) {
  const item = document.createElement("div");
  item.className = "todo";
  item.setAttribute("data-id", todo.id);

  const name = document.createElement("p");
  name.textContent = "task";
  name.className = "name";

  const due = document.createElement("p");
  due.textContent = todo._due;
  due.className = "due";

  const project = document.createElement("p");
  project.textContent = todo._project;
  project.className = "project";

  const btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";

  const priority = document.createElement("button");
  priority.textContent = todo._priority;
  priority.className = "priority";
  priority.addEventListener("click", (e) => {
    switchPriority(e, todo);
  });
  // del btn
  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", "btn del-btn");
  addIcon(delBtn, "fas fa-trash");
  delBtn.addEventListener("click", (e) => {
    delItem(e, todo);
  });
  //  edit btn
  const editBtn = document.createElement("button");
  editBtn.setAttribute("class", "btn edit-btn");
  addIcon(editBtn, "fas fa-edit");
  editBtn.addEventListener("click", (e) => {
    editItem(e, todo);
  });
  const others = document.createElement("div");
  others.className = "others-info";

  item.appendChild(name);
  item.appendChild(priority);

  others.appendChild(due);
  others.appendChild(project);

  btnContainer.appendChild(delBtn);
  btnContainer.appendChild(editBtn);
  others.appendChild(btnContainer);

  item.appendChild(others);
  return item;
}

function setEditDetails(editFlagVal, editIDVal, btnText) {
  const btn = document.querySelector(".todo-input-btn");
  editFlag = editFlagVal;
  editID = editIDVal;
  btn.textContent = btnText;
}

function addIcon(parentElement, iconName) {
  const icon = document.createElement("i");
  icon.setAttribute("class", iconName);
  parentElement.appendChild(icon);
}

function addItem(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const id = new Date().getTime().toString();
  if (name !== "" && !editFlag) {
    // * ADD MODE
    let props = [id];
    const fields = ["name", "due", "priority", "project"];
    for (let field of fields) {
      props.push(document.querySelector(`#${field}`).value);
    }

    const todo = new Todo(props[0], props[1], props[2], props[3], props[4]);
    todoList.push(todo);
    e.currentTarget.reset();

    // add item to local storage
    addToLocalStorage(id, todo);
    // display item
    const content = document.querySelector("#content");
    displayTodoList(todoList, content);
  } else if (name !== "" && editFlag) {
    // * EDIT MODE

    // get edit obj by the ID
    const todo = todoList.filter((item) => (item.id = editID))[0];
    const todoDisplay = document.querySelector(`[data-id="${editID}" ]`);

    const props = ["name", "due", "priority", "project"];

    for (let prop of props) {
      const value = document.querySelector(`#${prop}`).value;

      todo[prop] = value;
      todoDisplay.querySelector(`.${prop}`).textContent = value;
    }
    editLocalStorage(todo.id, todo);
    // reset form back to input mode
    setEditDetails(false, "", "add");
    e.currentTarget.reset();
  }
}

function delItem(e, todo) {
  const item = e.currentTarget.parentElement;
  item.parentElement.removeChild(item);

  const index = todoList.indexOf(todo);
  todoList.splice(index, 1);

  removeFromLocalStorage(todo.id);
}

function editItem(e, todo) {
  setEditDetails(true, todo.id, "edit");
  // set form value
  const item = e.currentTarget.parentElement;
  for (let element of ["name", "due", "project", "priority"]) {
    const val = item.querySelector(`.${element}`);
    document.querySelector(`#${element}`).value = val.innerHTML;
  }
}

function switchPriority(e, todo) {
  const priority = e.currentTarget;
  if (todo._priority === "low") {
    todo.priority = "normal";
    priority.textContent = todo._priority;
  } else if (todo._priority === "normal") {
    todo.priority = "high";
    priority.textContent = todo._priority;
  } else if (todo._priority === "high") {
    todo.priority = "low";
    priority.textContent = todo._priority;
  }
}

function displayTodoList(todoList, parentElement) {
  const container = document.querySelector(".todo-container");

  const todos = container.querySelectorAll(".todo");
  todos.forEach((item) => {
    container.removeChild(item);
  });

  for (let todo of todoList) {
    const item = createTodoDisplay(todo);
    container.appendChild(item);
  }
}

function createContainer() {
  const container = document.createElement("div");
  container.className = "todo-container";

  return container;
}

function createClearAllBtn() {
  const clearAllBtn = document.createElement("button");
  clearAllBtn.setAttribute("class", "btn clear-all-btn");
  clearAllBtn.addEventListener("click", clearAllTodo);
  clearAllBtn.textContent = "Remove All";

  return clearAllBtn;
}

function displayLocalTodoList() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach((item) => {
      const oldItem = item.todo;
      const newItem = new Todo(
        oldItem.id,
        oldItem._name,
        oldItem._due,
        oldItem._priority,
        oldItem._project
      );
      todoList.push(newItem);
    });
  }

  const content = document.querySelector("#content");
  displayTodoList(todoList, content);
}

function clearAllTodo() {
  const todos = document.querySelectorAll(".todo");
  const container = document.querySelector(".todo-container");
  if (todos.length > 0) {
    todos.forEach((todo) => {
      container.removeChild(todo);
    });
  }
  while (todoList.length > 0) {
    todoList.splice(0, 1);
  }
  localStorage.removeItem("todoList");
}

export {
  displayTodoList,
  addItem,
  displayLocalTodoList,
  createContainer,
  addIcon,
  createClearAllBtn,
};
