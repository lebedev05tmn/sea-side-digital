import WrapperBlockView from "./view/wrapper";
import TaskListView from "./view/task-list";
import TaskInputView from "./view/task-input";
import TaskItemView from "./view/task-item";
import TitleView from "./view/title";
import FilterView from "./view/filter";
import { taskListMock } from "./mocks";
import { renderTemplate, RenderPosition } from "./utils/render";
import { filterValues, filterMocks } from "./utils/filter";
renderTemplate(
  document.body,
  new WrapperBlockView().getTemplate(),
  RenderPosition.AFTERBEGIN
);
const wrapperElement = document.querySelector(".wrapper");
renderTemplate(
  wrapperElement,
  new TitleView().getTemplate(),
  RenderPosition.BEFOREEND
);
renderTemplate(
  wrapperElement,
  new FilterView().getTemplate(),
  RenderPosition.BEFOREEND
);
renderTemplate(
  wrapperElement,
  new TaskInputView().getTemplate(),
  RenderPosition.BEFOREEND
);
renderTemplate(
  wrapperElement,
  new TaskListView().getTemplate(),
  RenderPosition.BEFOREEND
);
const taskListElement = document.querySelector(".task-list");
taskListMock.forEach(elem => {
  renderTemplate(
    taskListElement,
    new TaskItemView(elem).getTemplate(),
    RenderPosition.BEFOREEND
  );
});
const handleDelete = (i, mocks) => {
  const taskList = document.querySelectorAll(".task-list__item");
  const deleteItem = document.querySelectorAll(".task-list__item-delete");
  deleteItem[i].addEventListener("click", () => {
    taskList[i].remove();
    mocks.splice(i, 1);
  });
};
const handleCheck = (i, mocks) => {
  const taskLabelList = document.querySelectorAll(".task-list__label");
  taskLabelList[i].addEventListener("click", () => {
    mocks[i].isSelected = !mocks[i].isSelected;
  });
};
for (let i = 0; i < taskListMock.length; i++) {
  handleDelete(i, taskListMock);
  handleCheck(i, taskListMock);
}
const buttonElement = document.querySelector(".add-task__button");
const inputElement = document.querySelector(".add-task__input");
buttonElement.addEventListener("click", evt => {
  evt.preventDefault();
  const newMockId = taskListMock.length + 1;
  if (inputElement.value === "") {
    alert("Введите здачу");
  } else {
    taskListMock.push({
      text: inputElement.value,
      isSelected: false,
      id: newMockId,
    });
    renderTemplate(
      taskListElement,
      new TaskItemView(taskListMock[taskListMock.length - 1]).getTemplate(),
      RenderPosition.BEFOREEND
    );
    inputElement.value = "";
    handleDelete(taskListMock.length - 1, taskListMock);
    handleCheck(taskListMock.length - 1, taskListMock);
  }
});
const filterControls = document.querySelectorAll(".filter__control");

filterControls[0].addEventListener("click", evt => {
  evt.preventDefault();
  filterControls.forEach(element =>
    element.classList.remove("filter__control--active")
  );
  filterControls[0].classList.add("filter__control--active");

  taskListElement.innerHTML = "";
  filterMocks(taskListMock, filterValues.DEFAULT).forEach(elem => {
    renderTemplate(
      taskListElement,
      new TaskItemView(elem).getTemplate(),
      RenderPosition.BEFOREEND
    );
  });
  inputElement.removeAttribute("disabled");
  for (let i = 0; i < taskListMock.length; i++) {
    handleDelete(i, taskListMock);
    handleCheck(i, taskListMock);
  }
});
filterControls[1].addEventListener("click", evt => {
  evt.preventDefault();
  filterControls.forEach(element =>
    element.classList.remove("filter__control--active")
  );
  filterControls[1].classList.add("filter__control--active");

  taskListElement.innerHTML = "";
  const filterList = filterMocks(taskListMock, filterValues.NOT_COMPLETED);
  filterList.forEach(elem => {
    renderTemplate(
      taskListElement,
      new TaskItemView(elem).getTemplate(),
      RenderPosition.BEFOREEND
    );
  });
  const taskLabelList = document.querySelectorAll(".task-list__label");
  const tasksList = document.querySelectorAll(".task-list__item");
  inputElement.setAttribute("disabled", "disabled");
  for (let i = 0; i < taskLabelList.length; i++) {
    handleDelete(i, taskListMock);
    taskLabelList[i].addEventListener("click", () => {
      tasksList[i].remove();
      for (let j = 0; j < taskListMock.length; j++) {
        if (taskListMock[j].id === filterList[i].id) {
          taskListMock[j].isSelected = !taskListMock[j].isSelected;
        }
      }
    });
  }
});
filterControls[2].addEventListener("click", evt => {
  evt.preventDefault();
  filterControls.forEach(element =>
    element.classList.remove("filter__control--active")
  );
  filterControls[2].classList.add("filter__control--active");

  taskListElement.innerHTML = "";
  const filterList = filterMocks(taskListMock, filterValues.COMPLETED);
  filterList.forEach(elem => {
    renderTemplate(
      taskListElement,
      new TaskItemView(elem).getTemplate(),
      RenderPosition.BEFOREEND
    );
  });
  const taskLabelList = document.querySelectorAll(".task-list__label");
  const tasksList = document.querySelectorAll(".task-list__item");
  inputElement.setAttribute("disabled", "disabled");
  for (let i = 0; i < taskLabelList.length; i++) {
    handleDelete(i, taskListMock);
    taskLabelList[i].addEventListener("click", () => {
      tasksList[i].remove();
      for (let j = 0; j < taskListMock.length; j++) {
        if (taskListMock[j].id === filterList[i].id) {
          taskListMock[j].isSelected = !taskListMock[j].isSelected;
        }
      }
    });
  }
});
