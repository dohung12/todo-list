console.log("I'm in");
import { createForm } from "./form";
import { Todo } from "./todo-object";
import { createSort } from "./sort";

let todoList = [];

const content = document.querySelector("#content");
const form = createForm();

content.appendChild(form);

const sort = createSort();
content.appendChild(sort);
export { todoList };
