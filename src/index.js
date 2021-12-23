import { createForm } from "./form";

import {
  displayLocalTodoList,
  createDisplayElement,
  createHeader,
} from "./displayControl";

const content = document.querySelector("#content");
let todoList = [];

const header = createHeader();
document.body.insertBefore(header, document.body.firstChild);

const form = createForm();
content.appendChild(form);

const div = createDisplayElement();
content.appendChild(div);

document.addEventListener("DOMContentLoaded", displayLocalTodoList);

export { todoList };
