/// <reference types="@types/googlemaps"
import { } from 'googlemaps';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  lat = 36.760955;
  lng = -107.750840;

  constructor() { }

  ngOnInit() {
  }
}
