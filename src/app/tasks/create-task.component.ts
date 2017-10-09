import { Component } from '@angular/core'
import { TaskService } from './task.service'
import { InputStringService } from './input-string.service'

@Component({
  selector: 'create-task',
  templateUrl: 'app/tasks/create-task.component.html',
  styleUrls: ['app/tasks/create-task.component.css']
})
export class CreateTaskComponent {
  private inputString: string = null

  constructor(private taskService: TaskService, private inputStringService: InputStringService ) {}

  createTask() {
    this.taskService.createNewTask( this.inputStringService.parse(this.inputString) )
  }

  onKeypress(e: any) {
    if (e.charCode === 13) {
      this.inputValue(e)
      this.createTask()
    }
  }

  inputValue({srcElement}: any) {
    this.inputString = srcElement.value
    srcElement.value = ""
  }

}
