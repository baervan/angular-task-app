import { Injectable } from '@angular/core'

@Injectable()
export class InputStringService {

  //parses string with special markers
  parse(str: string) {
    const dotPattern = /\./ig,
      namePattern = /\.?([a-z0-9\s]*)\\*/ig,
      urgentPattern = /(!)/ig,
      propPattern = /\\([u]*)$/ig,
      descriptionPattern = /\@([a-z0-9\s]*)/ig,
      deadlinePattern = /\\([0-9]{1,2}:[0-9]{1,2})$/ig,
      durationPattern = /\\([0-9\.]*)$/ig,
      projectPattern = /^[a-z0-9\s]*\./ig

    let	name,
      props,
      project,
      description,
      deadline,
      duration,
      urgent

    //test for dot presence
    if ( dotPattern.test(str) ) {
      project = projectPattern.exec(str)
      project = project[0].slice(0, project[0].length - 1)

      str = str.substr( str.search(dotPattern) + 1 )
    }

    name = namePattern.exec(str);
    name = name[1].charAt(0).toUpperCase() + name[1].slice(1)
    description = descriptionPattern.exec(str)
    deadline = deadlinePattern.exec(str)
    duration = durationPattern.exec(str)

    urgent = urgentPattern.exec(str)
    props = propPattern.exec(str)

    if(description !== null) {
      description = description[0]
    } else description = "-- --"

    if(deadline !== null) {
      deadline = deadline[0]
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
      project,
      description,
      duration,
      deadline,
    }
  }
}
