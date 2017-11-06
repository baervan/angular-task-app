import { Injectable } from '@angular/core'
import { Task } from './task.interface'
import { TimeService } from '../time/time.service'

@Injectable()
export class TaskService {

  private tasks: Task[] = []
  private id: number = 0
  private savedTasks: Task[] = []

  constructor(private timeService: TimeService) {}

  sendTasks() {
    return this.tasks
  }

  loadTasks() {
    //simulate here connection to db
    this.savedTasks = this.exampleTasks()

    //if there are saved tasks
    if (this.savedTasks.length) {
      this.tasks = this.savedTasks

      //update id counter with highest already saved id
      this.id = this.tasks
        .map( task => task.id )
        .reduce( (max, num) => max = Math.max(max, num) )
    }

    return this.tasks
  }

  saveTasks() {
    //simulate saving tasks on db
  }

  createNewTask(params: any) {
    let newTask = new Task
    let time = this.timeService.getTimestamp()

    newTask = {
      id: this.addTaskId(),
      name: params.name,
      project: params.project,
      timestamp: time,
      end: time,
      urgent: params.urgent,
      completed: false,
      active: true
    }

    this.tasks.push(newTask)

    console.log(this.tasks)
  }

  addTaskId() {
    this.id++
    return this.id
  }

  //creates example starting tasks
  exampleTasks() {
    let taskTomorrow = this.timeService.getTimestamp()
    taskTomorrow = this.timeService.addDays( taskTomorrow, 1)

    let exampleTask1: Task = {
      id: 1,
      project: "Gado",
      name: "Gado",
      infos: "very nice",
      timestamp: taskTomorrow,
      end: taskTomorrow,
      priority: 1,
      completed: false,
      active: true
    }

    let taskLater = this.timeService.getTimestamp()
    taskLater = this.timeService.addDays( taskLater, 2)

    let exampleTask2: Task = {
      id: 2,
      project: "Terra",
      name: "Forming",
      infos: "very hard",
      timestamp: taskLater,
      end: taskLater,
      priority: 2,
      completed: true,
      active: true
    }

    return [exampleTask1, exampleTask2]
  }

}
