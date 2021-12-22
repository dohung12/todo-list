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

  const name = document.createElement("h4");
  name.textContent = todo._name;
  name.className = "name";

  const description = document.createElement("p");
  description.textContent = todo._description;
  description.className = "description";

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
    switchPriority(e, todo);
  });
  // del btn
  const delBtn = document.createElement("button");
  delBtn.textContent = "del";
  delBtn.addEventListener("click", (e) => {
    delItem(e, todo);
  });
  //  edit btn
  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.addEventListener("click", (e) => {
    editItem(e, todo);
  });

  item.appendChild(name);
  item.appendChild(description);
  item.appendChild(due);
  item.appendChild(project);
  item.appendChild(priority);
  item.appendChild(delBtn);
  item.appendChild(editBtn);
  return item;
}

function setEditDetails(editFlagVal, editIDVal, btnText) {
  const btn = document.querySelector(".todo-input-btn");
  editFlag = editFlagVal;
  editID = editIDVal;
  btn.textContent = btnText;
}

function addItem(e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const id = new Date().getTime().toString();
  if (name !== "" && !editFlag) {
    // * ADD MODE
    let props = [id];
    const fields = ["name", "description", "due", "priority", "project"];
    for (let field of fields) {
      props.push(document.querySelector(`#${field}`).value);
    }

    const todo = new Todo(
      props[0],
      props[1],
      props[2],
      props[3],
      props[4],
      props[5]
    );
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

    const props = ["name", "description", "due", "priority", "project"];

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
  for (let element of ["name", "description", "due", "project", "priority"]) {
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

  if (parentElement.contains(container)) {
    container.innerHTML = "";

    for (let todo of todoList) {
      const item = createTodoDisplay(todo);
      container.appendChild(item);
    }
  } else {
    const container = document.createElement("div");
    container.className = "todo-container";

    for (let todo of todoList) {
      const item = createTodoDisplay(todo);
      container.appendChild(item);
    }

    parentElement.appendChild(container);
  }
}

function displayLocalTodoList() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach((item) => todoList.push(item.todo));
  }

  const content = document.querySelector("#content");
  displayTodoList(todoList, content);
}

export { displayTodoList, addItem, displayLocalTodoList };
