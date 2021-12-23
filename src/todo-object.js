class Todo {
  constructor(id, name, due, priority, project) {
    this.id = id;
    this._name = name;

    this._due = due;
    this._priority = priority;
    this._project = project;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get due() {
    return this._due;
  }

  set due(value) {
    this._due = value;
  }

  get priority() {
    return this._priority;
  }
  set priority(value) {
    this._priority = value;
  }

  get project() {
    return this._project;
  }

  set project(value) {
    this._project = value;
  }
}

export { Todo };
