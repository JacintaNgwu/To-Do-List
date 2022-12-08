import { tasks } from './globalVariables.js';

const completedTask = (listItem, e) => {
  const pTag = listItem.querySelector('p');
  pTag.classList.toggle('cancelList');
  let newToDo = {};
  tasks.forEach((element) => {
    if (element.description === pTag.textContent) {
      newToDo = element;
    }
  });

  if (e.target.checked) {
    newToDo.completed = true;
  } else {
    newToDo.completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const checkCompletedTask = (checkbox, listItem) => {
  const pTag = listItem.querySelector('p');
  let newToDo = {};
  tasks.forEach((element) => {
    if (element.description === pTag.textContent) {
      newToDo = element;
    }
  });
  if (newToDo.completed) {
    checkbox.checked = true;
    pTag.classList.add('cancelList');
  }
};

export { completedTask, checkCompletedTask };