import { displayTodoList } from "./displayControl";
import { todoList } from "./index";

function sortClickHandler(e) {
  e.preventDefault();
  const sort = document.querySelector("#sort");

  const project = sort.value;
  if (project !== "all") {
    const newList = todoList.filter((todo) => todo._project === project);
    displayTodoList(newList);
  } else {
    displayTodoList(todoList);
  }
}

function createSortOption(sort) {
  const allOption = document.createElement("option");
  allOption.setAttribute("value", "all");
  allOption.textContent = "all";
  sort.add(allOption);

  const project = document.querySelector("#project");
  const options = project.querySelectorAll("option");

  options.forEach((option) => {
    const newOption = document.importNode(option, true);
    sort.appendChild(newOption);
  });
}

export default function createSort() {
  const div = document.createElement("div");
  div.className = "sort-container";
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

  div.appendChild(fieldset);
  return div;
}
