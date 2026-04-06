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
    
}

