import { todoList } from "./index";
import { Todo } from "./todo-object";
import { displayTodoList } from "./displayControl";
function createForm() {
  const form = document.createElement("form");
  form.className = "todo-input";

  const toDoFieldset = createTodoInputFieldset();

  const newProjectFieldset = createAddProjectFieldSet();
  toDoFieldset.appendChild(newProjectFieldset);

  form.appendChild(toDoFieldset);

  const btn = createSubmitBtn("todo-input");
  form.appendChild(btn);

  form.addEventListener("submit", submitHandler);
  return form;
}

function submitHandler(e) {
  e.preventDefault();

  let props = [];

  const fields = ["name", "description", "due-date", "priority", "project"];
  for (let field of fields) {
    props.push(document.querySelector(`#${field}`).value);
  }

  const todo = new Todo(props[0], props[1], props[2], props[3], props[4]);
  todoList.push(todo);
  e.currentTarget.reset();

  const content = document.querySelector("#content");
  displayTodoList(todoList, content);
}

function createAddProjectFieldSet() {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Add new project";
  addInputField("text", "add-project", fieldset);
  const btn = createSubmitBtn("add-project");
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const input = document.querySelector("#add-project");
    const project = document.querySelector("#project");

    const value = input.value;
    input.value = "";

    if (value) {
      const option = document.createElement("option");
      option.setAttribute("value", value);
      option.textContent = value;
      project.add(option);
    }
  });
  fieldset.appendChild(btn);
  return fieldset;
}

function createTodoInputFieldset() {
  const project = ["personal", "work"];
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Create your Todo";
  fieldset.appendChild(legend);

  addInputField("text", "name", fieldset);
  addInputField("text", "description", fieldset);
  addInputField("date", "due-date", fieldset);
  addOptionField("priority", ["low", "normal", "high"], fieldset);
  addOptionField("project", project, fieldset);

  return fieldset;
}

function addInputField(type, name, form) {
  const input = document.createElement("input");
  const label = document.createElement("label");

  label.setAttribute("for", name);
  label.textContent = `${name.replace("-", " ")}: `;

  input.setAttribute("name", name);
  input.setAttribute("id", name);
  input.setAttribute("type", type);

  form.appendChild(label);
  form.appendChild(input);
}

function addOptionField(id, items, form) {
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

function createSubmitBtn(name) {
  const btn = document.createElement("button");
  btn.setAttribute("class", `btn submit-btn ${name}-btn`);
  btn.setAttribute("type", "submit");
  btn.textContent = "Add";
  return btn;
}
export { createForm };
