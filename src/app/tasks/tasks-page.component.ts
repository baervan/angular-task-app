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
  private dateToday: any
  private dateTomorrow: any

  constructor(private taskService: TaskService, private timeService: TimeService) {}

  ngOnInit() {
    //initialize saved tasks
    this.tasks = this.taskService.loadTasks()

    //timestamp
    this.dateToday = this.timeService.getTimestamp()

    //date tomorrow
    this.dateTomorrow = this.dateToday
    this.dateTomorrow.date.setDate( this.dateToday.day + 1 )
    console.log( this.dateToday.date )
  }
}
