import { Component, Input } from '@angular/core'
import { Task } from './task.interface'

@Component({
  selector: 'task',
  templateUrl: 'app/tasks/task.component.html',
  styleUrls: []
})
export class TaskComponent {
  @Input() task: Task
 }