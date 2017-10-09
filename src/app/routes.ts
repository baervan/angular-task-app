import { Routes } from '@angular/router'
import { MainComponent } from './tasks/main.component'

export const appRoutes:Routes = [
  { path: 'tasks', component: MainComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
]
