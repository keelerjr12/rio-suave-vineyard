import { Component, OnInit } from '@angular/core';
import { RSEvent } from 'src/app/shared/interfaces/rs-event';
import { EventsService } from 'src/app/core/events.service';

@Component({
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {

  events: RSEvent[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getAllEvents().subscribe(
      events => {
        this.events = events;
    });
  }

  deleteEvent(id: string) {
    this.eventsService.deleteEvent(id).subscribe();
  }
}
