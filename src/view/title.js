import AbstractView from "./abstract";

const titleTemplate = () => {
  return `<h2 class="title">Чек-Лист</h2>`;
};

export default class TitleView extends AbstractView {
  getTemplate() {
    return titleTemplate();
  }
}
