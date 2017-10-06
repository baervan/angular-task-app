import { Injectable } from '@angular/core'

@Injectable()
export class TimeService {
  startupTimeStamp: Time

  startTimer() {
    this.startupTimeStamp = this.getTimestamp()
  }

  getTimestamp() {
    return new Time( new Date() )
  }

  getElapsedTime(start: Time, end: Time) {
    let elapsed = end.date.valueOf() - start.date.valueOf()

    return elapsed
  }

}

class Time {
  date: Date
  dateArray: any
  timeArray: any
  unix: number
  dateDisplay: string
  timeDisplay: string
  day: number
  month: number
  year: number

  constructor(date: Date) {
    this.date = date
    this.unix = +date
    this.day = date.getDate()
    this.month = date.getMonth() + 1
    this.year = date.getFullYear()
    this.dateArray = [ this.day, this.month, this.year ].map(this.checkTime)
    this.timeArray = [ date.getHours(), date.getMinutes(), date.getSeconds() ].map(this.checkTime)
    this.dateDisplay = this.dateArray.join("/")
    this.timeDisplay = this.timeArray.join(":")
  }

  private checkTime(n: number) {
    return n < 10 ? "0" + n : "" + n;
  }
}
