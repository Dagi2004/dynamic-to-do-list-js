document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText == "") {
      alert("Enter a task");
    } else {
      const newList = document.createElement("li");
      newList.textContent = taskText;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      removeButton.addEventListener("click", function () {
        taskList.removeChild(newList);
      });
      newList.appendChild(removeButton);
      taskList.appendChild(newList);
      taskInput.value = "";
    }
  }
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
document.addEventListener("DOMContentLoaded", addTask);
