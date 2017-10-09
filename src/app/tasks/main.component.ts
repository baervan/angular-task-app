import { Component, OnInit } from '@angular/core'
import { Task } from './task.interface'
import { TaskService } from './task.service'
import { TimeService } from '../time/time.service'

@Component({
  selector: 'main',
  templateUrl: 'app/tasks/main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {
  private tasks: Task[] = []

  constructor(private taskService: TaskService, private timeService: TimeService) {}

  ngOnInit() {
    //console.log(this.timeService.getElapsedTime())

    //initialize saved tasks
    this.tasks = this.taskService.loadTasks()
  }
}
