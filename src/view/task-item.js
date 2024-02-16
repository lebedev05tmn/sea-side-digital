import AbstractView from "./abstract";

const taskListItemTemplate = props => {
  return `<li class="task-list__item">
  <input class="task-list__input" type="checkbox" name="checkbox" id="checkbox-${
    props.id
  }" ${props.isSelected ? "checked" : ""} />
  <label class="task-list__label" for="checkbox-${props.id}">
    ${props.text}</label>
  <button class="task-list__item-delete"></button>
  </li>`;
};

export default class TaskItemView extends AbstractView {
  constructor(props) {
    super();
    this._props = props;
  }
  getTemplate() {
    return taskListItemTemplate(this._props);
  }
}
