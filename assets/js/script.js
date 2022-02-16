//var buttonE1 = document.querySelector("#save-task");

var formE1 = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function () {
   event.preventDefault();
    

    var listItemEL = document.createElement("li");
    listItemEL.className="task-item";
    listItemEL.textContent= "This is a new task";
    taskToDoEl.appendChild(listItemEL);
}

formE1.addEventListener("submit", createTaskHandler);

