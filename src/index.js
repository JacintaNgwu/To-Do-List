import './style/index.css';

const tasks = [
  {
    description: 'Daily devotion',
    completed: true,
    index: 1,
  },
  {
    description: 'Study/reserch',
    completed: true,
    index: 2,
  },
  {
    description: 'Doing dishes',
    completed: false,
    index: 3,
  },
  {
    description: 'Visit a friend',
    completed: false,
    index: 4,
  },
  {
    description: 'Prepare meal',
    completed: true,
    index: 5,
  },
];

const toDoList = document.querySelector('.list');

toDoList.innerHTML += tasks.map((task) => `
<li>
<input type='checkbox' name='completed'>
<p>${task.description}</p>
<i class='fa-sharp fa-solid fa-ellipsis-vertical'></i>
</li>
`).join('');
