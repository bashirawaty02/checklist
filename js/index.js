let newTask = new TaskManager;

const taskHTML = createTaskHtml("clean up", "just cleaning, idk", "fred", "2022-12-1", "done");
console.log(taskHTML);


const form = document.querySelector("#new-task-form");

const resetButton = document.getElementById("reset-form");

const nameInput = document.getElementById("task-name");
const description = document.getElementById("task-description");
const assignedTo = document.getElementById("assigned-to");
const dueDate = document.getElementById("due-date");
const taskStatus = document.getElementById("task-status");

let errorCount = 0;

const clearFormFields = () => {
    nameInput.value = "";
    description.value = "";
    assignedTo.value = "";
    taskStatus.value = "To Do";
    dueDate.value = "";
    nameInput.classList.remove("is-valid");
    description.classList.remove("is-valid");
    assignedTo.classList.remove("is-valid");
    taskStatus.classList.remove("is-valid");
    dueDate.classList.remove("is-valid");
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // event.stopPropagation(); (they got rid of it??)
    // For debuggin:
    console.log(`the length of the name field is: ${nameInput.value.length}`);
    console.log(description.value);
    console.log(assignedTo.value);
    console.log(dueDate.value);
    console.log(taskStatus.value);

    if(nameInput.value.length < 5){
        console.log("the name field is less than 5")
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
        errorCount++;
    } else {
        console.log("the name field is more than 5")
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
    }


    if(description.value.length < 5){
        console.log("the description field is less than 5")
        description.classList.add("is-invalid");
        description.classList.remove("is-valid");
        errorCount++;
    } else {
        console.log("the description field is more than 5")
        description.classList.remove("is-invalid");
        description.classList.add("is-valid");
    }


    if(assignedTo.value.length < 5){
        console.log("the description field is less than 5");
        assignedTo.classList.add("is-invalid");
        assignedTo.classList.remove("is-valid");
        errorCount++;
    } else {
        console.log("the description field is more than 5");
        assignedTo.classList.remove("is-invalid");
        assignedTo.classList.add("is-valid");
    }

    // Date validation
    if(Date.now() < Date.parse(dueDate.value)){
        console.log("the due date is:" + dueDate.value)
        console.log("today's date is: " + Date.now())
        dueDate.classList.remove("is-invalid");
        dueDate.classList.add("is-valid");
    } else {
        console.log("the description field is more than 5");
        dueDate.classList.add("is-invalid");
        dueDate.classList.remove("is-valid");
        errorCount++;
    }

    if(taskStatus.value){
        console.log("the description field is less than 5");
        taskStatus.classList.remove("is-invalid");
        taskStatus.classList.add("is-valid");
    } else {
        console.log("the description field is more than 5");
        taskStatus.classList.add("is-invalid");
        taskStatus.classList.remove("is-valid");
        errorCount++;
    }

    if(errorCount > 0){
        errorCount = 0;
        return;
    } else {
        newTask.addTask(
            nameInput.value,
            description.value,
            assignedTo.value,
            dueDate.value,
            taskStatus.value
        );
        clearFormFields();
    }

    console.log(newTask.tasks);

});

resetButton.addEventListener("onclick", clearFormFields)

const todayDate = document.querySelector("#date-today");

var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()-2000}`;
// console.log(today.getMonth() + 1)

// set the date to today:
console.log(today);
todayDate.innerHTML =  date;

// var myTasks = new TaskManager();

// myTasks.addTask("cook the pasta", "boil the water", "fred", "20-12-2023", "to do");
