import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Sidebar } from './sidebar/sidebar.component'
import { 
  MainComponent,
  TaskComponent,
  CreateTaskComponent,
  TaskService
} from './tasks/index'

@NgModule({
  imports:      [ BrowserModule ],
  providers: [
    TaskService
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