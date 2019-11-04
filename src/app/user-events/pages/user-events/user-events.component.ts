import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../core/events.service';
import { RSEvent } from 'src/app/shared/interfaces/rs-event';

@Component({
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit {

  private collapsedElements: boolean[];
  private collapsedElementsValue: string[];

  events: RSEvent[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getAllEvents().subscribe(
      resp => {
        this.events = resp;
        this.collapsedElements = new Array(this.events.length).fill(true);
        this.collapsedElementsValue = new Array(this.events.length).fill('+');
    });
  }

  expandCollapseClick(id: number) {
    this.collapsedElements[id] = !this.collapsedElements[id];
  }

  isCollapsed(id: number): boolean {
    return this.collapsedElements[id];
  }

  getExpColVal(id: number): string {
    // TODO: FIX FIRING EVENT MULTIPLE TIMES
    
    console.log(id);
    return (this.collapsedElements[id]) ? '+' : '-';
  }
}
