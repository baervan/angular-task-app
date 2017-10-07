import { Injectable } from '@angular/core'

@Injectable()
export class InputStringService {

  //parses string with special markers
  parse(str: string) {
    const namePattern = /^([a-z0-9\s]*)\\*/ig,
      urgentPattern = /(!)/ig,
      propPattern = /\\([u]*)$/ig,
      descriptionPattern = /\@([a-z0-9\s]*)/ig,
      deadlinePattern = /\\([0-9]{1,2}:[0-9]{1,2})$/ig,
      durationPattern = /\\([0-9\.]*)$/ig

    let	name,
      props,
      description,
      deadline,
      duration,
      urgent

    name = namePattern.exec(str);
    name = name[1].charAt(0).toUpperCase() + name[1].slice(1)

    description = descriptionPattern.exec(str)
    deadline = deadlinePattern.exec(str)
    duration = durationPattern.exec(str)

    urgent = urgentPattern.exec(str)
    props = propPattern.exec(str)

    if(description !== null) {
      description = description[1]
    } else description = "-- --"

    if(deadline !== null) {
      deadline = deadline[1]
    } else deadline = "-- --"

    /*For NG
    if(duration !== null) {
      duration = 1 * duration[1]
    } else duration = 0*/

    if(urgent !== null) {
      urgent = true;
    } else urgent = false
    /*
    if(props !== null) {
      if(props[1].search("u") >= 0) {
        urgent = true;
      } else urgent = false;
    };*/

    return {
      name,
      urgent,
      description,
      duration,
      deadline,
    }
  }
}
