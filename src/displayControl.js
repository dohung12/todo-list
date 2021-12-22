import { todoList } from "./index";

function displayTodo(todo) {
  const item = document.createElement("div");
  item.className = "todo";

  const name = document.createElement("h4");
  name.innerHTML = `<span>Title</span>: ${todo._name}`;

  const description = document.createElement("p");
  description.innerHTML = `<span>Desc</span>: ${todo._description}`;

  const dueDate = document.createElement("p");
  dueDate.innerHTML = `<span>Due</span>: ${todo._dueDate}`;

  const project = document.createElement("p");
  project.innerHTML = `<span>Project</span>: ${todo._project}`;

  const priority = document.createElement("button");
  priority.textContent = todo._priority;
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

  item.appendChild(name);
  item.appendChild(description);
  item.appendChild(dueDate);
  item.appendChild(project);
  item.appendChild(priority);
  item.appendChild(delBtn);
  return item;
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
