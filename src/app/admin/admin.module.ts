import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminEventsComponent } from './pages/admin-events/admin-events.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    AdminEventsComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
