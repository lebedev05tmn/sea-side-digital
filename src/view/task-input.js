import AbstractView from "./abstract";

const taskInputTemplate = () => {
  return `<div class="add-task">
    <input class="add-task__input" type="text" placeholder="Добавить задачу" />
    <button class="add-task__button" type="submit">Добавить задачу</button>
  </div>`;
};

export default class TaskInputView extends AbstractView {
  getTemplate() {
    return taskInputTemplate();
  }
}
