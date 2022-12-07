/* eslint-disable import/prefer-default-export */
import { tasks } from './globalVariables.js';

const deleteItem = (currentListItem) => {
  const pTag = currentListItem.querySelector('p');
  const initial = pTag.textContent;

  tasks.forEach((element) => {
    if (element.description === initial) {
      tasks.splice(tasks.indexOf(element), 1);
    }
  });
  tasks.forEach((element, index) => {
    element.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  currentListItem.remove();
};

export { deleteItem };