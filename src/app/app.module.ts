import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocationComponent } from './location/location.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { FooterComponent } from './footer/footer.component';

import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    LocationComponent,
    MailingListComponent,
    ContactComponent,
    NavbarComponent,
    ArtworkComponent,
    FooterComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKURpa8WrRHysyqCF5vGJrPOuI6G_hx80'
    }),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
