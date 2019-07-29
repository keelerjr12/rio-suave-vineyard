/// <reference types="@types/googlemaps"
import {} from 'googlemaps';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @ViewChild('gmap', null) gmapElement: any;
  map: google.maps.Map;
  origin: google.maps.LatLng = new google.maps.LatLng(36.760955, -107.750840);

  constructor() { }

  ngOnInit() {
    const mapProp = {
      center: this.origin,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true, // a way to quickly hide all controls
      mapTypeControl: true,
      scaleControl: true,
      zoomControl: true,
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    const marker = new google.maps.Marker({
      position: this.origin,
      map: this.map
    });
  }
}
