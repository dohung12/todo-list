import { todoList } from "./index";
import { setEditDetails } from "./form";

function displayTodo(todo) {
  const item = document.createElement("div");
  item.className = "todo";
  item.setAttribute("data-id", todo.id);

  const name = document.createElement("h4");
  name.textContent = todo._name;
  name.className = "name";

  const description = document.createElement("p");
  description.textContent = todo._description;
  description.className = "description";

  const dueDate = document.createElement("p");
  dueDate.textContent = todo._dueDate;
  dueDate.className = "due-date";

  const project = document.createElement("p");
  project.textContent = todo._project;
  project.className = "project";

  const priority = document.createElement("button");
  priority.textContent = todo._priority;
  priority.className = "priority";
  priority.addEventListener("click", (e) => {
    priorityBtnHandler(e, todo);
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "del";
  delBtn.addEventListener("click", (e) => {
    const item = e.currentTarget.parentElement;
    item.parentElement.removeChild(item);

    const index = todoList.indexOf(todo);
    todoList.splice(index, 1);
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.addEventListener("click", (e) => {
    editBtnHandler(e, todo);
  });

  item.appendChild(name);
  item.appendChild(description);
  item.appendChild(dueDate);
  item.appendChild(project);
  item.appendChild(priority);
  item.appendChild(delBtn);
  item.appendChild(editBtn);
  return item;
}

function editBtnHandler(e, todo) {
  setEditDetails(true, todo.id, "edit");
  // set form value
  const item = e.currentTarget.parentElement;
  for (let element of [
    "name",
    "description",
    "due-date",
    "project",
    "priority",
  ]) {
    const val = item.querySelector(`.${element}`);
    document.querySelector(`#${element}`).value = val.innerHTML;
  }
}

function priorityBtnHandler(e, todo) {
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
      const item = displayTodo(todo);
      container.appendChild(item);
    }
  } else {
    const container = document.createElement("div");
    container.className = "todo-container";

    for (let todo of todoList) {
      const item = displayTodo(todo);
      container.appendChild(item);
    }

    parentElement.appendChild(container);
  }
}
export { displayTodo, displayTodoList };
