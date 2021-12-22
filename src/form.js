import { todoList } from "./index";
import { Todo } from "./todo-object";
import { displayTodoList } from "./displayControl";

let editFlag = false;
let editID = "";
function createForm() {
  const form = document.createElement("form");
  form.className = "todo-input";

  const toDoFieldset = createTodoInput();

  const newProjectFieldset = createAddProject();
  toDoFieldset.appendChild(newProjectFieldset);

  form.appendChild(toDoFieldset);

  const btn = createSubmitBtn("todo-input");
  form.appendChild(btn);

  form.addEventListener("submit", addItem);
  return form;
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
    let props = [id];
    const fields = ["name", "description", "due-date", "priority", "project"];
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

    const content = document.querySelector("#content");
    displayTodoList(todoList, content);
  } else if (name !== "" && editFlag) {
    // get edit obj by the ID
    const todo = todoList.filter((item) => (item.id = editID))[0];
    const todoDisplay = document.querySelector(`[data-id="${editID}" ]`);

    const props = ["name", "description", "due-date", "priority", "project"];

    for (let prop of props) {
      const value = document.querySelector(`#${prop}`).value;

      todo[prop] = value;
      todoDisplay.querySelector(`.${prop}`).textContent = value;
    }
    // reset form back to input mode
    setEditDetails(false, "", "add");
    e.currentTarget.reset();
  }
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
  const project = ["personal", "work"];
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Create your Todo";
  fieldset.appendChild(legend);

  addInput("text", "name", fieldset);
  addInput("text", "description", fieldset);
  addInput("date", "due-date", fieldset);
  addOptionTypeInput("priority", ["low", "normal", "high"], fieldset);
  addOptionTypeInput("project", project, fieldset);

  return fieldset;
}

function addInput(type, name, form) {
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

function createSubmitBtn(name) {
  const btn = document.createElement("button");
  btn.setAttribute("class", `btn submit-btn ${name}-btn`);
  btn.setAttribute("type", "submit");
  btn.textContent = "Add";
  return btn;
}

export { createForm, setEditDetails };
