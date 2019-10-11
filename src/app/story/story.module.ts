import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './pages/story/story.component';
import { ArtworkComponent } from './components/artwork/artwork.component';


@NgModule({
  declarations: [
    ArtworkComponent,
    StoryComponent
  ],
  imports: [
    CommonModule,
    StoryRoutingModule
  ]
})
export class StoryModule { }
