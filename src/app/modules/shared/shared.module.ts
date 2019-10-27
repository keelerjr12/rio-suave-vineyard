import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsTableComponent } from './components/events-table/events-table.component';

@NgModule({
  declarations: [EventsTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EventsTableComponent
  ]
})
export class SharedModule { }
