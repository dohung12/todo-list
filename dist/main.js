/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayControl.js":
/*!*******************************!*\
  !*** ./src/displayControl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodoList\": () => (/* binding */ displayTodoList),\n/* harmony export */   \"addItem\": () => (/* binding */ addItem),\n/* harmony export */   \"displayLocalTodoList\": () => (/* binding */ displayLocalTodoList),\n/* harmony export */   \"createDisplayElement\": () => (/* binding */ createDisplayElement),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader),\n/* harmony export */   \"addIcon\": () => (/* binding */ addIcon)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _localStorageControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageControl */ \"./src/localStorageControl.js\");\n/* harmony import */ var _todo_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-object */ \"./src/todo-object.js\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sort */ \"./src/sort.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\n\n\n\nlet editFlag = false;\nlet editID = \"\";\n\n// * CREATE HEADER\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n  header.className = \"header\";\n\n  addIcon(header, \"fas fa-tasks\");\n  const logo = document.createElement(\"h1\");\n  logo.textContent = \"Todo List\";\n  header.appendChild(logo);\n\n  return header;\n}\n\n// * CREATE TODO LIST DISPLAY ELEMENT\nfunction createDisplayElement() {\n  const div = document.createElement(\"div\");\n  div.className = \"display-todo\";\n\n  const miscBar = document.createElement(\"div\");\n  miscBar.className = \"misc-bar\";\n\n  const clearAllBtn = createClearAllBtn();\n  miscBar.appendChild(clearAllBtn);\n\n  const sort = (0,_sort__WEBPACK_IMPORTED_MODULE_3__.createSort)();\n  miscBar.appendChild(sort);\n  div.appendChild(miscBar);\n\n  const container = document.createElement(\"div\");\n  container.className = \"todo-container\";\n  div.appendChild(container);\n\n  return div;\n}\n\nfunction createClearAllBtn() {\n  const clearAllBtn = document.createElement(\"button\");\n  clearAllBtn.setAttribute(\"class\", \"btn clear-all-btn\");\n  clearAllBtn.addEventListener(\"click\", clearAllTodo);\n  clearAllBtn.textContent = \"Remove All\";\n\n  return clearAllBtn;\n}\n\nfunction clearAllTodo() {\n  const todos = document.querySelectorAll(\".todo\");\n  const container = document.querySelector(\".todo-container\");\n  if (todos.length > 0) {\n    todos.forEach((todo) => {\n      container.removeChild(todo);\n    });\n  }\n  while (_index__WEBPACK_IMPORTED_MODULE_0__.todoList.length > 0) {\n    _index__WEBPACK_IMPORTED_MODULE_0__.todoList.splice(0, 1);\n  }\n  localStorage.removeItem(\"todoList\");\n}\n\n// * DISPLAY TODOLIST\nfunction displayTodoList(todoList) {\n  const container = document.querySelector(\".todo-container\");\n\n  const todos = container.querySelectorAll(\".todo\");\n  todos.forEach((item) => {\n    container.removeChild(item);\n  });\n\n  for (let todo of todoList) {\n    const item = createDisplayForTodo(todo);\n    container.appendChild(item);\n  }\n}\n\n// * SET DISPLAY FOR A SINGLE TODO\nfunction createDisplayForTodo(todo) {\n  const item = document.createElement(\"div\");\n  item.className = \"todo\";\n  item.setAttribute(\"data-id\", todo.id);\n\n  const task = document.createElement(\"p\");\n  task.textContent = todo._task;\n  task.className = \"task\";\n\n  const due = document.createElement(\"p\");\n  due.textContent = todo._due;\n  due.className = \"due\";\n\n  const project = document.createElement(\"p\");\n  project.textContent = todo._project;\n  project.className = \"project\";\n\n  const priority = document.createElement(\"button\");\n  priority.textContent = todo._priority;\n  priority.className = \"priority\";\n  priority.addEventListener(\"click\", (e) => {\n    togglePriority(e, todo);\n  });\n\n  const btnContainer = document.createElement(\"div\");\n  btnContainer.className = \"btn-container\";\n  // del btn\n  const delBtn = document.createElement(\"button\");\n  delBtn.setAttribute(\"class\", \"btn del-btn\");\n  addIcon(delBtn, \"fas fa-trash\");\n  delBtn.addEventListener(\"click\", (e) => {\n    delItem(e, todo);\n  });\n\n  //  edit btn\n  const editBtn = document.createElement(\"button\");\n  editBtn.setAttribute(\"class\", \"btn edit-btn\");\n  addIcon(editBtn, \"fas fa-edit\");\n  editBtn.addEventListener(\"click\", (e) => {\n    editItem(e, todo);\n  });\n  const others = document.createElement(\"div\");\n  others.className = \"others-info\";\n\n  btnContainer.appendChild(delBtn);\n  btnContainer.appendChild(editBtn);\n\n  others.appendChild(due);\n  others.appendChild(project);\n  others.appendChild(btnContainer);\n\n  item.appendChild(task);\n  item.appendChild(priority);\n  item.appendChild(others);\n  return item;\n}\n\n// ADD FONT AWESOME ICON TO ELEMENT\nfunction addIcon(parentElement, iconName) {\n  const icon = document.createElement(\"i\");\n  icon.setAttribute(\"class\", iconName);\n  parentElement.appendChild(icon);\n}\n\n// TOGGLE DISPLAY TODO FUNCTION\nfunction addItem(e) {\n  e.preventDefault();\n\n  const task = document.querySelector(\"#task\").value;\n  const id = new Date().getTime().toString();\n  if (task !== \"\" && !editFlag) {\n    // * ADD MODE\n    let props = [id];\n    const fields = [\"task\", \"due\", \"priority\", \"project\"];\n    for (let field of fields) {\n      props.push(document.querySelector(`#${field}`).value);\n    }\n\n    const todo = new _todo_object__WEBPACK_IMPORTED_MODULE_2__.Todo(props[0], props[1], props[2], props[3], props[4]);\n    _index__WEBPACK_IMPORTED_MODULE_0__.todoList.push(todo);\n    e.currentTarget.reset();\n\n    // add item to local storage\n    (0,_localStorageControl__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(id, todo, \"todoList\");\n    // display item\n\n    displayTodoList(_index__WEBPACK_IMPORTED_MODULE_0__.todoList);\n  } else if (task !== \"\" && editFlag) {\n    // * EDIT MODE\n\n    // get edit obj by the ID\n    const todo = _index__WEBPACK_IMPORTED_MODULE_0__.todoList.filter((item) => (item.id = editID))[0];\n    const todoDisplay = document.querySelector(`[data-id=\"${editID}\" ]`);\n\n    const props = [\"task\", \"due\", \"priority\", \"project\"];\n\n    for (let prop of props) {\n      const value = document.querySelector(`#${prop}`).value;\n\n      todo[prop] = value;\n      todoDisplay.querySelector(`.${prop}`).textContent = value;\n    }\n    (0,_localStorageControl__WEBPACK_IMPORTED_MODULE_1__.editLocalStorage)(todo.id, todo, \"todoList\");\n    // reset form back to input mode\n    setEditDetails(false, \"\", \"create\");\n    e.currentTarget.reset();\n  }\n}\n\nfunction delItem(e, todo) {\n  const item = e.currentTarget.parentElement.parentElement.parentElement;\n  item.parentElement.removeChild(item);\n\n  const index = _index__WEBPACK_IMPORTED_MODULE_0__.todoList.indexOf(todo);\n  _index__WEBPACK_IMPORTED_MODULE_0__.todoList.splice(index, 1);\n\n  (0,_localStorageControl__WEBPACK_IMPORTED_MODULE_1__.removeFromLocalStorage)(todo.id, \"todoList\");\n}\n\nfunction editItem(e, todo) {\n  setEditDetails(true, todo.id, \"edit\");\n\n  // if form is hidden, show form\n  const form = document.querySelector(\"form\");\n  if (form.classList.contains(\"show-form\")) {\n    form.classList.remove(\"show-form\");\n  }\n  // set form value\n  console.log(e.currentTarget.parentElement.parentElement.parentElement);\n  const item = e.currentTarget.parentElement.parentElement.parentElement;\n  for (let element of [\"task\", \"due\", \"project\", \"priority\"]) {\n    const val = item.querySelector(`.${element}`);\n    document.querySelector(`#${element}`).value = val.innerHTML;\n  }\n}\n\n// CONTROL EDIT MODE\nfunction setEditDetails(editFlagVal, editIDVal, btnText) {\n  const btn = document.querySelector(\".todo-input-btn\");\n  editFlag = editFlagVal;\n  editID = editIDVal;\n  btn.textContent = btnText;\n}\n\n// TOGGLE PRIORITY DISPLAY\nfunction togglePriority(e, todo) {\n  const priority = e.currentTarget;\n  if (todo._priority === \"low\") {\n    todo.priority = \"normal\";\n    priority.textContent = todo._priority;\n  } else if (todo._priority === \"normal\") {\n    todo.priority = \"high\";\n    priority.textContent = todo._priority;\n  } else if (todo._priority === \"high\") {\n    todo.priority = \"low\";\n    priority.textContent = todo._priority;\n  }\n\n  (0,_localStorageControl__WEBPACK_IMPORTED_MODULE_1__.editLocalStorage)(todo.id, todo, \"todoList\");\n}\n\n// * DISPLAY TODO LIST STORE IN LOCALSTORAGE\nfunction displayLocalTodoList() {\n  const todos = (0,_localStorageControl__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)(\"todoList\");\n\n  if (todos.length > 0) {\n    todos.forEach((item) => {\n      const oldItem = item.item;\n      const newItem = new _todo_object__WEBPACK_IMPORTED_MODULE_2__.Todo(\n        oldItem.id,\n        oldItem._task,\n        oldItem._due,\n        oldItem._priority,\n        oldItem._project\n      );\n      _index__WEBPACK_IMPORTED_MODULE_0__.todoList.push(newItem);\n    });\n  }\n\n  displayTodoList(_index__WEBPACK_IMPORTED_MODULE_0__.todoList);\n\n  const projects = (0,_localStorageControl__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)(\"projectList\");\n  if (projects.length > 0) {\n    projects.forEach((item) => {\n      const oldProject = item.item;\n      const project = document.querySelector(\"#project\");\n      const sort = document.querySelector(\"#sort\");\n      const removeProject = document.querySelector(\"#remove-project\");\n      (0,_form__WEBPACK_IMPORTED_MODULE_4__.createSelectOption)(oldProject, project);\n      (0,_form__WEBPACK_IMPORTED_MODULE_4__.createSelectOption)(oldProject, sort);\n      (0,_form__WEBPACK_IMPORTED_MODULE_4__.createSelectOption)(oldProject, removeProject);\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/displayControl.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createForm\": () => (/* binding */ createForm),\n/* harmony export */   \"createSelectOption\": () => (/* binding */ createSelectOption)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayControl */ \"./src/displayControl.js\");\n/* harmony import */ var _localStorageControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorageControl */ \"./src/localStorageControl.js\");\n\n\n\n\nlet project = [\"personal\", \"work\"];\n\nfunction createForm() {\n  const div = document.createElement(\"div\");\n  div.className = \"form-container\";\n\n  const header = document.createElement(\"h2\");\n  header.textContent = \"create your todo\";\n  (0,_displayControl__WEBPACK_IMPORTED_MODULE_1__.addIcon)(header, \"fas fa-caret-square-down\");\n\n  div.appendChild(header);\n\n  const form = document.createElement(\"form\");\n  form.className = \"todo-input\";\n\n  const inputFieldSet = createTodoInput();\n  inputFieldSet.className = \"input-fieldset\";\n\n  const newProjectFieldset = createAddNewProject();\n  form.appendChild(inputFieldSet);\n\n  const removeProjectFieldSet = createRemoveProject();\n\n  const btn = createSubmitBtn(\"todo-input\");\n  btn.textContent = \"Create\";\n  form.appendChild(btn);\n\n  form.addEventListener(\"submit\", _displayControl__WEBPACK_IMPORTED_MODULE_1__.addItem);\n\n  form.appendChild(newProjectFieldset);\n  form.appendChild(removeProjectFieldSet);\n\n  header.addEventListener(\"click\", () => {\n    form.classList.toggle(\"show-form\");\n  });\n  div.appendChild(form);\n  return div;\n}\n\nfunction createAddNewProject() {\n  const fieldset = document.createElement(\"fieldset\");\n  const legend = document.createElement(\"label\");\n  legend.textContent = \"Add new project\";\n  addInput(\"text\", \"add-project\", fieldset);\n  const btn = createSubmitBtn(\"add-project\");\n  btn.addEventListener(\"click\", (e) => {\n    addNewProjectHandler(e);\n  });\n  fieldset.appendChild(btn);\n  return fieldset;\n}\n\nfunction addNewProjectHandler(e) {\n  e.preventDefault();\n\n  const input = document.querySelector(\"#add-project\");\n  const project = document.querySelector(\"#project\");\n  const sort = document.querySelector(\"#sort\");\n  const removeProject = document.querySelector(\"#remove-project\");\n\n  const value = input.value;\n  input.value = \"\";\n\n  if (value) {\n    (0,_localStorageControl__WEBPACK_IMPORTED_MODULE_2__.addToLocalStorage)(value, value, \"projectList\");\n    createSelectOption(value, project);\n    createSelectOption(value, sort);\n    createSelectOption(value, removeProject);\n  }\n}\n\nfunction createSelectOption(value, parentElement) {\n  const option = document.createElement(\"option\");\n  option.setAttribute(\"value\", value);\n  option.textContent = value;\n\n  parentElement.add(option);\n}\n\nfunction createRemoveProject() {\n  // create remove project element\n  const fieldset = document.createElement(\"fieldset\");\n  const label = document.createElement(\"label\");\n  label.textContent = \"Remove project\";\n  const removeProject = document.createElement(\"select\");\n  removeProject.setAttribute(\"id\", \"remove-project\");\n\n  // create options\n\n  const btn = document.createElement(\"button\");\n  btn.setAttribute(\"type\", \"submit\");\n  btn.textContent = \"Remove\";\n  btn.addEventListener(\"click\", removeProjectClickHandler);\n\n  fieldset.appendChild(label);\n  fieldset.appendChild(removeProject);\n  fieldset.appendChild(btn);\n\n  return fieldset;\n}\n\nfunction removeProjectClickHandler(e) {\n  e.preventDefault();\n\n  const project = document.querySelector(\"#project\");\n  const sort = document.querySelector(\"#sort\");\n  const removeProject = document.querySelector(\"#remove-project\");\n\n  const value = removeProject.value;\n\n  const allowRemove = !___WEBPACK_IMPORTED_MODULE_0__.todoList.some((todo) => todo._project === value);\n  if (allowRemove) {\n    // remove option from select\n    removeSelectOption(value, removeProject);\n    removeSelectOption(value, project);\n    removeSelectOption(value, sort);\n    // remove in local storage\n    (0,_localStorageControl__WEBPACK_IMPORTED_MODULE_2__.removeFromLocalStorage)(value, \"projectList\");\n  }\n}\n\nfunction removeSelectOption(value, parentElement) {\n  const options = parentElement.querySelectorAll(\"option\");\n\n  options.forEach((item) => {\n    if (item.value === value) {\n      parentElement.removeChild(item);\n    }\n  });\n}\n\nfunction createTodoInput() {\n  const fieldset = document.createElement(\"fieldset\");\n\n  addInput(\"text\", \"task\", fieldset);\n  addInput(\"date\", \"due\", fieldset);\n  addOptionTypeInput(\"priority\", [\"low\", \"normal\", \"high\"], fieldset);\n  addOptionTypeInput(\"project\", project, fieldset);\n\n  return fieldset;\n}\n\nfunction addInput(type, inputField, form) {\n  const input = document.createElement(\"input\");\n  const label = document.createElement(\"label\");\n\n  label.textContent = inputField;\n  label.setAttribute(\"for\", inputField);\n\n  input.setAttribute(\"name\", inputField);\n  input.setAttribute(\"id\", inputField);\n  input.setAttribute(\"type\", type);\n\n  form.appendChild(label);\n  form.appendChild(input);\n}\n\nfunction addOptionTypeInput(id, items, form) {\n  function createOption(value) {\n    const option = document.createElement(\"option\");\n    option.setAttribute(\"value\", value);\n    option.textContent = value;\n\n    return option;\n  }\n  const label = document.createElement(\"label\");\n  const select = document.createElement(\"select\");\n\n  label.setAttribute(\"for\", id);\n  label.textContent = `${id} :`;\n\n  select.setAttribute(\"id\", id);\n  for (let item of items) {\n    const option = createOption(item);\n    select.appendChild(option);\n  }\n\n  form.appendChild(label);\n  form.appendChild(select);\n}\n\nfunction createSubmitBtn(task) {\n  const btn = document.createElement(\"button\");\n  btn.setAttribute(\"class\", `btn submit-btn ${task}-btn`);\n  btn.setAttribute(\"type\", \"submit\");\n  btn.textContent = \"Add\";\n  return btn;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayControl */ \"./src/displayControl.js\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\nlet todoList = [];\n\nconst header = (0,_displayControl__WEBPACK_IMPORTED_MODULE_1__.createHeader)();\ndocument.body.insertBefore(header, document.body.firstChild);\n\nconst form = (0,_form__WEBPACK_IMPORTED_MODULE_0__.createForm)();\ncontent.appendChild(form);\n\nconst div = (0,_displayControl__WEBPACK_IMPORTED_MODULE_1__.createDisplayElement)();\ncontent.appendChild(div);\n\ndocument.addEventListener(\"DOMContentLoaded\", _displayControl__WEBPACK_IMPORTED_MODULE_1__.displayLocalTodoList);\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localStorageControl.js":
