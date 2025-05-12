export function renderTasks({title, description}) {
    const markup= `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3> ${title}</h3>
        <p>${description}</p>
      </li>`;
     taskList.insertAdjacentHTML('beforeend', markup);
}
import { taskList } from "./refs";