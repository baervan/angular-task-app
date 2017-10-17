import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppComponent }  from './app.component'
import { MainComponent } from './main.component'
import { appRoutes } from './routes'
import { Sidebar } from './sidebar/sidebar.component'
import {
  TaskPageComponent,
  TaskComponent,
  CreateTaskComponent,
  TaskService,
  InputStringService
} from './tasks/index'
import { OverviewPageComponent } from './overview/overview-page.component'
import { SettingsPageComponent } from './settings/settings-page.component'
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
    TaskPageComponent,
    TaskComponent,
    CreateTaskComponent,
    OverviewPageComponent,
    SettingsPageComponent,
    ModalComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
