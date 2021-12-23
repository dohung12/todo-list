import { todoList } from ".";
import { addItem, addIcon } from "./displayControl";
import {
  addToLocalStorage,
  removeFromLocalStorage,
} from "./localStorageControl";

function createSubmitBtn(task) {
  const btn = document.createElement("button");
  btn.setAttribute("class", `btn submit-btn ${task}-btn`);
  btn.setAttribute("type", "submit");
  btn.textContent = "Add";
  return btn;
}
function createSelectOption(value, parentElement) {
  const option = document.createElement("option");
  option.setAttribute("value", value);
  option.textContent = value;

  parentElement.add(option);
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
  items.forEach((item) => {
    select.appendChild(createOption(item));
  });
  form.appendChild(label);
  form.appendChild(select);
}
function addNewProjectHandler(e) {
  e.preventDefault();

  const input = document.querySelector("#add-project");
  const project = document.querySelector("#project");
  const sort = document.querySelector("#sort");
  const removeProject = document.querySelector("#remove-project");

  const { value } = input;
  input.value = "";

  if (value) {
    addToLocalStorage(value, value, "projectList");
    createSelectOption(value, project);
    createSelectOption(value, sort);
    createSelectOption(value, removeProject);
  }
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
function createTodoInput() {
  const fieldset = document.createElement("fieldset");

  addInput("text", "task", fieldset);
  addInput("date", "due", fieldset);
  addOptionTypeInput("priority", ["low", "normal", "high"], fieldset);
  addOptionTypeInput("project", ["personal", "work"], fieldset);

  return fieldset;
}
function removeSelectOption(value, parentElement) {
  const options = parentElement.querySelectorAll("option");

  options.forEach((item) => {
    if (item.value === value) {
      parentElement.removeChild(item);
    }
  });
}
function removeProjectClickHandler(e) {
  e.preventDefault();

  const project = document.querySelector("#project");
  const sort = document.querySelector("#sort");
  const removeProject = document.querySelector("#remove-project");

  const [value] = removeProject.value;

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

export { createForm, createSelectOption };
