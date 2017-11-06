import { Injectable } from '@angular/core'

@Injectable()
export class InputStringService {
  private patterns: any = {
    dot: /\./i,
    name: /\.?([a-z0-9\s]*)\\?/i,
    urgent: /(!)/i,
    prop: /\\([u]*)$/i,
    description: /\@([a-z0-9\s]*)/i,
    deadline: /\\([0-9]{1,2}:[0-9]{1,2})$/i,
    duration: /\\([0-9\.]*)$/i,
    project: /^[a-z0-9\s]*\./i
  }

//  private properties: any = {
//    dot: { pattern: /\./ig, type: '', empty: '' },
//    name: { pattern:  /\.?([a-z0-9\s]*)\\*/ig, type: '', empty: ''},
//    urgent: { pattern: /(!)/ig, type: '', empty: '' },
//    prop: { pattern: /\\([u]*)$/ig, type: '', empty: '' },
//    description: { pattern: /\@([a-z0-9\s]*)/ig, type: '', empty: '' },
//    deadline: { pattern: /\\([0-9]{1,2}:[0-9]{1,2})$/ig, type: '', empty: '' },
//    duration: { pattern: /\\([0-9\.]*)$/ig, type: '', empty: '' },
//    project: { pattern: /^[a-z0-9\s]*\./ig, type: '', empty: '' }
//  }

  //parses string with special markers
  parse(str: string) {
    let	pat = this.patterns,
      parsed = {},
      name, props, project, description, deadline, duration, urgent = null

    //dot pattern - project
    if ( pat.dot.test(str) ) {
      project = pat.project.exec(str)
      project = project[0].slice(0, project[0].length - 1)

      str = str.substr( str.search(pat.dot) + 1 )
    }

    /* Maybe implement?
    for( let propName in this.properties ) {
      let prop = this.properties[propName]
      let result = prop.pattern.exec(str)

      if( result !== null ) {
        result = result[0]
      } else result = prop.empty

      parsed = Object.assign(parsed, result)
      console.log(parsed)
    }*/

    //other patterns
    name = pat.name.exec(str);
    name = name[1].charAt(0).toUpperCase() + name[1].slice(1)
    description = pat.description.exec(str)
    deadline = pat.deadline.exec(str)
    duration = pat.duration.exec(str)

    urgent = pat.urgent.exec(str)
    props = pat.prop.exec(str)

    //apply changes
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
