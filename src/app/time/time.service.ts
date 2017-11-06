import { Injectable } from '@angular/core'

@Injectable()
export class TimeService {

  getTime(date: Date) {
    return new Time( date )
  }

  getTimestamp() {
    return new Time( new Date() )
  }

  getElapsedTime(start: Time, end: Time) {
  }

  compareDates(first: Time, second: Time) {
    if ( first.dateDisplay === second.dateDisplay ) return 0
    if (
      first.year > second.year ||
      ( first.year === second.year && first.month > second.month ) ||
      ( first.year === second.year && first.month === second.month && first.day > second.day )
     ) return 1
    else return -1
  }

  addDays(timeObject: Time, n: number) {
    let newTimeObject = this.getTime( new Date( timeObject.array ) )
    let newdate = newTimeObject.date

    newdate.setDate( newdate.getDate() + n )
    newTimeObject.update(newdate)

    return newTimeObject
  }
}

export class Time {
  date: Date
  array: any
  dateArray: any
  timeArray: any
  unix: number
  dateDisplay: string
  timeDisplay: string
  day: number
  month: number
  year: number

  constructor( date: Date ) {
    this.update(date)
  }

  public update( newdate: Date ) {
    this.date = newdate
    this.unix = +newdate
    this.day = newdate.getDate()
    this.month = newdate.getMonth() + 1
    this.year = newdate.getFullYear()
    this.array = [ this.year, this.month, this.day ]
    this.dateArray = [ this.day, this.month, this.year ].map(this.checkTime)
    this.timeArray = [ newdate.getHours(), newdate.getMinutes(), newdate.getSeconds() ].map(this.checkTime)
    this.dateDisplay = this.dateArray.join("/")
    this.timeDisplay = this.timeArray.join(":")
  }

  private checkTime(n: number) {
    return n < 10 ? "0" + n : "" + n;
  }
}
