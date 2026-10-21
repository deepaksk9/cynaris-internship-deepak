
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyMessage = document.querySelector("#empty-message");

const STORAGE_KEY = "taskflow-tasks";
let tasks = [];

try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  tasks = Array.isArray(saved) ? saved : [];
} catch (error) {
  console.error("Could not load saved tasks:", error);
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Could not save tasks:", error);
    alert("Tasks could not be saved in this browser.");
  }
}

function renderTasks() {
  taskList.replaceChildren();

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.dataset.id = task.id;

    if (task.completed) {
      item.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.dataset.action = "toggle";
    checkbox.setAttribute("aria-label", `Complete ${task.text}`);

    const text = document.createElement("span");
    text.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.dataset.action = "delete";
    deleteButton.setAttribute("aria-label", `Delete ${task.text}`);

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(deleteButton);
    taskList.appendChild(item);
  });

  const completedCount = tasks.filter((task) => task.completed).length;
  taskCount.textContent =
    `${tasks.length} tasks · ${completedCount} completed`;

  emptyMessage.hidden = tasks.length > 0;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  tasks.push({
    id: crypto.randomUUID(),
    text,
    completed: false
  });

  saveTasks();
  renderTasks();
  form.reset();
  input.focus();
});

// Event delegation: one listener handles all task controls.
taskList.addEventListener("click", (event) => {
  const button = event.target.closest('button[data-action="delete"]');
  if (!button) return;

  const item = button.closest("li");
  if (!item) return;

  tasks = tasks.filter((task) => task.id !== item.dataset.id);

  // Remove the element using a DOM method.
  taskList.removeChild(item);

  saveTasks();
  renderTasks();
});

taskList.addEventListener("change", (event) => {
  if (!event.target.matches('input[data-action="toggle"]')) return;

  const item = event.target.closest("li");
  if (!item) return;

  const task = tasks.find((entry) => entry.id === item.dataset.id);
  if (!task) return;

  task.completed = event.target.checked;
  item.classList.toggle("completed", task.completed);

  saveTasks();
  renderTasks();
});

renderTasks();
