var buttonE1 = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function () {
    var listItemEL = document.createElement("li");
    listItemEL.className="task-item";
    listItemEL.textContent= window.prompt("What task you want to add");
    taskToDoEl.appendChild(listItemEL);
}


buttonE1.addEventListener("click", createTaskHandler);

