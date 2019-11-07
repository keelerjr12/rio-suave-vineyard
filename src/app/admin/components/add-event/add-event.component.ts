import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsService } from 'src/app/core/events.service';
import { RSEvent } from 'src/app/shared/interfaces/rs-event';

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
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    image: new FormControl('')
  });

  fileData: File;
  previewUrl: string | ArrayBuffer;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  }

  submitForm(): void {
    const rsevent = new RSEvent();
    rsevent.name = this.name;
    rsevent.dateTimeStart = new Date(this.startDate + ' ' + this.startTime);
    rsevent.dateTimeEnd = new Date(this.endDate + ' ' + this.endTime);
    rsevent.location = this.location;
    rsevent.description = this.description;

    console.log(rsevent);

    const formData = new FormData();
    formData.append('file', this.fileData);

    this.eventsService.addEvent(rsevent, formData).subscribe();
  }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
    this.preview();
  }

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
}

  get name() { return this.addEventFrm.get('name').value; }
  get startDate() { return this.addEventFrm.get('startDate').value; }
  get startTime() { return this.addEventFrm.get('startTime').value; }
  get endDate() { return this.addEventFrm.get('endDate').value; }
  get endTime() { return this.addEventFrm.get('endTime').value; }
  get location() { return this.addEventFrm.get('location').value; }
  get description() { return this.addEventFrm.get('description').value; }
  get image() { return this.addEventFrm.get('image').value; }
}
