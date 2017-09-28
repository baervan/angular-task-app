import { Injectable } from '@angular/core'
import { Task } from './task.interface'

@Injectable()
export class TaskService {
  
  private tasks: Task[] = []

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
      completed: false
    }

    this.tasks.push(newTask)
  }
}