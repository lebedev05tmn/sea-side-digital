import AbstractView from "./abstract";

const filterTemplate = () => {
  return `<div class="filter">
    <button class="filter__control filter__control--default filter__control--active">Все задачи</button>
    <button class="filter__control filter__control--not-completed">Активные</button>
    <button class="filter__control filter__control--completed">Выполненные</button>
  </div>`;
};

export default class FilterView extends AbstractView {
  getTemplate() {
    return filterTemplate();
  }
}
