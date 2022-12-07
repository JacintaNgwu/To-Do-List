/* eslint-disable import/prefer-default-export */
import { deleteItem } from './addRemove.js';
import { edit } from './edit.js';
import { toDoList } from './globalVariables.js';

const addToDoList = (todoValue) => {
  toDoList.innerHTML += `
<li class="list-item">
<input type='checkbox' class='checkbox'>
<p class='todo-des'>${todoValue.description}</p>
<i class='fa-sharp fa-solid fa-ellipsis-vertical icon'></i>
<i class="fa-solid fa-trash icon"></i>
</li>
`;

  const editIcon = Array.from(document.querySelectorAll('.icon'));
  const deleteIcon = Array.from(document.querySelectorAll('.icon'));

  editIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
      const currentListItem = icon.closest('.list-item');
      edit(currentListItem);
    });
  });

  deleteIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
      const currentListItem = icon.closest('.list-item');
      deleteItem(currentListItem);
    });
  });
};

export { addToDoList };