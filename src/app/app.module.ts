import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Sidebar } from './sidebar/sidebar.component'
import {
  MainComponent,
  TaskComponent,
  CreateTaskComponent,
  TaskService,
  InputStringService
} from './tasks/index'
import { TimeService } from './time/time.service'

@NgModule({
  imports:      [ BrowserModule ],
  providers: [
    TaskService,
    TimeService,
    InputStringService
  ],
  declarations: [
    AppComponent,
    Sidebar,
    MainComponent,
    TaskComponent,
    CreateTaskComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
