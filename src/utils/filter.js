export const filterValues = {
  DEFAULT: "default",
  NOT_COMPLETED: "not-completed",
  COMPLETED: "completed",
};

export const filterMocks = (list, filterValue) => {
  let filterMock = [];
  switch (filterValue) {
    case filterValues.DEFAULT:
      filterMock = list;
      break;
    case filterValues.NOT_COMPLETED:
      filterMock = list.filter(elem => !elem.isSelected);
      break;
    case filterValues.COMPLETED:
      filterMock = list.filter(elem => elem.isSelected);
      break;
  }
  return filterMock;
};
