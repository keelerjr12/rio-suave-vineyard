import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { EventsComponent } from './pages/events/events.component';
import { AddEventComponent } from './components/add-event/add-event.component';


@NgModule({
  declarations: [
    AdminComponent,
    EventsComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
