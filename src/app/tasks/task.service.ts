import { Injectable } from '@angular/core'
import { Task } from './task.interface'
import { TimeService } from '../time/time.service'

@Injectable()
export class TaskService {

  private tasks: Task[] = []
  private id: number = 0

  //example starting tasks
  private exampleTask1: Task = {
    id: 1,
    project: "Gado",
    name: "Gado",
    timestamp: "today",
    priority: 1,
    times : {
      start: "today",
      end: "today"
    },
    completed: false,
    active: true
  }

  private exampleTask2: Task = {
    id: 2,
    project: "Terra",
    name: "Forming",
    timestamp: "today",
    priority: 2,
    times : {
      start: "today",
      end: "today"
    },
    completed: true,
    active: true
  }

  private savedTasks: Task[] = [
    this.exampleTask1,
    this.exampleTask2
  ]

  constructor(private timeService: TimeService) {}

  sendTasks() {
    return this.tasks
  }

  loadTasks() {
    //simulate here connection to db

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

    newTask = {
      id: this.addTaskId(),
      name: params.name,
      timestamp: this.timeService.getTimestamp(),
      urgent: params.urgent,
      times: {
        start: this.timeService.getTimestamp().dateDisplay,
        end: ""
      },
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
}
