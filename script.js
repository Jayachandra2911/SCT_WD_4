function addTask() {
  const taskText = document.getElementById('task').value.trim();
  const dueDate = document.getElementById('dueDate').value;
  if (taskText === '') return;

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');

  const taskContent = document.createElement('span');
  taskContent.textContent = `${taskText} ${dueDate ? ' - ' + new Date(dueDate).toLocaleString() : ''}`;
  li.appendChild(taskContent);

  const actions = document.createElement('div');
  actions.className = 'actions';

  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✔';
  doneBtn.onclick = () => li.classList.toggle('completed');

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.onclick = () => {
    const newTask = prompt('Edit your task:', taskText);
    if (newTask) {
      taskContent.textContent = `${newTask} ${dueDate ? ' - ' + new Date(dueDate).toLocaleString() : ''}`;
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => taskList.removeChild(li);

  actions.append(doneBtn, editBtn, deleteBtn);
  li.appendChild(actions);

  taskList.appendChild(li);

  // Reset input
  document.getElementById('task').value = '';
  document.getElementById('dueDate').value = '';
}
