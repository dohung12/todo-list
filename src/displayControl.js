import { todoList } from "./index";
import {
  getLocalStorage,
  addToLocalStorage,
  removeFromLocalStorage,
  editLocalStorage,
} from "./localStorageControl";
import { Todo } from "./todo-object";
import { createSort } from "./sort";
import { createSelectOption } from "./form";
let editFlag = false;
let editID = "";

// * CREATE HEADER
function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  addIcon(header, "fas fa-tasks");
  const logo = document.createElement("h1");
  logo.textContent = "Todo List";
  header.appendChild(logo);

  return header;
}

// * CREATE TODO LIST DISPLAY ELEMENT
function createDisplayElement() {
  const div = document.createElement("div");
  div.className = "display-todo";

  const miscBar = document.createElement("div");
  miscBar.className = "misc-bar";

  const clearAllBtn = createClearAllBtn();
  miscBar.appendChild(clearAllBtn);

  const sort = createSort();
  miscBar.appendChild(sort);
  div.appendChild(miscBar);

  const container = document.createElement("div");
  container.className = "todo-container";
  div.appendChild(container);

  return div;
}

function createClearAllBtn() {
  const clearAllBtn = document.createElement("button");
  clearAllBtn.setAttribute("class", "btn clear-all-btn");
  clearAllBtn.addEventListener("click", clearAllTodo);
  clearAllBtn.textContent = "Remove All";

  return clearAllBtn;
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

// * DISPLAY TODOLIST
function displayTodoList(todoList) {
  const container = document.querySelector(".todo-container");

  const todos = container.querySelectorAll(".todo");
  todos.forEach((item) => {
    container.removeChild(item);
  });

  for (let todo of todoList) {
    const item = createDisplayForTodo(todo);
    container.appendChild(item);
  }
}

// * SET DISPLAY FOR A SINGLE TODO
function createDisplayForTodo(todo) {
  const item = document.createElement("div");
  item.className = "todo";
  item.setAttribute("data-id", todo.id);

  const task = document.createElement("p");
  task.textContent = todo._task;
  task.className = "task";

  const due = document.createElement("p");
  due.textContent = todo._due;
  due.className = "due";

  const project = document.createElement("p");
  project.textContent = todo._project;
  project.className = "project";

  const priority = document.createElement("button");
  priority.textContent = todo._priority;
  priority.className = "priority";
  priority.addEventListener("click", (e) => {
    togglePriority(e, todo);
  });

  const btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";
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

  btnContainer.appendChild(delBtn);
  btnContainer.appendChild(editBtn);

  others.appendChild(due);
  others.appendChild(project);
  others.appendChild(btnContainer);

  item.appendChild(task);
  item.appendChild(priority);
  item.appendChild(others);
  return item;
}

// ADD FONT AWESOME ICON TO ELEMENT
function addIcon(parentElement, iconName) {
  const icon = document.createElement("i");
  icon.setAttribute("class", iconName);
  parentElement.appendChild(icon);
}

// TOGGLE DISPLAY TODO FUNCTION
function addItem(e) {
  e.preventDefault();

  const task = document.querySelector("#task").value;
  const id = new Date().getTime().toString();
  if (task !== "" && !editFlag) {
    // * ADD MODE
    let props = [id];
    const fields = ["task", "due", "priority", "project"];
    for (let field of fields) {
      props.push(document.querySelector(`#${field}`).value);
    }

    const todo = new Todo(props[0], props[1], props[2], props[3], props[4]);
    todoList.push(todo);
    e.currentTarget.reset();

    // add item to local storage
    addToLocalStorage(id, todo, "todoList");
    // display item

    displayTodoList(todoList);
  } else if (task !== "" && editFlag) {
    // * EDIT MODE

    // get edit obj by the ID
    const todo = todoList.filter((item) => (item.id = editID))[0];
    const todoDisplay = document.querySelector(`[data-id="${editID}" ]`);

    const props = ["task", "due", "priority", "project"];

    for (let prop of props) {
      const value = document.querySelector(`#${prop}`).value;

      todo[prop] = value;
      todoDisplay.querySelector(`.${prop}`).textContent = value;
    }
    editLocalStorage(todo.id, todo, "todoList");
    // reset form back to input mode
    setEditDetails(false, "", "create");
    e.currentTarget.reset();
  }
}

function delItem(e, todo) {
  const item = e.currentTarget.parentElement.parentElement.parentElement;
  item.parentElement.removeChild(item);

  const index = todoList.indexOf(todo);
  todoList.splice(index, 1);

  removeFromLocalStorage(todo.id, "todoList");
}

function editItem(e, todo) {
  setEditDetails(true, todo.id, "edit");

  // if form is hidden, show form
  const form = document.querySelector("form");
  if (form.classList.contains("show-form")) {
    form.classList.remove("show-form");
  }
  // set form value
  console.log(e.currentTarget.parentElement.parentElement.parentElement);
  const item = e.currentTarget.parentElement.parentElement.parentElement;
  for (let element of ["task", "due", "project", "priority"]) {
    const val = item.querySelector(`.${element}`);
    document.querySelector(`#${element}`).value = val.innerHTML;
  }
}

// CONTROL EDIT MODE
function setEditDetails(editFlagVal, editIDVal, btnText) {
  const btn = document.querySelector(".todo-input-btn");
  editFlag = editFlagVal;
  editID = editIDVal;
  btn.textContent = btnText;
}

// TOGGLE PRIORITY DISPLAY
function togglePriority(e, todo) {
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

  editLocalStorage(todo.id, todo, "todoList");
}

// * DISPLAY TODO LIST STORE IN LOCALSTORAGE
function displayLocalTodoList() {
  const todos = getLocalStorage("todoList");

  if (todos.length > 0) {
    todos.forEach((item) => {
      const oldItem = item.item;
      const newItem = new Todo(
        oldItem.id,
        oldItem._task,
        oldItem._due,
        oldItem._priority,
        oldItem._project
      );
      todoList.push(newItem);
    });
  }

  displayTodoList(todoList);

  const projects = getLocalStorage("projectList");
  if (projects.length > 0) {
    projects.forEach((item) => {
      const oldProject = item.item;
      const project = document.querySelector("#project");
      const sort = document.querySelector("#sort");
      const removeProject = document.querySelector("#remove-project");
      createSelectOption(oldProject, project);
      createSelectOption(oldProject, sort);
      createSelectOption(oldProject, removeProject);
    });
  }
}

export {
  displayTodoList,
  addItem,
  displayLocalTodoList,
  createDisplayElement,
  createHeader,
  addIcon,
};
