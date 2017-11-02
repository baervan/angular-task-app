import { Component, OnInit } from '@angular/core'
import { Task } from './task.interface'
import { TaskService } from './task.service'
import { TimeService } from '../time/time.service'

@Component({
  templateUrl: 'app/tasks/tasks-page.component.html',
  styleUrls: ['app/tasks/tasks-page.component.css']
})
export class TaskPageComponent implements OnInit {
  private tasks: Task[] = []

  constructor(private taskService: TaskService, private timeService: TimeService) {}

  ngOnInit() {
    //initialize saved tasks
    this.tasks = this.taskService.loadTasks()
  }
}
