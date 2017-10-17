import { Routes } from '@angular/router'
import { TaskPageComponent } from './tasks/tasks-page.component'
import { OverviewPageComponent } from './overview/overview-page.component'
import { SettingsPageComponent } from './settings/settings-page.component'

export const appRoutes:Routes = [
  { path: 'tasks', component: TaskPageComponent },
  { path: 'overview', component: OverviewPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
]
