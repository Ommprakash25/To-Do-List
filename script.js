const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //create X button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ''; // It will make the input box empty after clicking button
    saveData(); // It will save the data
}

listContainer.addEventListener("click",function (e) { // Listens for click event on added tasks
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");         // Adds or Removes checked class if li or task is clicked
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();             //Removes task if span or X is clicked
    }
    saveData();
  });

// function for saving the data after browser closes or refresh
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML); //.setItem("variable-name",value)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data"); //.getItem("variable-name")
}

showData(); // Shows data after refreshing or re-opening the browser

const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear; //dynamic copyright year