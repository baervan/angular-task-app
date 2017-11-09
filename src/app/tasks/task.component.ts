import { Component, Input, OnInit } from '@angular/core'
import { Task } from './task.interface'
import { ModalService } from '../shared/modal.service'
import { Observable } from 'rxjs/Observable'
import { TimeService } from '../time/time.service'

@Component({
  selector: 'task',
  templateUrl: 'app/tasks/task.component.html',
  styleUrls: ['app/tasks/task.component.css']
})
export class TaskComponent {
  @Input() task: Task
  private deadlineInput: string = "11/11/1111 00:00"
  private durationInput: string = "00:00"
  private btnSlide: boolean = false
  private bounceTimer: any

  constructor(private modal: ModalService, private timeService: TimeService) {}

  ngOnInit() {
    this.deadlineInput = this.task.end.dateDisplay
  }

  urgentButtonClick() {
    this.task.urgent = !this.task.urgent
  }

  completedButtonClick() {
    this.task.completed = !this.task.completed
  }

  deleteButtonClick() {
    let tempSlide = this.btnSlide

    //key press delay
    setTimeout( () => {
      if( tempSlide === this.btnSlide ) {
        this.btnSlide = !this.btnSlide
      }
    }, 50)
    /*
    this.modal.render({
      type: 'yes-no',
      content: `
      Are you sure you want to delete
      ${this.task.name}?
      `
    })*/
  }

  deleteButtonConfirm(resp: boolean) {
    console.log(resp)
    this.deleteButtonClick()
  }

  onDeadlineChange(e: any) {
    let tempInput = this.deadlineInput
    const delayTime = 400

    //key press delay
    setTimeout( () => {
      if( tempInput === this.deadlineInput ) {
        let tempDate = tempInput.split("/").map( e => parseInt(e) )
        let newDate = new Date( tempDate[2], tempDate[1] - 1, tempDate[0] )

        this.task.end.update( newDate )
      }
    }, delayTime)

  }
 }
