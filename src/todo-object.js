class Todo {
  constructor(id, name, desc, due, priority, project) {
    this.id = id;
    this._name = name;
    this._description = desc;
    this._dueDate = due;
    this._priority = priority;
    this._project = project;
  }

  set name(value) {
    this._name = value;
  }

  set description(value) {
    this._description = value;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  set priority(value) {
    this._priority = value;
  }

  set project(value) {
    this._project = value;
  }
}

export { Todo };