/*!************************************!*\
  !*** ./src/localStorageControl.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToLocalStorage\": () => (/* binding */ addToLocalStorage),\n/* harmony export */   \"removeFromLocalStorage\": () => (/* binding */ removeFromLocalStorage),\n/* harmony export */   \"editLocalStorage\": () => (/* binding */ editLocalStorage),\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage)\n/* harmony export */ });\nfunction getLocalStorage(listName) {\n  return localStorage.getItem(listName)\n    ? JSON.parse(localStorage.getItem(listName))\n    : [];\n}\n\nfunction addToLocalStorage(id, item, listName) {\n  const val = { id, item };\n  let list = getLocalStorage(listName);\n  list.push(val);\n  localStorage.setItem(listName, JSON.stringify(list));\n}\n\nfunction removeFromLocalStorage(id, listName) {\n  let list = getLocalStorage(listName);\n  list = list.filter((item) => item.id !== id);\n  localStorage.setItem(listName, JSON.stringify(list));\n}\n\nfunction editLocalStorage(id, todo, listName) {\n  let list = getLocalStorage(listName);\n  list = list.map((item) => {\n    if (item.id === id) {\n      item.item = todo;\n    }\n    return item;\n  });\n  localStorage.setItem(listName, JSON.stringify(list));\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/localStorageControl.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSort\": () => (/* binding */ createSort)\n/* harmony export */ });\n/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayControl */ \"./src/displayControl.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction createSort() {\n  const div = document.createElement(\"div\");\n  div.className = \"sort-container\";\n  const fieldset = document.createElement(\"fieldset\");\n  const label = document.createElement(\"label\");\n  label.textContent = \"Sort project\";\n  const sort = document.createElement(\"select\");\n  sort.setAttribute(\"id\", \"sort\");\n\n  createSortOption(sort);\n\n  const btn = document.createElement(\"button\");\n  btn.setAttribute(\"type\", \"submit\");\n  btn.textContent = \"Sort\";\n  btn.addEventListener(\"click\", sortClickHandler);\n\n  fieldset.appendChild(label);\n  fieldset.appendChild(sort);\n  fieldset.appendChild(btn);\n\n  div.appendChild(fieldset);\n  return div;\n}\n\nfunction sortClickHandler(e) {\n  e.preventDefault();\n  const sort = document.querySelector(\"#sort\");\n\n  const project = sort.value;\n  if (project !== \"all\") {\n    let newList = _index__WEBPACK_IMPORTED_MODULE_1__.todoList.filter((todo) => todo._project === project);\n    (0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.displayTodoList)(newList);\n  } else {\n    (0,_displayControl__WEBPACK_IMPORTED_MODULE_0__.displayTodoList)(_index__WEBPACK_IMPORTED_MODULE_1__.todoList);\n  }\n}\n\nfunction createSortOption(sort) {\n  const allOption = document.createElement(\"option\");\n  allOption.setAttribute(\"value\", \"all\");\n  allOption.textContent = \"all\";\n  sort.add(allOption);\n\n  const project = document.querySelector(\"#project\");\n  const options = project.querySelectorAll(\"option\");\n\n  for (let option of options) {\n    const newOption = document.importNode(option, true);\n    sort.appendChild(newOption);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/sort.js?");

/***/ }),

/***/ "./src/todo-object.js":
/*!****************************!*\
  !*** ./src/todo-object.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  constructor(id, task, due, priority, project) {\n    this.id = id;\n    this._task = task;\n\n    this._due = due;\n    this._priority = priority;\n    this._project = project;\n  }\n\n  get task() {\n    return this._task;\n  }\n\n  set task(value) {\n    this._task = value;\n  }\n\n  get due() {\n    return this._due;\n  }\n\n  set due(value) {\n    this._due = value;\n  }\n\n  get priority() {\n    return this._priority;\n  }\n  set priority(value) {\n    this._priority = value;\n  }\n\n  get project() {\n    return this._project;\n  }\n\n  set project(value) {\n    this._project = value;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo-object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;