const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

function addTask() {
    const task = inputBox.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return ;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const span = document.createElement("span");
    span.textContent = "\u00d7";
    span.classList.add("close");

    span.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(span);

    li.addEventListener("click", function () {
        li.classList.toggle("checked");
    });

    listContainer.appendChild(li);

    inputBox.value = "";
}

    addButton.addEventListener("click", addTask);          

    inputBox.addEventListener("keydown", function(e) {     
        if (e.key === "Enter") {
            addTask();
        }
    }); 
