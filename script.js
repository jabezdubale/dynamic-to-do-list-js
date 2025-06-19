document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

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

    delBut.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(delBut);
    taskList.appendChild(li);
    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
      return;
    }
  });

  document.addEventListener("DOMContentLoaded", addTask);
});
