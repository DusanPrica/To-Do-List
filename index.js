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

    addButton.addEventListener("click", addTask);          // when button is clicked

    inputBox.addEventListener("keydown", function(e) {     // when enter key was clicked 
        if (e.key === "Enter") {
            addTask();
        }
    });

    /*const inputBox = document.getElementById("input-box");
    const addButton = document.getElementById("add-button");
    const listContainer = document.getElementById("list-container");
    
    // Funkcija za dodavanje zadatka
    function addTask() {
        const task = inputBox.value.trim();
    
        if (task === "") {
            alert("Please enter a task.");
            return;
        }
    
        const li = document.createElement("li");
        li.textContent = task;
    
        const span = document.createElement("span");
        span.textContent = "\u00d7";
        span.classList.add("close");
    
        span.addEventListener("click", function () {
            li.remove();
            removeTaskFromStorage(task); // Uklanjamo zadatak iz localStorage
        });
    
        li.addEventListener("click", function () {
            li.classList.toggle("checked");
        });
    
        listContainer.appendChild(li);
        inputBox.value = "";
    
        saveTaskToStorage(task); // Čuvamo zadatak u localStorage
    }
    
    // Funkcija za čuvanje zadatka u localStorage
    function saveTaskToStorage(task) {
        let tasks = localStorage.getItem("tasks");
        tasks = tasks ? JSON.parse(tasks) : [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    // Funkcija za uklanjanje zadatka iz localStorage
    function removeTaskFromStorage(task) {
        let tasks = localStorage.getItem("tasks");
        tasks = tasks ? JSON.parse(tasks) : [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    // Funkcija za učitavanje zadataka sa localStorage
    function loadTasks() {
        let tasks = localStorage.getItem("tasks");
        tasks = tasks ? JSON.parse(tasks) : [];
    
        tasks.forEach(task => {
            const li = document.createElement("li");
    
            // Dodajemo tekst zadatka
            const textNode = document.createTextNode(task);
            li.appendChild(textNode);
    
            // Dodajemo "×" dugme za brisanje
            const span = document.createElement("span");
            span.textContent = "\u00d7";
            span.classList.add("close");
    
            span.addEventListener("click", function () {
                li.remove();
                removeTaskFromStorage(task); // Uklanjamo zadatak iz localStorage
            });
    
            li.addEventListener("click", function () {
                li.classList.toggle("checked");
            });
    
            li.appendChild(span); // Dodajemo "×" na kraj zadatka
            listContainer.appendChild(li); // Dodajemo li element u listu
        });
    }
    
    // Kada se stranica učita, učitavamo zadatke sa localStorage
    window.onload = loadTasks;
    
    addButton.addEventListener("click", addTask); // Kada se klikne dugme
    inputBox.addEventListener("keydown", function (e) { // Kada se pritisne Enter
        if (e.key === "Enter") {
            addTask();
        }
    });*/   
