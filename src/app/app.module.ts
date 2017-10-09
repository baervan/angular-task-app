import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppComponent }  from './app.component';
import { appRoutes } from './routes'
import { Sidebar } from './sidebar/sidebar.component'
import {
  MainComponent,
  TaskComponent,
  CreateTaskComponent,
  TaskService,
  InputStringService
} from './tasks/index'
import { TimeService } from './time/time.service'
import { ModalService, ModalComponent } from './shared/index'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TaskService,
    TimeService,
    InputStringService,
    ModalService
  ],
  declarations: [
    AppComponent,
    Sidebar,
    MainComponent,
    TaskComponent,
    CreateTaskComponent,
    ModalComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
