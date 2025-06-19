document.addEventListener("DOMContentLoaded", () => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function loadLocalTask() {
    tasks.forEach((value) => {
      createTaskElement(value);
    });
  }
  loadLocalTask();

  function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please Enter a Task!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    const delBut = document.createElement("button");
    delBut.textContent = "Remove";
    delBut.classList.add("remove-btn");
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    delBut.addEventListener("click", () => {
      li.remove();
      delLocalTask(taskText);
    });

    li.appendChild(delBut);
    taskList.appendChild(li);
    taskInput.value = "";
  }

  function createTaskElement(tasks) {
    const li = document.createElement("li");
    li.textContent = tasks;
    const delBut = document.createElement("button");
    delBut.textContent = "Remove";
    delBut.classList.add("remove-btn");
    li.appendChild(delBut);
    taskList.appendChild(li);
  }

  function delLocalTask(task) {
    tasks = tasks.filter((value) => {
      return value !== task;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  console.log(tasks);

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
      return;
    }
  });

  document.addEventListener("DOMContentLoaded", addTask);
});
