import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  toggleMenu: boolean = true

  sidebarOnClick() {
    this.toggleMenu = !this.toggleMenu
  }
}