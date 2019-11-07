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
    this.collapsedElementsValue[id] = this.getExpColVal(this.collapsedElements[id]);
  }

  isCollapsed(id: number): boolean {
    return this.collapsedElements[id];
  }

  private getExpColVal(val: boolean): string {
    return val ? '+' : '-';
  }
}
