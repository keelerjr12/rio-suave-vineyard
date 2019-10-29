import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEventsComponent } from './pages/user-events/user-events.component';


const routes: Routes = [
  {
    path: '',
    component: UserEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEventsRoutingModule { }
