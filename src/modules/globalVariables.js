/* eslint-disable import/prefer-default-export */
export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
export const toDoList = document.querySelector('.list');