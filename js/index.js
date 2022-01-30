let newTask = new TaskManager;

const taskHTML = createTaskHtml("clean up", "just cleaning, idk", "fred", "2022-12-1", "done");

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

    if(nameInput.value.length < 5){
        console.log("the name field is less than 5")
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
        errorCount++;
    } else {
        // console.log("the name field is more than 5")
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
    }

    if(description.value.length < 5){
        description.classList.add("is-invalid");
        description.classList.remove("is-valid");
        errorCount++;
    } else {
        description.classList.remove("is-invalid");
        description.classList.add("is-valid");
    }

    if(assignedTo.value.length < 5){
        assignedTo.classList.add("is-invalid");
        assignedTo.classList.remove("is-valid");
        errorCount++;
    } else {
        assignedTo.classList.remove("is-invalid");
        assignedTo.classList.add("is-valid");
    }

    // Date validation
    if(Date.now() < Date.parse(dueDate.value)){
        dueDate.classList.remove("is-invalid");
        dueDate.classList.add("is-valid");
    } else {
        dueDate.classList.add("is-invalid");
        dueDate.classList.remove("is-valid");
        errorCount++;
    }

    if(taskStatus.value){
        taskStatus.classList.remove("is-invalid");
        taskStatus.classList.add("is-valid");
    } else {
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
        newTask.save();
        newTask.render();
    }
});

resetButton.addEventListener("onclick", clearFormFields)

const todayDate = document.querySelector("#date-today");

var today = new Date();
var date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()-2000}`;
todayDate.innerHTML =  date;

const taskList = document.getElementById("task-list");

taskList.addEventListener("click",(event) => {
    console.log("you clicked me!");

    // my new code for the dropdown menu:
    // console.log(event.target.classList);
    
    // I think... you can ignore the other clicks!
    if(event.target.classList.contains("dropdown-item")) {
        console.log("you clicked a dropdown menu item!")
        let parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(parentTask.classList);
        const taskId = parseInt(parentTask.dataset.taskId);
        const task = newTask.getTaskById(taskId);

        // switch thing:
        console.log(event.target.id);   
        
        switch(event.target.id) {
            case "done":
                console.log("You clicked Done!")
                task.status = "Done";
                break;
            case "review":
                console.log("You clicked Review!")
                task.status = "Review";
                break;
            case "in-progress":
                console.log("You clicked in progress!")
                task.status = "In Progress";
                break;
            case "to-do":
                console.log("You clicked to do!")
                task.status = "To Do";
                break;
            default:
                console.log("Default hit, what went wrong?")
                break;
        }

        newTask.save();
        newTask.render();

        console.log(taskId);
    }

    // all the code for the done button event
    // if(event.target.classList.contains("done-button")) {
    //     let parentTask = event.target.parentElement.parentElement;
    //     const taskId = parseInt(parentTask.dataset.taskId);
    //     const task = newTask.getTaskById(taskId);
    //     task.status = "Done";
    //     newTask.render();
    // }

    
    

});
