import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../core/events.service';
import { RSEvent } from 'src/app/shared/interfaces/rs-event';

@Component({
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  events: RSEvent[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getAllEvents().subscribe(
      resp => {
        this.events = resp;
    });
  }
}
