import { todoList } from ".";
import { addItem, addIcon } from "./displayControl";
import {
  addToLocalStorage,
  removeFromLocalStorage,
} from "./localStorageControl";

let project = ["personal", "work"];

function createForm() {
  const div = document.createElement("div");
  div.className = "form-container";

  const header = document.createElement("h2");
  header.textContent = "create your todo";
  addIcon(header, "fas fa-caret-square-down");

  div.appendChild(header);

  const form = document.createElement("form");
  form.className = "todo-input";

  const inputFieldSet = createTodoInput();
  inputFieldSet.className = "input-fieldset";

  const newProjectFieldset = createAddNewProject();
  form.appendChild(inputFieldSet);

  const removeProjectFieldSet = createRemoveProject();

  const btn = createSubmitBtn("todo-input");
  btn.textContent = "Create";
  form.appendChild(btn);

  form.addEventListener("submit", addItem);

  form.appendChild(newProjectFieldset);
  form.appendChild(removeProjectFieldSet);

  header.addEventListener("click", () => {
    form.classList.toggle("show-form");
  });
  div.appendChild(form);
  return div;
}

function createAddNewProject() {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("label");
  legend.textContent = "Add new project";
  addInput("text", "add-project", fieldset);
  const btn = createSubmitBtn("add-project");
  btn.addEventListener("click", (e) => {
    addNewProjectHandler(e);
  });
  fieldset.appendChild(btn);
  return fieldset;
}

function addNewProjectHandler(e) {
  e.preventDefault();

  const input = document.querySelector("#add-project");
  const project = document.querySelector("#project");
  const sort = document.querySelector("#sort");
  const removeProject = document.querySelector("#remove-project");

  const value = input.value;
  input.value = "";

  if (value) {
    addToLocalStorage(value, value, "projectList");
    createSelectOption(value, project);
    createSelectOption(value, sort);
    createSelectOption(value, removeProject);
  }
}

function createSelectOption(value, parentElement) {
  const option = document.createElement("option");
  option.setAttribute("value", value);
  option.textContent = value;

  parentElement.add(option);
}

function createRemoveProject() {
  // create remove project element
  const fieldset = document.createElement("fieldset");
  const label = document.createElement("label");
  label.textContent = "Remove project";
  const removeProject = document.createElement("select");
  removeProject.setAttribute("id", "remove-project");

  // create options

  const btn = document.createElement("button");
  btn.setAttribute("type", "submit");
  btn.textContent = "Remove";
  btn.addEventListener("click", removeProjectClickHandler);

  fieldset.appendChild(label);
  fieldset.appendChild(removeProject);
  fieldset.appendChild(btn);

  return fieldset;
}

function removeProjectClickHandler(e) {
  e.preventDefault();

  const project = document.querySelector("#project");
  const sort = document.querySelector("#sort");
  const removeProject = document.querySelector("#remove-project");

  const value = removeProject.value;

  const allowRemove = !todoList.some((todo) => todo._project === value);
  if (allowRemove) {
    // remove option from select
    removeSelectOption(value, removeProject);
    removeSelectOption(value, project);
    removeSelectOption(value, sort);
    // remove in local storage
    removeFromLocalStorage(value, "projectList");
  }
}

function removeSelectOption(value, parentElement) {
  const options = parentElement.querySelectorAll("option");

  options.forEach((item) => {
    if (item.value === value) {
      parentElement.removeChild(item);
    }
  });
}

function createTodoInput() {
  const fieldset = document.createElement("fieldset");

  addInput("text", "task", fieldset);
  addInput("date", "due", fieldset);
  addOptionTypeInput("priority", ["low", "normal", "high"], fieldset);
  addOptionTypeInput("project", project, fieldset);

  return fieldset;
}

function addInput(type, inputField, form) {
  const input = document.createElement("input");
  const label = document.createElement("label");

  label.textContent = inputField;
  label.setAttribute("for", inputField);

  input.setAttribute("name", inputField);
  input.setAttribute("id", inputField);
  input.setAttribute("type", type);

  form.appendChild(label);
  form.appendChild(input);
}

function addOptionTypeInput(id, items, form) {
  function createOption(value) {
    const option = document.createElement("option");
    option.setAttribute("value", value);
    option.textContent = value;

    return option;
  }
  const label = document.createElement("label");
  const select = document.createElement("select");

  label.setAttribute("for", id);
  label.textContent = `${id} :`;

  select.setAttribute("id", id);
  for (let item of items) {
    const option = createOption(item);
    select.appendChild(option);
  }

  form.appendChild(label);
  form.appendChild(select);
}

function createSubmitBtn(task) {
  const btn = document.createElement("button");
  btn.setAttribute("class", `btn submit-btn ${task}-btn`);
  btn.setAttribute("type", "submit");
  btn.textContent = "Add";
  return btn;
}

export { createForm, createSelectOption };
