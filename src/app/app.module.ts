import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LocationComponent } from './components/location/location.component';
import { MailingListComponent } from './components/mailing-list/mailing-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { AgmCoreModule } from '@agm/core';
import { StoryComponent } from './components/story/story.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LocationComponent,
    MailingListComponent,
    NavbarComponent,
    FooterComponent,
    StoryComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKURpa8WrRHysyqCF5vGJrPOuI6G_hx80'
    }),
    AppRoutingModule,
    BrowserModule,
    ContactModule,
    HomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
