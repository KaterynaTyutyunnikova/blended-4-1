import { formElement, buttonElement, taskList } from './refs.js';
import { renderTasks } from './tasks.js';
import { saveTasksToLocalStorage } from './local-storage-api.js';
import {
  deleteTask,
  renderTasksfromLocalStorage,
} from './local-storage-api.js';
renderTasksfromLocalStorage();
formElement.addEventListener('submit', event => {
  event.preventDefault();
  const taskName = event.target.elements.taskName.value;
  const taskDescription = event.target.elements.taskDescription.value.trim();
  console.log(taskName);
  console.log(taskDescription);
  if (!taskName === '' || !taskDescription === '') {
    alert('Please fill in all fields');
    return;
  }
  renderTasks({ title: taskName, description: taskDescription });
  saveTasksToLocalStorage({ title: taskName, description: taskDescription });

  formElement.reset();
});
taskList.addEventListener('click', event => {
  if (event.target.classList.contains('task-list-item-btn')) {
    const taskItem = event.target.closest('.task-list-item');
    console.log(taskItem);
    const allTasks = [...taskList.children];
    const indexEl = allTasks.indexOf(taskItem);

    deleteTask(indexEl);
    taskItem.remove();
  }
});
