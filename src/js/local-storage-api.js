import { taskList } from './refs.js';

export function saveTasksToLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
export function deleteTask(indexEl) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const filteredTasks = tasks.filter((task, index) => index !== indexEl);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}
export function renderTasksfromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const markup = tasks
    .map(
      ({ title, description }) => `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3> ${title}</h3>
        <p>${description}</p>
      </li>`
    )
    .join('');
  taskList.insertAdjacentHTML('beforeend', markup);
}
