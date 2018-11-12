import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { TaskPanelComponent } from './pages/tasks/task-panel/task-panel.component';
import { ListTasksComponent } from './pages/tasks/list-tasks/list-tasks.component';
import { NewComponent } from './pages/tasks/new/new.component';

const routes: Routes = [
  { path: 'taskpanel', component: TaskPanelComponent },
  { path: '', redirectTo: 'taskpanel', pathMatch: 'full' },
  { path: 'listtask', component: ListTasksComponent},
  { path: 'newtask', component: NewComponent},

  // { path: '**', component: TaskPanelComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
