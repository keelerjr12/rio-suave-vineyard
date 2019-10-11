import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './pages/location/location.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [    
    AgmCoreModule.forRoot({
    apiKey: environment.apiKey
    }),
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
