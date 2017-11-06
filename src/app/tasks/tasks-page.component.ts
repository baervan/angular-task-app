import { Component, OnInit } from '@angular/core'
import { Task } from './task.interface'
import { TaskService } from './task.service'
import { TimeService, Time } from '../time/time.service'

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
  }

  isTodayOrLess( deadline: Time, today: Time ) {
    return this.timeService.compareDates(deadline, today) <= 0
  }

  isTomorrow( deadline: Time, today: Time ) {
    return this.timeService.compareDates(deadline, this.timeService.addDays(today, 1)) === 0
  }

  isLater( deadline: Time, today: Time ) {
    return this.timeService.compareDates(deadline, this.timeService.addDays(today, 1)) === 1
  }
}
