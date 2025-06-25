// Get DOM elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Listen for form submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  // Add task text
  li.textContent = taskText;

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  li.appendChild(deleteBtn);

  // Toggle done state on click
  li.addEventListener('click', function (e) {
    if (e.target !== deleteBtn) {
      li.classList.toggle('done');
    }
  });

  // Delete item
  deleteBtn.addEventListener('click', function () {
    list.removeChild(li);
  });

  // Add to list and reset input
  list.appendChild(li);
  input.value = '';
});
