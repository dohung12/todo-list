import { addItem } from "./displayControl";

let project = ["personal", "work"];

function createForm() {
  const form = document.createElement("form");
  form.className = "todo-input";

  const inputFieldSet = createTodoInput();
  inputFieldSet.className = "input-fieldset";
  const newProjectFieldset = createAddProject();
  inputFieldSet.appendChild(newProjectFieldset);

  form.appendChild(inputFieldSet);

  const btn = createSubmitBtn("todo-input");
  form.appendChild(btn);

  form.addEventListener("submit", addItem);
  return form;
}

function createAddProject() {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("label");
  legend.textContent = "Add new project";
  addInput("text", "add-project", fieldset);
  const btn = createSubmitBtn("add-project");
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const input = document.querySelector("#add-project");
    const project = document.querySelector("#project");
    const sort = document.querySelector("#sort");

    const value = input.value;
    input.value = "";

    if (value) {
      function createOption(value) {
        const option = document.createElement("option");
        option.setAttribute("value", value);
        option.textContent = value;
        return option;
      }
      project.add(createOption(value));
      sort.add(createOption(value));
    }
  });
  fieldset.appendChild(btn);
  return fieldset;
}

function createTodoInput() {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Create your Todo";
  fieldset.appendChild(legend);

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

export { createForm };
