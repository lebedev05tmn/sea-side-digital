import AbstractView from "./abstract";

const taskListTemplate = () => {
  return `<ul class="task-list"></ul>`;
};

export default class TaskListView extends AbstractView {
  getTemplate() {
    return taskListTemplate();
  }
}
