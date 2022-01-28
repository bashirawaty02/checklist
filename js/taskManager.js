function createTaskHtml(name, description, assignedTo, dueDate, status){

    const html = `
    <ul class="list-group" id="tasksList">
      <li class="list-group-item shadow p-3 mb-3 rounded">
        <h5>${name}</h5>
        <p>${description}</p>

        <div class="d-flex w-100 mb-3 justify-content-between">
          <small class="text-primary font-weight-bold">@${assignedTo}</small>
          <small class="text-secondary"><i class="bi bi-clock"></i> ${dueDate}</small>
        </div>
        <!-- The Dropdown menu & edit buttons: -->
        <div class="d-flex justify-content-between">
          <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              ${status}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">To Do</a>
              <a class="dropdown-item" href="#">In Progress</a>
              <a class="dropdown-item" href="#">Review</a>
              <a class="dropdown-item" href="#">Done</a>
            </div>
          </div>
          <button class="btn btn-light done-button">Done</button>
          <div class="d-flex">
            <button type="button" class="btn btn-light mx-3">
              <i class="bi bi-trash"></i>
            </button>
            <button type="button" class="btn btn-light " data-toggle="modal" data-target="#editTask"><i class="bi bi-pencil-square"></i></button>
          </div>
        </div>
      </li>
    </ul>
    `

    return html;

}

class TaskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate, status){
        this.currentId++;

        const task = {
            id: this.currentId,   
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        }

        this.tasks.push(task)
    }

    render(){
        let tasksHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            let date = new Date(task.dueDate)
            
            let taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, date.formattedDate, task.status);
            tasksHtmlList.push(taskHtml);
        }

        let tasksHtml = tasksHtmlList.join("\n");

        let taskList = document.getElementById("task-list");
        taskList.innerHTML = tasksHtml;
        
    }
}

