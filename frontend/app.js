function goToCreateList(){
    window.location.href="create-list.html";
}

let task = []; 
function addTask() {
    const input = document.getElementById("taskInput");
    const value = input.value.trim();

    if (value == "") return; 
}


function addTask(){
    //getting input from the text box
    const input = document.getElementById("taskInput");

    //trimming spaces from the input
    const taskText = input.value.trim();

    if (taskText == ""){
        alert('Please enter a task first');
        return;
    }

    //create a new div element for the task
    const taskItem = document.createElement("div");
    taskItem.className = "task-item"; //class for css 
    taskItem.textContent = taskText;

    //append the new task to the taskList div
    const list = document.getElementById("taskList");
    list.appendChild(taskItem);

    //clear the input
    input.value = "";
}