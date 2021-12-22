console.log("I'm in");
import { createForm } from "./form";
import { Todo } from "./todo-object";
import { displayTodo } from "./displayControl";

let todoList = [];

const content = document.querySelector("#content");
const form = createForm();

content.appendChild(form);

export { todoList };
