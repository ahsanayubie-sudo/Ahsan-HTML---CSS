console.log("Hello World");
let todo = document.querySelector("#Ahsan");
let button = document.querySelector("#addBtn");
let FileList = document.querySelector("#FileList");

let tasks = [];

function addtask() {
 if (todo.value != "") {
    tasks.push(todo.value);
    console.log(tasks);
    todo.value = "";
    
 }
 else {
        alert("Please enter a task");
    }  
    showTasks() 
}

function showTasks() {
    FileList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        FileList.innerHTML += `<li>${tasks[i]} 
        <button onclick="deleteTask(${i})">Delete</button></li>`;
        console.log(tasks[i]);
    }       
}