import './style/index.css';
import { addToDoList } from './modules/addToDo.js';
import { Mytask } from './modules/myTask.js';

import { tasks } from './modules/globalVariables.js';

const textinput = document.querySelector('#input');
const enterIcon = document.querySelector('#input');
textinput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const newToDo = new Mytask(textinput.value);
    newToDo.description = textinput.value;
    newToDo.index = tasks.length + 1;
    addToDoList(newToDo);
    tasks.push(newToDo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    textinput.value = null;
    // console.log(newToDo);
  }
});

enterIcon.addEventListener('click', () => {
  if (textinput.value) {
    const newToDo = new Mytask();
    newToDo.description = textinput;
    newToDo.index = tasks.length + 1;
    addToDoList(newToDo);
    tasks.push(newToDo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    textinput.value = null;
  }
});

tasks.forEach((element) => {
  addToDoList(element);
});
