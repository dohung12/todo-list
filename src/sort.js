import { displayTodoList } from "./displayControl";
import { todoList } from "./index";

function createSort() {
  const fieldset = document.createElement("fieldset");
  const label = document.createElement("label");
  label.textContent = "Sort project";
  const sort = document.createElement("select");
  sort.setAttribute("id", "sort");

  createSortOption(sort);

  const btn = document.createElement("button");
  btn.setAttribute("type", "submit");
  btn.textContent = "Sort";
  btn.addEventListener("click", sortClickHandler);

  fieldset.appendChild(label);
  fieldset.appendChild(sort);
  fieldset.appendChild(btn);

  return fieldset;
}

function sortClickHandler(e) {
  e.preventDefault();
  const sort = document.querySelector("#sort");
  const content = document.querySelector("#content");
  const project = sort.value;
  if (project !== "all") {
    let newList = todoList.filter((todo) => todo._project === project);
    displayTodoList(newList, content);
  } else {
    displayTodoList(todoList, content);
  }
}

function createSortOption(sort) {
  const allOption = document.createElement("option");
  allOption.setAttribute("value", "all");
  allOption.textContent = "all";
  sort.add(allOption);

  const project = document.querySelector("#project");
  const options = project.querySelectorAll("option");

  for (let option of options) {
    const newOption = document.importNode(option, true);
    sort.appendChild(newOption);
  }
}

export { createSort };
