console.log("I'm in");
import { createForm } from "./form";
import { createSort } from "./sort";
import { displayLocalTodoList } from "./displayControl";

let todoList = [];

const content = document.querySelector("#content");
const form = createForm();

content.appendChild(form);

const sort = createSort();
content.appendChild(sort);

document.addEventListener("DOMContentLoaded", displayLocalTodoList);

export { todoList };
