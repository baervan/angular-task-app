import { Component, Input } from '@angular/core'

@Component({
  selector: 'sidebar',
  templateUrl: 'app/sidebar/sidebar.component.html',
  styleUrls: ['app/sidebar/sidebar.component.css']
})
export class Sidebar {
  @Input() toggleMenu: boolean

  menuClick() {
    this.toggleMenu = !this.toggleMenu
  }
}
