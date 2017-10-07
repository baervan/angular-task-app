import { Injectable } from '@angular/core'
import { Task } from './task.interface'
import { TimeService } from '../time/time.service'

@Injectable()
export class TaskService {

  private tasks: Task[] = []

  constructor(private timeService: TimeService) {}

  sendTasks() {
    return this.tasks
  }

  //just for dev
  firstTask() {
    let firstTask: Task = {
      project: "Gado",
      name: "Gado",
      timestamp: "today",
      priority: 1,
      times : {
        start: "today",
        end: "today"
      },
      completed: false
    }

    this.tasks.push(firstTask)
  }

  createNewTask(params: any) {
    let newTask = new Task

    newTask = {
      name: params.name,
      timestamp: this.timeService.getTimestamp(),
      urgent: params.urgent,
      times: {
        start: this.timeService.getTimestamp().dateDisplay;
      },
      completed: false
    }

    this.tasks.push(newTask)

    console.log(this.tasks)
  }
}
