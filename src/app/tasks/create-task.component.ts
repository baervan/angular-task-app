import { Component } from '@angular/core'
import { TaskService } from './task.service'

@Component({
  selector: 'create-task',
  templateUrl: 'app/tasks/create-task.component.html'
})
export class CreateTaskComponent {
  private taskName: string = null

  constructor(private taskService: TaskService ) {}

  createTask() {
    let params = { 
      name: this.taskName
    }

    this.taskService.createNewTask(params)
  }

  inputValue({srcElement}: any) {
    this.taskName = srcElement.value
  }
}