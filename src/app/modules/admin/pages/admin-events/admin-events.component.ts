import { Component, OnInit } from '@angular/core';
import { RSEvent } from 'src/app/modules/shared/services/rs-event';
import { EventsService } from 'src/app/modules/shared/services/events.service';

@Component({
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {

  events: RSEvent[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getAllEvents().subscribe(
      resp => {
        this.events = resp;
    });
  }

}
