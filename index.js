const form = document.querySelector("#new-task-form");

form.addEventListener("submit", (event) => {
    const nameInput = document.getElementById("task-name");
    const description = document.getElementById("task-description");
    const assignedTo = document.getElementById("assigned-to");
    const dueDate = document.getElementById("due-date");
    const taskStatus = document.getElementById("task-status");

    let isValid = true;
    
    event.preventDefault();
    event.stopPropagation();

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
    } else {
        console.log("the name field is more than 5")
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
    }


    if(description.value.length < 5){
        console.log("the description field is less than 5")
        description.classList.add("is-invalid");
        description.classList.remove("is-valid");
    } else {
        console.log("the description field is more than 5")
        description.classList.remove("is-invalid");
        description.classList.add("is-valid");
    }


    if(assignedTo.value.length < 5){
        console.log("the description field is less than 5");
        assignedTo.classList.add("is-invalid");
        assignedTo.classList.remove("is-valid");
    } else {
        console.log("the description field is more than 5");
        assignedTo.classList.remove("is-invalid");
        assignedTo.classList.add("is-valid");
    }

    if(dueDate.value){
        console.log("the description field is less than 5");
        dueDate.classList.remove("is-invalid");
        dueDate.classList.add("is-valid");
    } else {
        console.log("the description field is more than 5");
        dueDate.classList.add("is-invalid");
        dueDate.classList.remove("is-valid");
    }

    if(taskStatus.value){
        console.log("the description field is less than 5");
        taskStatus.classList.remove("is-invalid");
        taskStatus.classList.add("is-valid");
    } else {
        console.log("the description field is more than 5");
        taskStatus.classList.add("is-invalid");
        taskStatus.classList.remove("is-valid");
    }


});