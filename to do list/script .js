const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return; // ignore empty input

  const li = document.createElement('li');
  li.textContent = taskText;
  taskList.appendChild(li);

  taskInput.value = ''; // clear input after adding
});
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Add delete feature
  li.addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
