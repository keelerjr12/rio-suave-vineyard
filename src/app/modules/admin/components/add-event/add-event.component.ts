import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsService } from 'src/app/modules/shared/services/events.service';
import { RSEvent } from 'src/app/modules/shared/services/rs-event'; 

@Component({
  selector: 'rs-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  addEventFrm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    startDate: new FormControl(''),
    startTime: new FormControl(''),
    endDate: new FormControl(''),
    endTime: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  submitForm(): void {
    console.log(this.name);
    console.log(this.startDate);
    console.log(this.startTime);
    console.log(this.endDate);
    console.log(this.endTime);
    console.log(this.location);
    console.log(this.description);

    const rsevent = new RSEvent();
    rsevent.name = this.name;
    rsevent.dateTimeStart = new Date(this.startDate);
    rsevent.dateTimeEnd = new Date(this.endDate);
    rsevent.location = this.location;
    rsevent.description = this.description;

    console.log(rsevent);

    this.eventsService.addEvent(rsevent).subscribe();
  }

  get name() { return this.addEventFrm.get('name').value; }
  get startDate() { return this.addEventFrm.get('startDate').value; }
  get startTime() { return this.addEventFrm.get('startTime').value; }
  get endDate() { return this.addEventFrm.get('endDate').value; }
  get endTime() { return this.addEventFrm.get('endTime').value; }
  get location() { return this.addEventFrm.get('location').value; }
  get description() { return this.addEventFrm.get('description').value; }
}
