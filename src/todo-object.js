export default class Todo {
  constructor(id, task, due, priority, project) {
    this.id = id;
    this._task = task;

    this._due = due;
    this._priority = priority;
    this._project = project;
  }

  get task() {
    return this._task;
  }

  set task(value) {
    this._task = value;
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
