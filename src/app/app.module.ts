import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MailingListComponent } from './components/mailing-list/mailing-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { LocationModule } from './location/location.module';
import { StoryModule } from './story/story.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MailingListComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [

    AppRoutingModule,
    BrowserModule,
    ContactModule,
    HomeModule,
    LocationModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
