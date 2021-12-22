class Todo {
  constructor(name, desc, due, priority, project) {
    this._name = name;
    this._description = desc;
    this._dueDate = due;
    this._priority = priority;
    this._project = project;
  }

  set priority(value) {
    this._priority = value;
  }
}

export { Todo };
