import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEventsRoutingModule } from './user-events-routing.module';
import { UserEventsComponent } from './pages/user-events/user-events.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserEventsComponent],
  imports: [
    CommonModule,
    UserEventsRoutingModule,
    SharedModule
  ]
})
export class UserEventsModule { }
