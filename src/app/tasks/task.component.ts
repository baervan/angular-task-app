import { Component, Input } from '@angular/core'
import { Task } from './task.interface'
import { ModalService } from '../shared/modal.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'task',
  templateUrl: 'app/tasks/task.component.html',
  styleUrls: ['app/tasks/task.component.css']
})
export class TaskComponent {
  @Input() task: Task
  private deadlineInput: string = ""
  private durationInput: string = "00:00:00"

  constructor(private modal: ModalService) {}

  urgentButtonClick() {
    this.task.urgent = !this.task.urgent
  }

  completedButtonClick() {
    this.task.completed = !this.task.completed
  }

  deleteButtonClick() {
    //modal call
    this.modal.render({
      type: 'yes-no',
      content: `
      Are you sure you want to delete
      ${this.task.name}?
      `
    })

    let modalResponse = new Observable()
    //this.task.active = !this.task.active
  }
 }
