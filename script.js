// Select DOM Elements-grab elements so JavaScript can control them
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

//Handle Form Submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = input.value;
  addTask(taskText);
  saveTask(taskText);

  input.value = "";
});

//Display a Task
function addTask(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function () {
    li.remove();
    removeTask(task);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

//Save Tasks (Local Storage)
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Load Tasks on Page Load
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(addTask);
}

loadTasks();
