document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  // Function to create a new task element and optionally save it to Local Storage
  function addTask(taskText, save = true) {
    const newList = document.createElement("li");
    newList.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.addEventListener("click", function () {
      taskList.removeChild(newList);
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const taskIndex = storedTasks.indexOf(taskText);

      storedTasks.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    });

    newList.appendChild(removeButton);

    taskList.appendChild(newList);

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    } else {
      alert("Enter a task");
    }
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      } else {
        alert("Enter a task");
      }
    }
  });

  // Load tasks from Local Storage when the DOM is fully loaded
  loadTasks();
});
