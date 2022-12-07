/* eslint-disable import/prefer-default-export */
import { tasks } from './globalVariables.js';

const edit = (currentListItem) => {
  currentListItem.querySelector('.fa-sharp fa-solid fa-ellipsis-vertical').style.display = 'none';
  currentListItem.querySelector('.fa-solid fa-trash').style.display = 'block';
  const pTag = currentListItem.querySelector('p');
  const initial = pTag.textContent;
  pTag.contentEditable = true;
  pTag.focus();
  pTag.addEventListener('keypress', (eve) => {
    currentListItem.querySelector('.fa-sharp fa-solid fa-ellipsis-vertical').style.display = 'block';
    currentListItem.querySelector('.fa-solid fa-trash').style.display = 'none';
    if (eve.key === 'Enter') {
      pTag.contentEditable = false;
      const elementValue = pTag.textContent;
      tasks.forEach((element) => {
        if (element.description === initial) {
          element.description = elementValue;
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      });
    }
  });
};

export { edit };